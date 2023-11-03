import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "./images/icon-menu.svg?react";
import CloseIcon from "./images/icon-close.svg?react";
import Logo from "./images/logo.svg";

interface HeaderProps {
  openMenu: boolean;
  onMenuOpen: () => void;
  onMenuClose?: () => void;
  children: React.ReactNode;
}

function Header(props: HeaderProps) {
  const { openMenu } = props;

  return (
    <header>
      <IconButton className="menu-btn-mobile" onClick={props.onMenuOpen}>
        <MenuIcon />
      </IconButton>
      <img className="logo" src={Logo} alt="logo" />
      <ul className="menu">
        <li className="menu-item">
          <a href="#">Collections</a>
        </li>
        <li className="menu-item">
          <a href="#">Men</a>
        </li>
        <li className="menu-item">
          <a href="#">Women</a>
        </li>
        <li className="menu-item">
          <a href="#">About</a>
        </li>
        <li className="menu-item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="section-user">{props.children}</div>
      <Drawer anchor="left" open={openMenu} onClose={props.onMenuClose}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <IconButton style={{ padding: 32, paddingTop: 16 }}>
                <CloseIcon />
              </IconButton>
            </ListItem>
            {["Collections", "Men", "Women", "About", "Contact"].map((text) => (
              <ListItem key={text}>
                <ListItemButton>
                  <p
                    style={{
                      fontFamily: "Kumbh Sans",
                      fontWeight: 700,
                    }}
                  >
                    {text}
                  </p>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </header>
  );
}

export default Header;
