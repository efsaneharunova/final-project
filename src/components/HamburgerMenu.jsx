import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  List,
  ListItemText,
  Button,
  Collapse,
  ListItemButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LanguageContext";

const HEADER_HEIGHT = 90;

const HamburgerMenu = ({ open, onClose }) => {
  const { lang } = useContext(LangContext);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!visible) return null;

  const MenuItems = {
    About: [
      { labelAz: "Şirkət haqqında", labelEn: "About company", path: "/about" },
      {
        labelAz: "Müştərilərin fikri",
        labelEn: "Customer opinion",
        path: "/reviews",
      },
      { labelAz: "Layihələrimiz", labelEn: "Projects", path: "/projects" },
      { labelAz: "Karyera", labelEn: "Career", path: "/career" },
    ],
    Services: [
      {
        labelAz: "Veb saytların hazırlanması",
        labelEn: "Website Development",
        path: "/websitedev",
      },
      {
        labelAz: "Veb saytlara texniki dəstək",
        labelEn: "Website technical support",
        path: "/webtechsupport",
      },
      {
        labelAz: "Korporativ mail",
        labelEn: "Corporate email",
        path: "/corporateemail",
      },
      {
        labelAz: "Ödəmə sistemlərinin inteqrasiyası",
        labelEn: "Payment systems integration",
        path: "/paymentsystems",
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: `${HEADER_HEIGHT}px`,
        left: 0,
        width: "100%",
        height: `calc(100vh - ${HEADER_HEIGHT}px - max(80px, 5vh))`,
        backgroundColor: "#fff",
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        p: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        animation: `${open ? "slideDown" : "slideUp"} 0.3s ease-out forwards`,
        "@keyframes slideDown": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "@keyframes slideUp": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
      }}
    >
      <List sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <ListItemButton
          onClick={() => setAboutOpen((prev) => !prev)}
          sx={{
            px: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListItemText
            primary={lang === "AZ" ? "Haqqımızda" : "About"}
            slotProps={{
              primary: { sx: { fontSize: 18, fontWeight: 400 } },
            }}
          />
          {aboutOpen ? (
            <ExpandMoreIcon sx={{ color: "#333" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "#333" }} />
          )}
        </ListItemButton>
        <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {MenuItems.About.map((subItem, i) => (
              <ListItemButton
                key={i}
                sx={{ pl: 3, py: 1 }}
                component={Link}
                to={subItem.path}
                onClick={onClose}
              >
                <ListItemText
                  primary={lang === "AZ" ? subItem.labelAz : subItem.labelEn}
                  slotProps={{
                    primary: { sx: { fontSize: 16, fontWeight: 400 } },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton
          onClick={() => {
            setServicesOpen((prev) => {
              const newState = !prev;
              if (newState) setAboutOpen(false);
              return newState;
            });
          }}
          sx={{
            px: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListItemText
            primary={lang === "AZ" ? "Xidmətlərimiz" : "Services"}
            slotProps={{
              primary: { sx: { fontSize: 18, fontWeight: 400 } },
            }}
          />
          {servicesOpen ? (
            <ExpandMoreIcon sx={{ color: "#333" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "#333" }} />
          )}
        </ListItemButton>
        <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {MenuItems.Services.map((subItem, i) => (
              <ListItemButton
                key={i}
                sx={{ pl: 3, py: 1 }}
                component={Link}
                to={subItem.path}
                onClick={onClose}
              >
                <ListItemText
                  primary={lang === "AZ" ? subItem.labelAz : subItem.labelEn}
                  slotProps={{
                    primary: { sx: { fontSize: 16, fontWeight: 400 } },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        {["Portfolio", "Blog", "Contact"].map((item, i) => (
          <ListItemButton
            key={i}
            sx={{ px: 0 }}
            component={Link}
            to={`/${item.toLowerCase()}`}
            onClick={onClose}
          >
            <ListItemText
              primary={
                lang === "AZ" && item === "Blog"
                  ? "Bloq"
                  : lang === "AZ" && item === "Contact"
                  ? "Əlaqə"
                  : item
              }
              slotProps={{
                primary: { sx: { fontSize: 18, fontWeight: 400 } },
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box
        sx={{
          backgroundColor: "#f2f3f6",
          borderRadius: 2,
          textAlign: "center",
          py: 1.5,
          fontWeight: 600,
          fontSize: 18,
          userSelect: "none",
        }}
      >
        <a
          href="tel:+994552509600"
          style={{ textDecoration: "none", color: "#000" }}
        >
          +99455 250 96 00
        </a>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#28b55f",
          textTransform: "none",
          fontWeight: 600,
          fontSize: 18,
          borderRadius: 2,
          py: 1.5,
          "&:hover": { backgroundColor: "#25a455" },
          userSelect: "none",
        }}
        onClick={onClose}
      >
        {lang === "AZ" ? "Qiymət təklifi al" : "Get a quote"}
      </Button>
    </Box>
  );
};

export default HamburgerMenu;
