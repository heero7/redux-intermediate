import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';

// Routes
import Car from './components/car';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/car/:id" component={Car}/>
        </div>
    </BrowserRouter>, document.getElementById('root'));