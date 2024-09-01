import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
require('dotenv').config();
import { Landing } from './components/Landing';

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Landing />)