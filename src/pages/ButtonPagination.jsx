// src/pages/ButtonPagination.jsx
import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../api';
import PhotoCard from '../components/PhotoCard';
import ResponsivePagination from 'react-responsive-pagination';
import '../style.css'; 

const ButtonPagination = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(2); // Boshlang'ich sahifa 2
  const [totalPages, setTotalPages] = useState(10); // Sahifalar soni
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPhotos(currentPage)
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>Button Pagination</h1>
      <div className="photo-grid">
        {loading ? <p>Loading...</p> : photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      <div className="pagination">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          className="custom-pagination"
          renderNav={(className, isDisabled, onClick, children) => (
            <button
              className={`${className} arrow ${isDisabled ? 'disabled' : ''}`}
              onClick={onClick}
              disabled={isDisabled}
            >
              {children}
            </button>
          )}
          renderPage={(className, isActive, pageNumber, onClick) => (
            <button
              className={`${className} ${isActive ? 'active' : ''}`}
              onClick={onClick}
            >
              {pageNumber}
            </button>
          )}
          renderEllipsis={() => <span className="ellipsis">...</span>}
        />
      </div>
    </div>
  );
};

export default ButtonPagination;

