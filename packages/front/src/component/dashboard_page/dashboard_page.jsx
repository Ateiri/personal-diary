import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { ConfigContext } from "../../global_context";
import { SignIn } from "../sign_in";

import { authByGoogle, logout } from "./dashboard_page.actions";
import styles from "./dashboard_page.scss";

/**
 * Dashboard page.
 *
 * @returns {React.FunctionComponentElement<any>}
 */
export const DashboardPage = () => {
  const { googleAuthURL, googleLogoutURL, isLogged } = useContext(
    ConfigContext
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
          <div className={styles["login-btn"]}>
            <Button
              color="inherit"
              onClick={
                isLogged ? logout(googleLogoutURL) : authByGoogle(googleAuthURL)
              }
            >
              {isLogged ? "Logout" : "Login"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={styles.content} fixed>
        <SignIn />
      </Container>
    </>
  );
};
