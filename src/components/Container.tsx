import React from "react";
import "./ContentContainer.css";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default ContentContainer;
