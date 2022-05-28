import { Fragment } from "react";
import { Route } from "react-router-dom";
import { useParams, Link } from "react-router-dom";

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

  const detailPath = `/quotes/${params.quoteId}`;
  const commentsPath = `${detailPath}/comments`;

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* we added a route here to only show the load comments button if we are on the detail route, else it should not be shown */}
      <Route path={detailPath} exact>
        <div className="centered">
          <Link className="btn--flat" to={commentsPath}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={commentsPath}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
