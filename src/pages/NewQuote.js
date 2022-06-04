import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory(); // the useHistory hook gets back an object with the browser history

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);

    /**
     * The push and the replace method, both allows us to navigate to another route
     * The difference between them is:
     *  push:
     *    allows the user to go back after being redirected, because simply it adds a new route the history stack
     *  replace:
     *    doesn't allow the user to go back because it replaces the current route in the browser history
     */
    // history.push("/quotes");
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
