import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Marc", text: "Learning React is fun!" },
  { id: "q2", author: "Ahmed", text: "Learning Angular is fun!" },
  { id: "q3", author: "Khaled", text: "Learning PHP is fun!" },
  { id: "q4", author: "Mina", text: "Learning Python is fun!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
