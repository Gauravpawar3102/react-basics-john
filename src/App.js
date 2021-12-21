import './App.css';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

function App() {
  return (
    <section>
      <h1>Hey </h1>
      <Greeting />
      <h1>ThankYou</h1>
    </section>
  );
}

const Person = () => <h2>John janardhan </h2>;
const Message = () => (
  <h2>Hey It's Me John janardhan With a bottle of Water</h2>
);
export default App;
