import React from 'react';
import ReactDOM from 'react-dom/client';
import 'dotenv/config';
import { Landing } from './components/Landing';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { Search } from './components/Search';


const Component = () => (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
);

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Component />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/blogs',
        element: <Landing />
      },
      {
        path: '/search',
        element: <Search />
      }
    ]
  }
])

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
root.render(<RouterProvider router={appRouter} />)