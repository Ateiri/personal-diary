import { createContext } from "react";

/**
 * @typedef {import('./index').FrontConfig} FrontConfig
 */

export const ConfigContext = createContext(/** @type {FrontConfig} */ ({}));
