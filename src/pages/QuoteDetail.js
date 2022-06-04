import { Fragment, useEffect } from "react";
import { useParams, Link, Route, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Marc", text: "Learning React is fun!" },
//   { id: "q2", author: "Ahmed", text: "Learning Angular is fun!" },
//   { id: "q3", author: "Khaled", text: "Learning PHP is fun!" },
//   { id: "q4", author: "Mina", text: "Learning Python is fun!" },
// ];

const QuoteDetail = () => {
  const params = useParams();
  /**
   * The useRouteMatch hook returns an object with information about the current route
   * like path and url
   * the path is the exact path we are defining in the app.js file // quotes/:quoteId
   * the url is the exact url with its parameters included // quotes/q1
   */
  const match = useRouteMatch();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* we added a route here to only show the load comments button if we are on the detail route, else it should not be shown */}
      {/* We can use the match.path here because we are just defining a route */}
      <Route path={match.path} exact>
        <div className="centered">
          {/* We are using the match.url here because this is a link */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
