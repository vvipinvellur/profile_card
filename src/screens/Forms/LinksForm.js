import React, { useEffect } from 'react';
import QRCode from 'qrcode';

function QRCodeComponent() {
  useEffect(() => {
    // Define the data you want to encode in the QR code
    const data = 'https://www.example.com';

    // Generate the QR code as an SVG string
    QRCode.toString(data, { type: 'svg' }, function (error, svgString) {
      if (error) {
        console.error(error);
        return;
      }
      console.log('QR code generated');
    
      // Convert the SVG string to an actual SVG element
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
    
      // Create a new image element
      const imageElement = new Image();
      imageElement.src = 'path_to_your_image'; // Replace with the correct path to your image
    
      // Wait for the image to load
      imageElement.onload = function() {
        // Set the size and position of the image
        const imageSize = 50; // Adjust image size as needed
        const imageX = (svgElement.getAttribute('width') - imageSize) / 2;
        const imageY = (svgElement.getAttribute('height') - imageSize) / 2;
        imageElement.width = imageSize;
        imageElement.height = imageSize;
        imageElement.style.position = 'absolute';
        imageElement.style.left = `${imageX}px`;
        imageElement.style.top = `${imageY}px`;
    
        // Append the image to the SVG element
        svgElement.appendChild(imageElement);
    
        // Append the SVG element to the document body (or any other container)
        document.body.appendChild(svgElement);
      };
    
      // Handle image loading errors
      imageElement.onerror = function() {
        console.error('Error loading image:', imageElement.src);
      };
    });
  }, []);

}

export default QRCodeComponent;
