import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";

import { routes } from "./routes";
import { ConfigContext } from "./global_context";

/**
 * @typedef {Object} FrontConfig
 * @property {string} googleAuthURL Google Authorization URL.
 * @property {string} googleLogoutURL Google logout URL.
 * @property {boolean} isLogged `true` if user logged on, otherwise `false`.
 */

/**
 * Render application.
 *
 * @param {FrontConfig} config Global configuration.
 */
export const renderApp = config => (
  <ConfigContext.Provider value={config}>
    {renderRoutes(routes)}
  </ConfigContext.Provider>
);

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    // @ts-ignore BFF set global configuration.
    const config = window._config;

    ReactDOM.hydrate(
      <BrowserRouter>{renderApp(config)}</BrowserRouter>,
      document.getElementById("app")
    );
  });
}
