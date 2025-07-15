import React, { useState, useEffect } from 'react';
import axios from 'axios';

const categories = [
  'BM Academy',
  'Dada’s Kitchen',
  'Real Estate',
  'Hajj & Umrah',
  'Foundation Programs',
  'TravellersNeed'
];

const AdminPanel = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        setError('Please select a valid image file');
        setFile(null);
        setPreview(null);
        document.getElementById('fileInput').value = '';
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setError(null);
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select an image file');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('category', category);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/images/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccessMessage(response.data.message);
      setFile(null);
      setPreview(null);
      document.getElementById('fileInput').value = '';
      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.response?.data?.error || 'Failed to upload image. Please check the server connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreview(null);
    setError(null);
    document.getElementById('fileInput').value = '';
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4">
      
      <div className="max-w-md w-full p-6 bg-white rounded-lg border border-gray-500/30 shadow-[0px_1px_15px_0px] shadow-black/10 text-sm">
        <div className="flex items-center justify-center w-11 h-11 bg-gray-500/10 rounded-full">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.124 11.083h4.75m5.541 3.959a1.584 1.584 0 0 1-1.583 1.583H3.165a1.583 1.583 0 0 1-1.583-1.583V3.958a1.583 1.583 0 0 1 1.583-1.583h3.959L8.707 4.75h7.125a1.583 1.583 0 0 1 1.583 1.583z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-2xl text-gray-800 font-medium mt-3">Upload an Image</h2>
        <p className="text-gray-500/80 mt-1">Select category and attach the image below</p>

        <div className="mt-4">
          <label htmlFor="category" className="block text-gray-700 font-medium mb-1">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <label htmlFor="fileInput" className="border-2 border-dotted border-gray-400 p-8 mt-6 flex flex-col items-center gap-4 cursor-pointer hover:border-blue-500 transition">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.085 2.583H7.75a2.583 2.583 0 0 0-2.583 2.584v20.666a2.583 2.583 0 0 0 2.583 2.584h15.5a2.583 2.583 0 0 0 2.584-2.584v-15.5m-7.75-7.75 7.75 7.75m-7.75-7.75v7.75h7.75M15.5 23.25V15.5m-3.875 3.875h7.75" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-gray-500">Drag image here to upload</p>
          <p className="text-gray-400">Or <span className="text-blue-500 underline">click here</span> to select an image</p>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {preview && (
          <div className="mt-4 flex justify-center">
            <img
              src={preview}
              alt="Selected preview"
              className="max-w-full h-auto rounded-md shadow-md"
              style={{ maxHeight: '200px' }}
            />
          </div>
        )}

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {successMessage && (
          <div className="bg-white inline-flex space-x-3 p-3 text-sm rounded border border-gray-300/60 mt-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <h3 className="text-gray-700 font-medium">Successfully saved!</h3>
              <p className="text-gray-500">Image has been uploaded successfully.</p>
            </div>
            <button
              type="button"
              aria-label="close"
              className="inline-flex active:scale-95 transition"
              onClick={() => setSuccessMessage(null)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="12.532" width="17.498" height="2.1" rx="1.05" transform="rotate(-45.74 0 12.532)" fill="#7d838b" fillOpacity=".7"/>
                <rect x="12.531" y="13.914" width="17.498" height="2.1" rx="1.05" transform="rotate(-135.74 12.531 13.914)" fill="#7d838b" fillOpacity=".7"/>
              </svg>
            </button>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            className="px-9 py-2 border border-gray-500/50 bg-white hover:bg-blue-100/30 active:scale-95 transition-all text-gray-500 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all text-white rounded flex items-center justify-center"
            onClick={handleUpload}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading...
              </>
            ) : (
              'Upload Image'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;