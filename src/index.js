import React from 'react';
import ReactDOM from 'react-dom/client';
import 'dotenv/config';
import { Landing } from './components/Landing';
import { Provider } from 'react-redux';
import store from './redux/store';

const Component = () => (
    <Provider store={store}>
        <Landing />
    </Provider>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
console.log(`[APP] running in ${process.env.NODE_ENV} mode.`)
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(
        new URL('service-worker.js', import.meta.url),
        {type: 'module'}
      )
      .then(registration => {
        console.log('[SW] service Worker is registered', registration.scope)
      })
      .catch(err => {
        console.error('[SW] service Worker registration failed:', err)
      })
    })
  }
}
root.render(<Component />)