import './Quote.css'
interface QuoteProps {
  author: string;
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ author, quote }) => {

  return (
    <div className='quote-container'>
      <div className='quote-container-text'><p className='quote-text'>{quote}</p></div>
      <div className='quote-container-author'><p className='quote-text'>{author}</p></div>
    </div>
  );
};

export default Quote;
