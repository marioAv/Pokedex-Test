import React, { Fragment } from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@mui/system/Unstable_Grid";
import { Typography, Box } from "@mui/material";

const PokeList = ({ data }) => {
  return (
    <Fragment>
      <Box style={{ paddingInline: "1%" }}>
        <Typography align={"right"}>
          We have {data.length} search results
        </Typography>
      </Box>
      <Grid container>
        {data.map(item => {
          return (
            <Grid item key={item.num} xs={12} sm={6} md={4} lg={4} xl={3}>
              <PokemonCard data={item} />;
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default PokeList;
