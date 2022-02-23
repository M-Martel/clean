import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/logo-clean3000-transparent.jpg"}
          alt="cleanheader"
        />
        ;
      </header>

      <div className="form-group">
        <label htmlFor="inputCompagny">Nom entreprise ou client :</label>
        <input id="inputCompagny" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="inputWorker">
          Notre technicien est intervenu pour l'entretien de la vitrerie le :
        </label>
        <input id="inputWorker" type="text" />
      </div>
      <div className="form-group">
        <textarea>Observation</textarea>
      </div>
      <div className="merci">Merci de votre confiance</div>
    </div>
  );
}
export default App;
