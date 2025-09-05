import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import App from "./App.tsx";
import "./index.css";
import {Auth0Provider} from '@auth0/auth0-react'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <Auth0Provider 
      domain="cristianmejia.us.auth0.com" 
      clientId="whFVK93Q38HGupWg8E0FJj6DwkNBVdjR"
      authorizationParams={{redirect_uri: window.location.origin,}}>
      <App />
    </Auth0Provider>
  </StrictMode>,
);

initThemeMode();
