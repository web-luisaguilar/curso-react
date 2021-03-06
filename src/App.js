import React from 'react';
import logo from './logo.svg';
import './App.css';

import Componente from './components/Componente';
import Propiedades from './components/Propiedades.jsx';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApi from './components/AjaxApis';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <br />
                <br />
                <br />
                <br />
                <section>
                    <Componente msg="Hola soy un Componente Funcional expresado" />
                    <hr />
                    <Propiedades
                        cadena="Esto es una Cadena de Texto"
                        numero={'19'}
                        buleano={false}
                        arreglo={[1, 2, 3]}
                        objeto={{ nombre: 'Luis', correo: 'Luis@gmail.com' }}
                        funcion={(num) => num * num}
                        elementoReact={<i>Esto es un Elemento React</i>}
                        componenteReact={
                            <Componente msg="soy un componente como Prop" />
                        }
                    />
                    <hr />
                    <Estado />
                    <hr />
                    <RenderizadoCondicional />
                    <hr />
                    <RenderizadoElementos />
                    <hr />
                    <EventosES6 />
                    <hr />
                    <EventosES7 />
                    <hr />
                    <MasSobreEventos />
                    <hr />
                    <Padre />
                    <hr />
                    <CicloVida />
                    <hr />
                    <AjaxApi />
                    <hr />
                </section>
            </header>
        </div>
    );
}

export default App;
