import React from 'react';
import './BlogContainer.css'; 

interface ContentContainerProps {
  children: React.ReactNode; 
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <div className="blog-container">
      {children}
    </div>
  );
};

export default ContentContainer;