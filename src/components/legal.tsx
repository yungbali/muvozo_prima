import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/ui/card"
import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import { FileText, Upload, Download, Eye } from "lucide-react"
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AnimatedCard = motion(Card);

const HoverCard = styled(AnimatedCard)`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

export default function Legal() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Music License Agreement', status: 'Signed', date: '2023-05-15' },
    { id: 2, name: 'Copyright Registration', status: 'Pending', date: '2023-06-01' },
    { id: 3, name: 'Performance Contract', status: 'Draft', date: '2023-06-10' },
  ])

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic to handle document upload
    console.log('Uploading document...')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">Legal Documents</h1>
      
      <HoverCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <CardHeader>
          <CardTitle>Upload New Document</CardTitle>
          <CardDescription>Add a new legal document to your portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="document">Document</Label>
              <Input id="document" type="file" />
            </div>
            <Button type="submit" className="w-full">
              <Upload className="mr-2 h-4 w-4" /> Upload Document
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
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> View
                </Button>
                <Button variant="outline" size="sm">
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