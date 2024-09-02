import React from 'react';
import ReactDOM from 'react-dom/client';
require('dotenv').config();
import { Landing } from './components/Landing';
import { Provider } from 'react-redux';
import store from './redux/store';

const Component = () => (
    <Provider store={store}>
        <Landing />
    </Provider>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component />)