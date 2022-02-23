import React from "react";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [submit, setSubmit] = useState({
    name: "",
    date: "date",
    text: "",
  });

  const handleChange = (key, value) => {
    setSubmit({
      ...submit,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const build = JSON.stringify(submit);
    console.log(build);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/logo-clean3000-transparent.png"}
          alt="cleanheader"
        />
      </header>
      <div className="wrappeur">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="inputName">Nom :</label>
            <input
              id="inputName"
              type="text"
              value={submit.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div>
            <input
              id="date"
              bsSize="lg"
              type="date"
              name="date"
              value={submit.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputText">Observation :</label>
            <textarea
              name="text"
              id="inputText"
              cols="10"
              rows="10"
              onChange={(e) => handleChange("text", e.target.value)}
            ></textarea>
          </div>
          <div className="merci">
            Merci de votre confiance
            <Link to={`/command`}>
              <input type="submit" value="validation" onClick={handleChange} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default App;
