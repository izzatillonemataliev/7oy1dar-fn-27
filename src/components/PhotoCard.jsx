// src/components/PhotoCard.jsx
import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img 
        src={photo.thumbnailUrl} 
        alt={photo.title} 
        onError={(e) => { e.target.src = '/default-image.jpg'; }} // Default image if loading fails
      />
      <p>{photo.title}</p>
    </div>
  );
};

export default PhotoCard;
