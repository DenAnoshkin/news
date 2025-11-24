import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <Auth0Provider
                domain={import.meta.env.VITE_AUTH0_DOMAIN}
                clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Auth0Provider>
        </Provider>
    </StrictMode>
);
