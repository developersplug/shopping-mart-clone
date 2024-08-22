// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import { UserStore } from './components/Store/UserStore.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-s2544uh7ooco7vfh.us.auth0.com"
    clientId="L1ntAfgul9GqvokWX0AXapXlhKjgoE5x"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={UserStore}>
      <App />
    </Provider>
  </Auth0Provider>

)
