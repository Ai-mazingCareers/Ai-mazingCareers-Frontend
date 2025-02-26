import { useState } from 'react';
import "./style/FilePage.css";
export default function FilePage({useCount,setPdfUrl,setPdfFile}) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setError(null);
        } else {
            setError('Only PDF files are allowed');
            setFile(null);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a PDF file first.');
            return;
        }
        setPdfFile(file);
        const url=URL.createObjectURL(file);
        setPdfUrl(url);
        useCount(1);

        // try {
        //     const response = await fetch('/api/upload', {
        //         method: 'POST',
        //         body: formData,
        //     });

        //     if (response.ok) {
        //         alert('File uploaded successfully');
        //     } else {
        //         setError('Failed to upload file');
        //     }
        // } catch (error) {
        //     setError('An error occurred while uploading');
        // }
    };

    return (
        <div className='file-upload'>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {error && <p>{error}</p>}
            <button onClick={handleUpload}>Upload Resume</button>
        </div>
    );
}
