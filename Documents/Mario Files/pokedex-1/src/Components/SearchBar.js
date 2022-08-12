import React, { useState } from "react";
import {
  Select,
  MenuItem,
  TextField,
  Button,
  FormControl,
  InputLabel
} from "@mui/material";
import FilterOptions from "./FilterOptions";
import Grid from "@mui/system/Unstable_Grid";
import { pokeCatalog } from "../Data/pokeCatalog";

const SearchBar = ({ data, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [weaknessFilter, setWeaknessFilter] = useState("All");
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    const searchFiltered = !searchTerm
      ? data
      : data.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const typeFiltered =
      !typeFilter | (typeFilter == "All")
        ? searchFiltered
        : searchFiltered.filter(item => item.type.includes(typeFilter));

    const weakenessFiltered =
      !weaknessFilter | (weaknessFilter == "All")
        ? typeFiltered
        : typeFiltered.filter(item => item.weaknesses.includes(weaknessFilter));

    setFilteredData(weakenessFiltered);
  };

  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ paddingInline: 10, marginBottom: 80, paddingTop: 40 }}
    >
      <Grid
        item
        md={2}
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          style={{
            width: "100%",
            marginTop: -30
          }}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          }
        />
      </Grid>

      {/* ------------------ NAME ------------------*/}
      <Grid item md={2} xs={4}>
        <TextField
          style={{ width: "100%" }}
          variant="outlined"
          label={"Name"}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </Grid>

      {/* ------------------ TYPES ------------------*/}
      <Grid item md={2} xs={4}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-helper-label">
            Filter by Type
          </InputLabel>
          <Select
            value={typeFilter}
            style={{ width: "100%" }}
            label={" Filter by Type"}
            onChange={e => setTypeFilter(e.target.value)}
          >
            <MenuItem value={"All"}>All</MenuItem>
            {pokeCatalog.map(item => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>

      {/* ------------------ WEAKNESS ------------------*/}
      <Grid item md={2} xs={4}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-helper-label">
            Filter by Weakness
          </InputLabel>
          <Select
            value={weaknessFilter}
            style={{ width: "100%" }}
            label={"Filter by Weakness"}
            onChange={e => setWeaknessFilter(e.target.value)}
          >
            <MenuItem value={"All"}>All</MenuItem>
            {pokeCatalog.map(item => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>

      {/* ------------------ BUTTON SECTION ------------------*/}
      <Grid item md={2} xs={4}>
        <Button
          variant="contained"
          style={{ width: "100%", height: 54 }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </Grid>
      <Grid item md={2} xs={4}>
        <Button
          variant="contained"
          style={{ width: "100%", height: 54 }}
          onClick={() => setOpen(!open)}
        >
          Filters
        </Button>
      </Grid>
      <FilterOptions
        data={data}
        setFilteredData={setFilteredData}
        open={open}
      />
    </Grid>
  );
};

export default SearchBar;
