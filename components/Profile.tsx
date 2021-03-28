import { Avatar, Divider, IconButton, Menu, MenuItem } from "@material-ui/core";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React from "react";

export default function Profile() {
  const router = useRouter();
  const [session, loading] = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {session && (
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <Avatar
              className={`profile__avatar`}
              alt={session.user.name}
              src={session.user.image}
            />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}>
            <MenuItem onClick={() => router.push("/profile")}>
              {session.user.name}
            </MenuItem>
            <MenuItem disabled>Settings</MenuItem>
            <Divider />
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
}
