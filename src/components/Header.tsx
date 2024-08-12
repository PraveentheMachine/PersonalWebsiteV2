import Navbar from "./Navbar";
import "./Header.css";
import ContentContainer from "./Container";

interface HeaderProps {
  topText: string;
  title: string;
  bottomText: string;
  pubDate?: Date;
}

const Header: React.FC<HeaderProps> = ({ topText, title, bottomText,pubDate }) => {
  return (
    <div className="dawg">
      <ContentContainer>
        <Navbar />
        <div className="hero">
          <span>
            <p className="hero-welcome-text">{topText}</p>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-welcome-text">{bottomText}</p>
            <p>{pubDate && pubDate.toISOString()}</p>
          </span>
        </div>
      </ContentContainer>
    </div>
  );
};
export default Header;
