import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 
  const [mysteryNumber, setMysteryNumber] = useState(Math.floor(Math.random() * 100) + 1);
  
  const [nombre, setNumber] = useState("");
 
  const [history, setHistorique] = useState([]);

  const [tentative, setTentative] = useState(0);
  
  const Submitbtn = (e) => {
    e.preventDefault();
    
    const newNumber = parseInt(nombre);
    
    if (isNaN(newNumber)) {
      alert("Veuillez entrer un nombre valide");
      return;
    }
    
    if (newNumber < 1 || newNumber > 100) {
      alert("Veuillez entrer un nombre entre 1 et 100");
      return;
    }
    
    setHistorique([...history, newNumber]);
    setTentative(tentative + 1);
    if (newNumber === mysteryNumber) {
      
      alert(`Bravo, vous avez trouvé le nombre mystère en ${tentative} tentatives !!!`);
      
      setMysteryNumber(Math.floor(Math.random() * 100) + 1);
      
      // setHistorique([]);
      // setTentative(0);
    } else if (newNumber > mysteryNumber) {
      
      alert("C'est moins !");
    } else {
      
      alert("C'est plus !");
    }
    
    setNumber("");
  };

  return <>
    <div className="container">
      <form onSubmit={Submitbtn} className="form-group">
        <input type="number" value={nombre} onChange={(e) => setNumber(e.target.value)} className="form-control" />
        <button type="submit" className="btn btn-primary mt-3" >Deviner</button>
      </form>
      <h2>Historique de vos coups:</h2>
      <ul className="list-group">
        {history.map((nombre, index) => (
          <li key={index} className="list-group-item">{nombre}</li>
        ))}
      </ul>
      <h2>Nombre de tentatives : {tentative}</h2>
    </div>
  </>
}

export default App;
