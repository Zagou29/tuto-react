import { Formulaire } from "./formul.jsx";
import { Clock, Incrementeur, Video } from "./clock";
import { Calculator } from "./convert.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Video name="Gonzague" id="kfcoLj1gl0w" />
      <Formulaire />
      <Incrementeur step={10} start={ 1000} />
      <Clock />
      <Calculator/>
    </div>
  );
  
}

export default App;
