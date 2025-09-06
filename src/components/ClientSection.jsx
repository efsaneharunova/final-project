import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LangContext } from "../context/LanguageContext";

const rotations = [-3, -1.5, 0, 1.5, 3, -2, 2];

const ClientSection = () => {
  const { lang } = useContext(LangContext);
  const [logos, setLogos] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1101px)");

  useEffect(() => {
    fetch("/data/clients.json")
      .then((res) => res.json())
      .then((json) => setLogos(json[0].logos))
      .catch(console.error);
  }, []);

  const textData = {
    titleAZ: "Onların hekayəsində biz də varıq",
    titleEN: "We are in their story too.",
    descriptionAZ:
      "İstər böyük markalar olsun, istərsə kiçik bizneslər — hər biznesə təyin olunmuş KPI göstəricilərinə uyğun güc qatmaq üçün buradayıq!",
    descriptionEN:
      "Whether it is big brands or small businesses — we are here to empower every business to meet their assigned KPIs!",
  };

  const desktopRows = [
    [0, 1, 2, 3],
    [4, 5, 6],
  ];

  const mobileRows = [[0, 1, 2], [3], [4, 5, 6]];

  const rows = isMobile ? mobileRows : desktopRows;

  return (
    <Box
      sx={{
        background:
          "linear-gradient(70deg, #333 0%, #222 30%, #111 70%, #000 100%)",
        py: 10,
        px: { xs: 2, sm: 4 },
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        style={{
          fontSize: "64px",
          margin: "0 135px 24px"
        }}
      >
        {lang === "AZ" ? textData.titleAZ : textData.titleEN}
      </Typography>
      <Typography
        variant="body1"
        color="grey.400"
        mb={6}
        maxWidth={700}
        mx="auto"
        style={{
          fontSize: "18px"
        }}
      >
        {lang === "AZ" ? textData.descriptionAZ : textData.descriptionEN}
      </Typography>

      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "nowrap",
              gap: { xs: 1.5, sm: 3 },
              mb: rowIndex === rows.length - 1 ? 0 : { xs: 2, sm: 3 },
              flexDirection: "row",
            }}
          >
            {row.map((index) => (
              <Card
                key={index}
                elevation={0}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  p: 1.5,
                  width: { xs: 90, sm: 110, md: 170 },
                  height: { xs: 60, sm: 70, md: 90 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `rotate(${
                    rotations[index % rotations.length]
                  }deg)`,
                  transition: "transform 0.3s ease",
                }}
              >
                <CardMedia
                  component="img"
                  image={logos[index]}
                  alt={`Client logo ${index}`}
                  sx={{
                    maxHeight: 40,
                    width: "auto",
                    objectFit: "contain",
                    mx: "auto",
                  }}
                />
              </Card>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ClientSection;
