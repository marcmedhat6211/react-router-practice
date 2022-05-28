import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  /**
   * The Prompt component is used to promp some message in certain cases like for example this case, if a user accidentely tries to leave the page after entering some form data
   * Prompt component takes 2 props:
   *  when -> takes a boolean, if it's true, the prompt will then show
   *  message -> takes a method that returns the message string, why a method ? because this method can for example take the location (current location) as its parameter in case you wanted to include anything about this location in your message
   */
  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave ? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusedHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
