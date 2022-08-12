import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Avatar, Chip } from "@mui/material";

const PokemonCard = data => {
  const { name, img, num, type, weaknesses } = data.data;

  return (
    <div>
      {data !== null && (
        <Card
          sx={{
            height: 425,
            marginInline: 1,
            marginBlock: 2,
            borderRadius: 4,
            padding: 2
          }}
          variant={"outlined"}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt="Cindy Baker"
              src={img}
              style={{ width: 150, height: 150 }}
            />
          </Box>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align={"left"}
            >
              {name} N.º{num}
            </Typography>

            <Box style={{ marginTop: 15, textAlign: "left" }}>
              <Typography align="left" mb={1}>
                Type
              </Typography>
              {type.map(item => {
                return (
                  <Chip
                    key={item}
                    label={item}
                    variant="outlined"
                    color="success"
                    size="small"
                    style={{ marginRight: 5 }}
                  />
                );
              })}
            </Box>

            <Box style={{ marginTop: 15, textAlign: "left" }}>
              <Typography align="left" mb={1}>
                Weaknesses
              </Typography>
              {weaknesses.map(item => {
                return (
                  <Chip
                    key={item}
                    label={item}
                    variant="outlined"
                    color="primary"
                    size="small"
                    style={{ marginRight: 5 }}
                  />
                );
              })}
            </Box>
          </CardContent>
          <CardActions
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Button variant="contained" style={{ width: 280 }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default PokemonCard;
