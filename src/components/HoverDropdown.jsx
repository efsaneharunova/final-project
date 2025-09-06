import { Link } from "react-router-dom";
import React, { useState, useRef, useContext } from "react";
import {
  Button,
  Paper,
  ClickAwayListener,
  Grow,
  MenuList,
  MenuItem,
  Popper,
} from "@mui/material";
import { LangContext } from "../context/LanguageContext";

const HoverDropdown = ({ label }) => {
  const { lang } = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const MenuItems = {
    About: [
      { labelAz: "Şirkət haqqında", labelEn: "About company", path: "/about" },
      { labelAz: "Müştərilərin fikri", labelEn: "Customer opinion", path: "/reviews" },
      { labelAz: "Layihələrimiz", labelEn: "Projects", path: "/projects" },
      { labelAz: "Karyera", labelEn: "Career", path: "/career" },
    ],
    Services: [
      { labelAz: "Veb saytların hazırlanması", labelEn: "Website Development", path: "/websitedev" },
      { labelAz: "Veb saytlara texniki dəstək", labelEn: "Website technical support", path: "/webtechsupport" },
      { labelAz: "Korporativ mail", labelEn: "Corporate email", path: "/corporateemail" },
      { labelAz: "Ödəmə sistemlərinin inteqrasiyası", labelEn: "Payment systems integration", path: "/paymentsystems" },
    ],
  };

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const menuKey =
    label === "About" || label === "Haqqımızda"
      ? "About"
      : label === "Services" || label === "Xidmətlərimiz"
      ? "Services"
      : "";

  const menuItems = MenuItems[menuKey] || [];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      <Button
        ref={anchorRef}
        component={Link}
        to={
          menuKey === "About"
            ? "/about"
            : menuKey === "Services"
            ? "/services"
            : "#"
        }
        sx={{ 
          color: "#7f7f7f",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "15px",
        }}
        onClick={() => setOpen(false)}
      >
        {label}
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{ minWidth: 150 }}
            >
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList autoFocusItem={open}>
                  {menuItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      component={Link}
                      to={item.path}
                      onClick={() => setOpen(false)}
                    >
                      {lang === "AZ" ? item.labelAz : item.labelEn}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default HoverDropdown;
