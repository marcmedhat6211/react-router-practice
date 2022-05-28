import { Fragment } from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Marc", text: "Learning React is fun!" },
  { id: "q2", author: "Ahmed", text: "Learning Angular is fun!" },
  { id: "q3", author: "Khaled", text: "Learning PHP is fun!" },
  { id: "q4", author: "Mina", text: "Learning Python is fun!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
