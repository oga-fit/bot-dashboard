import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import Profile from "./Profile";

export default function Navbar() {
  const [session, loading] = useSession();

  return (
    <>
      <AppBar position="static" className={`navbar`}>
        <Toolbar>
          <Typography variant="h6" className={`title`}>
            Dashboard
          </Typography>
          {!session && (
            <>
              <Button color="inherit" onClick={() => signIn()}>
                Sign in
              </Button>
            </>
          )}

          {session && (
            <>
              <Profile />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
