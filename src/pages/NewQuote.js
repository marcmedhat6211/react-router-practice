import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory(); // the useHistory hook gets back an object with the browser history

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    /**
     * The push and the replace method, both allows us to navigate to another route
     * The difference between them is:
     *  push:
     *    allows the user to go back after being redirected, because simply it adds a new route the history stack
     *  replace:
     *    doesn't allow the user to go back because it replaces the current route in the browser history
     */
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
