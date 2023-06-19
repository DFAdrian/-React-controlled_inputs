import { useState } from "react";
const App = () => {
  const [used, setUsed] = useState(false);
  const [userText, setUserText] = useState({ name: "", email: "" });

  return (
    <div>
      <button
        disabled={used}
        onClick={(ev) => {
          setUsed(!used);
          console.log(used);
          console.log(ev.target);
        }}
      >
        Cliqueate
      </button>

      {/* formulario no controldado */}

      {/* <form
      onSubmit={(ev) => {
        ev.preventDefault();
        setUserText(ev.target.search.value);
      }}
      >
        <input
          type="text"
          name="search"
          onChange={(ev) => setUserText(ev.target.value)}
        ></input>
        <button>Get text</button>
      </form> */}
      <form>
        <input
          type="text"
          name="search"
          value={userText.name}
          onChange={(ev) => {
            setUserText({ ...userText, name: ev.target.value });
          }}
        ></input>
        <input
          type="email"
          name="email"
          value={userText.email}
          onChange={(ev) => {
            setUserText({ ...userText, email: ev.target.value });
          }}
        ></input>
        <button>Get text</button>
      </form>
      <p>
        Lo que pones es: {userText.name} and {userText.email}
      </p>
    </div>
  );
};

export default App;
