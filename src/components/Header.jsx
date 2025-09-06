import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import logo from "../assets/images/okmedialogo.png";
import HoverDropdown from "./HoverDropdown";
import HamburgerMenu from "./HamburgerMenu";
import { LangContext } from "../context/LanguageContext";

const Header = () => {
  const { lang, setLang } = useContext(LangContext);
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width:1259px)");
  const isMobile = useMediaQuery("(max-width:992px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#212529",
          py: 3,
          px: 5,
          boxShadow: "0 2px 10px #0000000d",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: isTablet ? 2 : 3 }}>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                <MenuIcon />
              </IconButton>
            )}

            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src={logo} alt="okmedia logo" style={{ height: isTablet ? 20 : 30, transition: "all 0.3s ease" }} />
            </Link>

            {!isMobile && (
              <Box sx={{ display: "flex", gap: isTablet ? 3 : 5, alignItems: "center", ml: 2 }}>
                <HoverDropdown label={lang === "AZ" ? "Haqqımızda" : "About"} />
                <HoverDropdown label={lang === "AZ" ? "Xidmətlərimiz" : "Services"} />

                {["Portfolio", "Blog", "Contact"].map((item, idx) => (
                  <Box
                    key={idx}
                    component={Link}
                    to={`/${item.toLowerCase()}`}
                    sx={{
                      color: "#7f7f7f",
                      fontWeight: 500,
                      fontSize: isTablet ? "13px" : "16px",
                      fontFamily: "sans-serif",
                      cursor: "pointer",
                      textDecoration: "none",
                      "&:hover": { color: "#000" },
                    }}
                  >
                    {lang === "AZ" && item === "Portfolio" ? "Portfolio" :
                     lang === "AZ" && item === "Blog" ? "Bloq" :
                     lang === "AZ" && item === "Contact" ? "Əlaqə" : item}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: isTablet ? 1 : 2 }}>
            {!isMobile && (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton sx={{ backgroundColor: "#fff", p: 0, "&:hover": { backgroundColor: "transparent" } }}>
                    <Badge badgeContent={2} color="error">
                      <NotificationsNoneIcon sx={{ color: "#333", fontSize: "24px" }} />
                    </Badge>
                  </IconButton>
                  <Box
                    component="a"
                    href="tel:+994552509600"
                    sx={{
                      backgroundColor: "#f2f3f6",
                      color: "#000",
                      fontWeight: 500,
                      borderRadius: "10px",
                      px: 3,
                      py: 1.5,
                      fontSize: "16px",
                      textTransform: "none",
                      textDecoration: "none",
                      "&:hover": { backgroundColor: "#d1d3d9ff" },
                    }}
                  >
                    +99455 250 96 00
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f2f3f6",
                    color: "#000",
                    textTransform: "none",
                    fontWeight: 500,
                    borderRadius: "10px",
                    px: 2,
                    fontSize: "14px",
                    "&:hover": { backgroundColor: "#e1e3eb" },
                  }}
                >
                  {lang === "AZ" ? "Qiymət təklifi al" : "Get a quote"}
                </Button>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      backgroundColor: lang === "AZ" ? "#e1e3eb" : "#f2f3f6",
                      borderRadius: "10px",
                      color: "#000",
                      textTransform: "none",
                      fontSize: "15px",
                      minWidth: "55px",
                      height: "45px",
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "#e1e3eb" },
                    }}
                    onClick={() => setLang("AZ")}
                  >
                    az
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: lang === "EN" ? "#e1e3eb" : "#f2f3f6",
                      borderRadius: "10px",
                      color: "#000",
                      textTransform: "none",
                      fontSize: "15px",
                      minWidth: "55px",
                      height: "45px",
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "#e1e3eb" },
                    }}
                    onClick={() => setLang("EN")}
                  >
                    en
                  </Button>
                </Box>
              </>
            )}

            {isMobile && (
              <>
                <IconButton>
                  <Badge badgeContent={2} color="error">
                    <NotificationsNoneIcon sx={{ color: "#2e3a59" }} />
                  </Badge>
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#63c35c",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 500,
                    borderRadius: "10px",
                    fontSize: "14px",
                    px: 2,
                    "&:hover": { backgroundColor: "#57b54e" },
                  }}
                >
                  {lang === "AZ" ? "Qiymət təklifi al" : "Get a quote"}
                </Button>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      backgroundColor: lang === "AZ" ? "#e1e3eb" : "#f2f3f6",
                      borderRadius: "10px",
                      color: "#000",
                      textTransform: "none",
                      fontSize: "15px",
                      minWidth: "55px",
                      height: "45px",
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "#e1e3eb" },
                    }}
                    onClick={() => setLang("AZ")}
                  >
                    az
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: lang === "EN" ? "#e1e3eb" : "#f2f3f6",
                      borderRadius: "10px",
                      color: "#000",
                      textTransform: "none",
                      fontSize: "15px",
                      minWidth: "55px",
                      height: "45px",
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "#e1e3eb" },
                    }}
                    onClick={() => setLang("EN")}
                  >
                    en
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <HamburgerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Header;
