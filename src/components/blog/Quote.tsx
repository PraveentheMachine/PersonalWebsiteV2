interface QuoteProps {
  author: string;
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ author, quote }) => {

  return (
    <div>
      <div><h1>{quote}</h1></div>
      <div><h1>{author}</h1></div>


    </div>
  );
};

export default Quote;
