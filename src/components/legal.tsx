import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { uploadData, getUrl, remove } from '@aws-amplify/storage';
import { getCurrentUser } from '@aws-amplify/auth';
import { 
  Heading, 
  Text, 
  Button, 
  Flex, 
  Card, 
  View, 
  TextField,
  SelectField,
  Badge,
  Loader
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { FileText, Upload, Download, Trash2 } from "lucide-react";
import { LegalDocument, DocumentStatus } from '../models';

const DOCUMENT_TYPES = [
  "Recording Contract",
  "Publishing Agreement",
  "Synchronization License",
  "Performance Rights Agreement",
  "Other"
];

export default function Legal() {
  const [documents, setDocuments] = useState<LegalDocument[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>(DOCUMENT_TYPES[0]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const fetchedDocuments = await DataStore.query(LegalDocument);
      setDocuments(fetchedDocuments);
    } catch (error) {
      console.error('Error fetching documents:', error);
      setError('Failed to fetch documents. Please try again.');
    }
    setLoading(false);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = form.elements.namedItem('document') as HTMLInputElement;
    
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      setLoading(true);
      try {
        const result = await uploadData({
          key: `legal/${selectedType}/${file.name}`,
          data: file,
          options: {
            contentType: file.type
          }
        }).result;
        
        const newDocument = await DataStore.save(
          new LegalDocument({
            title: title,
            description: description,
            fileUrl: result.key,
            status: DocumentStatus.DRAFT,
            uploadDate: new Date().toISOString()
          })
        );
        
        setDocuments([...documents, newDocument]);
        setTitle('');
        setDescription('');
      } catch (error) {
        console.error('Upload Error:', error);
        setError('Failed to upload document. Please try again.');
      }
      setLoading(false);
    }
  };

  const handleDownload = async (doc: LegalDocument) => {
    try {
      const { url } = await getUrl({ key: doc.fileUrl });
      window.open(url, '_blank');
    } catch (error) {
      console.error('Download Error:', error);
      setError('Failed to download document. Please try again.');
    }
  };

  const handleDelete = async (doc: LegalDocument) => {
    setLoading(true);
    try {
      await DataStore.delete(doc);
      await remove({ key: doc.fileUrl });
      setDocuments(documents.filter(d => d.id !== doc.id));
    } catch (error) {
      console.error('Delete Error:', error);
      setError('Failed to delete document. Please try again.');
    }
    setLoading(false);
  };

  return (
    <View padding="medium">
      <Heading level={1} color="brand.primary">Legal Documents for Music Business</Heading>
      
      <Card>
        <Heading level={2}>Upload New Document</Heading>
        <Text>Add a new legal document to your music business portfolio</Text>
        <form onSubmit={handleUpload}>
          <Flex direction="column" gap="medium">
            <SelectField
              label="Document Type"
              options={DOCUMENT_TYPES}
              onChange={(e) => setSelectedType(e.target.value)}
              value={selectedType}
            />
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Document"
              type="file"
              name="document"
              accept=".pdf,.doc,.docx"
              required
            />
            <Button type="submit" isLoading={loading}>
              <Upload /> Upload Document
            </Button>
          </Flex>
        </form>
      </Card>

      {loading && <Loader />}
      {error && <Text color="red">{error}</Text>}

      <Flex direction="column" gap="medium" marginTop="large">
        {documents.map((doc) => (
          <Card key={doc.id} variation="elevated">
            <Flex justifyContent="space-between" alignItems="center">
              <Flex direction="column">
                <Text fontWeight="bold"><FileText /> {doc.title}</Text>
                <Text variation="tertiary">{doc.description}</Text>
                <Text variation="tertiary">Uploaded on {new Date(doc.uploadDate).toLocaleDateString()}</Text>
                <Badge variation={doc.status === DocumentStatus.SIGNED ? "success" : "warning"}>
                  {doc.status}
                </Badge>
              </Flex>
              <Flex gap="small">
                <Button onClick={() => handleDownload(doc)} size="small">
                  <Download /> Download
                </Button>
                <Button onClick={() => handleDelete(doc)} size="small" variation="destructive">
                  <Trash2 /> Delete
                </Button>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Flex>
    </View>
  );
}