import React from 'react';
import { render } from 'react-dom';
import Categorias from './src/playlist/components/categorias.js';
import data from './src/api.json';
// console.log('Hola mundo!')

const app = document.getElementById('app')

// ReactDOM.render(que voy a renderizar, donde lo haré);


// render( <Playlist data={data} />, app);
render(<Categorias data={data}/>, app);
