import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ImageProcess from 'react-image-process';

const Protect = () => {
  const [imageDataUrl, setImageDataUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const processImageWithLandmarks = async () => {
    if (!imageFile) {
      alert('Please select an image first.');
      return;
    }

    try {
      // Read the image file
      const imageBlob = await fetch(URL.createObjectURL(imageFile)).then((response) => response.blob());

      // Fetch landmarks data (replace with actual endpoint)
      const landmarksResponse = await fetch('12865110_0.json');
      const landmarksData = await landmarksResponse.json();

      // Apply image processing operations
      const processedImageDataUrl = await ImageProcess(imageBlob, {
        draw: (ctx) => {
          // Draw landmarks on the image
          ctx.fillStyle = 'red';
          for (const point of landmarksData.points) {
            const x = parseFloat(point.points.x);
            const y = parseFloat(point.points.y);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
          }
        },
      });

      setImageDataUrl(processedImageDataUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={processImageWithLandmarks}>Process Image</button>

        {/* Display the processed image */}
        {imageDataUrl && <img src={imageDataUrl} alt="Processed Image" />}
      </div>
    </div>
  );
};

export default Protect;
