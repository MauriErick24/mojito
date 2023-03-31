import React, { Fragment, useState } from 'react';
import Navbar from "./Components/Navbar.js";

function App() {
    const [cocktailName, setCocktailName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/cocteles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: cocktailName })
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
            } else {
                setMessage('Error al enviar el coctel');
            }
        } catch (error) {
            console.error(error);
            setMessage('Error al enviar el coctel try');
        }
    }

    //   return (
    //     <div className="App">
    //       <form onSubmit={handleSubmit}>
    //         <label>
    //           Nombre del coctel:
    //           <input type="text" value={cocktailName} onChange={(e) => setCocktailName(e.target.value)} />
    //         </label>
    //         <button type="submit">Enviar</button>
    //       </form>
    //       {message && <p>{message}</p>}
    //     </div>
    //   );

    return (
        <Fragment>
            <Navbar brand='Cocteles' />
            <div className="container">
                <div class='col-md-7'>
                    <div class='card'>
                        <div class='card-body'>
                            <div class="row mt-4">

                                <div class='form-group'>
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" value={cocktailName} onChange={(e) => setCocktailName(e.target.value)} placeholder='Nombre del coctel' class="form-control"></input>
                                        <br />
                                        <button type='submit' class='btn btn-primary'> Guardar </button>
                                    </form>
                                    <br />
                                    <br />
                                   <h4>{message && <p>{message}</p>}</h4> 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default App;