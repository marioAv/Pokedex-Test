import React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";
import { pokeCatalog } from "../Data/pokeCatalog";

const FilterCheckboxes = ({ variant, onChange, initialState }) => {
  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Filter by {variant}</FormLabel>
      <FormGroup>
        <Grid container>
          {pokeCatalog.map(item => {
            return (
              <Grid item key={item}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={initialState[variant].includes(item)}
                      onChange={onChange}
                      name={item}
                    />
                  }
                  label={item}
                />
              </Grid>
            );
          })}
        </Grid>
      </FormGroup>
    </FormControl>
  );
};

export default FilterCheckboxes;
