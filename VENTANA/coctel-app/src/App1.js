import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar.js";

function App() {

  const[respuesta, setRespuesta] = useState([]);

  useEffect(()=>{
    const getRespuesta= ()=>{
      fetch('http://localhost:4000/coctel')
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => setRespuesta(res))
      
    }
    getRespuesta()
  }, [])

  return (
    <Fragment>
      <Navbar brand='Cocteles' />
      <div className="container">
        <div class='col-md-7'>
          <div class='card'>
            <div class='card-body'>
              <div class="row mt-4">
                <form action='/ping' method='get'>
                  <div class='form-group'>
                    <input type="text" name="mojito" placeholder='coctel' class="form-control"></input>
                    <br />
                    <button type='submit' class='btn btn-primary'> Guardar </button>
                    <br />
                    <br />
                    {/* {respuesta.map(resp => (
                       <h4>{resp.nombre}</h4> 
                    ))}
                     */}
                     {
                      <h4>{respuesta[0].nombre}</h4>
                     }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;




















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
