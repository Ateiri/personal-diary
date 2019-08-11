import React from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";

export const SignIn = () => (
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <Typography variant="h4">Your first Sign in</Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1">
        Set password for your Google Spreadsheet database
      </Typography>
    </Grid>
    <Grid item>
      <TextField
        type="password"
        variant="outlined"
        margin="none"
        label="Password"
      />
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" size="large">
        Continue
      </Button>
    </Grid>
  </Grid>
);
