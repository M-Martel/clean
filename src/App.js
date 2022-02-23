import React from "react";
import "./App.css";
import { Input } from "antd";
import { Link } from "react-router-dom";

const App = () => {
  const { TextArea } = Input;

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/logo-clean3000-transparent.png"}
          alt="cleanheader"
        />
      </header>
      <div className="wrappeur">
        <div className="form-group">
          <label htmlFor="inputCompagny">Nom entreprise ou client :</label>
          <input id="inputCompagny" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="inputWorker">
            Notre technicien est intervenu pour l'entretien de la vitrerie le
          </label>
          <input bsSize="lg" type="date" name="date" />
        </div>
        <div className="form-group">
          Observation
          <TextArea maxLength={50} />
        </div>
        <div className="merci">Merci de votre confiance</div>
        <div className="envoie">
          <Link to={`/NotFound`}>
            <input type="submit" value="validation" />
          </Link>

          {/* <img
            src={process.env.PUBLIC_URL + "/logo-clean3000-transparent.png"}
            alt="cleanfooter"
          /> */}
        </div>
      </div>
    </div>
  );
};
export default App;
