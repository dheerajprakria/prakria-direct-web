"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import portfolioData from '../../../app/data/portfolioData'; // Importing the image data
import "./Portfolio.css"

const categories = Object.keys(portfolioData); // Get categories from the data

const PortfolioTabs = () => {
  return (
    <div className='container my-5 py-5'>
      {/* Bootstrap Nav Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4" id="myTab" role="tablist">
        {categories.map((category, index) => (
          <li className="nav-item" key={index} role="presentation">
            <button
              className={`nav-link ${index === 0 ? 'active' : ''}`}
              id={`${category.replace(/\s+/g, '')}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${category.replace(/\s+/g, '')}`} // Ensure unique ID without spaces
              type="button"
              role="tab"
              aria-controls={category.replace(/\s+/g, '')}
              aria-selected={index === 0 ? 'true' : 'false'}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="myTabContent">
        {categories.map((category, index) => (
          <div
            className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
            id={category.replace(/\s+/g, '')}
            role="tabpanel"
            aria-labelledby={`${category.replace(/\s+/g, '')}-tab`}
            key={index}
          >
            <PortfolioGrid category={category} images={portfolioData[category]} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioGrid = ({ category, images }) => {
  const initialVisible = 11; // Initially show 11 images
  const loadMoreCount = 5; // Load 5 more images each time
  const totalImages = images.length;

  const [visibleImages, setVisibleImages] = useState(initialVisible);

  // Function to load more images
  const loadMoreImages = () => {
    setVisibleImages((prevVisible) =>
      Math.min(prevVisible + loadMoreCount, totalImages)
    ); // Load more images, but not more than the total
  };

  return (
    <div>
      <div className="row">
        {images.slice(0, visibleImages).map((src, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="portfolio-image-wrapper">
              <Image
                src={src}
                alt={`${category} - Image ${index + 1}`}
                width={300}
                height={300}
                className="img-fluid"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Load more button */}
      {visibleImages < totalImages && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={loadMoreImages}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioTabs;
