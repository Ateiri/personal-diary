import { renderRoutes } from "react-router-config";

import "./app.scss";

/**
 * @typedef {import('react-router-config').RouteConfig} RouteConfig
 * @typedef {import('react-router-config').RouteConfigComponentProps} RouteConfigComponentProps
 */

/**
 * Main page.
 *
 * @typedef {Object} AppProps
 *
 * @param {RouteConfigComponentProps | AppProps} props Props.
 * @returns {React.FunctionComponentElement<any>}
 */
export const App = ({ route }) => renderRoutes(route.routes);
