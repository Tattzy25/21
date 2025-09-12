'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setUrl(data.url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        accept="image/*,text/*,application/*"
      />
      <Button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload File'}
      </Button>
      {url && (
        <p>
          Uploaded: <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {url}
          </a>
        </p>
      )}
    </div>
  );
}