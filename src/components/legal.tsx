import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/ui/card"
import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import { FileText, Upload, Download, Eye } from "lucide-react"
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { uploadData, downloadData, list } from 'aws-amplify/storage';

interface Document {
  id: string;
  name: string;
  status: string;
  date: string;
}

const AnimatedCard = motion(Card);

const HoverCard = styled(AnimatedCard)`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

export default function Legal() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const result = await list({
        path: 'legal-documents/',
      });
      setDocuments(result.items.map(item => ({
        id: item.path, // Use 'path' as the unique identifier
        name: item.path.split('/').pop() || '',
        status: 'pending', // Add appropriate status
        date: new Date().toISOString(), // Add appropriate date
      })));
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);

    try {
      // Check file size (e.g., 5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        throw new Error("File size exceeds 5MB limit");
      }

      const fileBlob = convertToBlob(selectedFile);
      await uploadData({
        key: `legal-documents/${selectedFile.name}`,
        data: fileBlob,
        options: {
          contentType: selectedFile.type
        }
      });

      // Refresh the document list after successful upload
      await fetchDocuments();

      // Clear the selected file
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError((error instanceof Error ? error.message : "An error occurred while uploading the file") as string | null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (documentName: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await downloadData({
        key: `legal-documents/${documentName}`
      }).result;

      console.log("Download Result:", result); // For debugging

      let blob: Blob;

      if (result instanceof Blob) {
        // If result is already a Blob, use it directly
        blob = result;
      } else if (result.body instanceof ReadableStream) {
        // If result.body is a ReadableStream, read it in chunks
        const reader = result.body.getReader();
        const chunks: Uint8Array[] = [];
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            chunks.push(value);
          }
        }
        blob = new Blob(chunks, { type: result.contentType });
      } else if (result.body) {
        // If result has a body that's not a ReadableStream
        // Assuming it's an ArrayBuffer or similar binary data
        // Check if it's an ArrayBuffer
        if (result.body instanceof ArrayBuffer) {
          blob = new Blob([result.body], { type: result.contentType });
        } else if (ArrayBuffer.isView(result.body)) {
          blob = new Blob([result.body.buffer], { type: result.contentType });
        } else {
          // Fallback for other binary types
          blob = await result.blob();
        }
      } else {
        throw new Error("Unsupported response format");
      }

      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = documentName;
      link.style.display = 'none';
      document.body.appendChild(link);

      link.click();

      // Clean up
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
      setError(error instanceof Error ? error.message : "An error occurred while downloading the file");
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (documentName: string) => {
    // Implement the view functionality here
    console.log(`Viewing document: ${documentName}`);
    // You might want to open the document in a new tab or modal
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">Legal Documents</h1>
      
      <HoverCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <CardHeader>
          <CardTitle>Upload New Document</CardTitle>
          <CardDescription>Add a new legal document to your portfolio (Max 5MB)</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="document">Document</Label>
              <Input 
                id="document" 
                type="file" 
                onChange={handleFileChange} 
                accept=".pdf,.doc,.docx"
                aria-describedby="file-upload-error"
              />
            </div>
            {error && <p id="file-upload-error" className="text-red-500">{error}</p>}
            <Button 
              type="submit" 
              className="w-full" 
              disabled={!selectedFile || isLoading}
            >
              {isLoading ? (
                "Uploading..."
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" /> Upload Document
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </HoverCard>

      <div className="space-y-4">
        {documents.map((doc) => (
          <HoverCard key={doc.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" /> {doc.name}
              </CardTitle>
              <CardDescription>Uploaded on {doc.date}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <p className={`text-sm font-semibold ${
                doc.status === 'Signed' ? 'text-green-500' : 
                doc.status === 'Pending' ? 'text-yellow-500' : 'text-gray-500'
              }`}>
                Status: {doc.status}
              </p>
              <div className="space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleView(doc.name)}>
                  <Eye className="mr-2 h-4 w-4" /> View
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDownload(doc.name)}>
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </div>
            </CardFooter>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}

// Example function to convert different types to Blob
const convertToBlob = (data: any): Blob => {
  if (data instanceof Blob) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Blob([data]);
  } else if (typeof data === 'string') {
    return new Blob([data], { type: 'text/plain' });
  }
  throw new Error('Unsupported data type for upload.');
};