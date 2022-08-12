import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Fragment } from "react-is";
import FilterCheckboxes from "./FilterCheckboxes";

export default function FilterOptions({ data, setFilteredData, open }) {
  const [state, setState] = React.useState({
    type: [],
    weaknesses: []
  });

  const checker = (target, checked) => checked.every(v => target.includes(v));

  const handleSearch = () => {
    const isChecked = (state.type.length >= 1) | (state.weaknesses.length >= 1);

    const filteredByType = !isChecked
      ? data
      : data.filter(item => checker(item.type, state["type"]));

    const filteredByWeakness = !isChecked
      ? data
      : filteredByType.filter(item =>
          checker(item.weaknesses, state["weaknesses"])
        );

    setFilteredData(filteredByWeakness);
  };

  const handleChange = (event, variant) => {
    const name = event.target.name;
    const newState = { ...state };

    // HANDLE CHANGE WHEN IT IS NOT CHECKED
    if (!state[variant].includes(name)) {
      const newArr = [...newState[variant]];
      newArr.push(name);
      setState({ ...newState, [variant]: newArr });
    }
    // HANDLE CHANGE WHEN IT IS CHECKED
    if (state[variant].includes(name)) {
      const filtered = {
        ...newState,
        [variant]: newState[variant].filter(item => item != name)
      };
      setState(filtered);
    }
  };

  const clearFilter = () => {
    setState({
      type: [],
      weaknesses: []
    });
    setFilteredData(data);
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: open ? "block" : "none",
          border: "1px solid gainsboro",
          width: 620,
          marginLeft: "auto",
          borderRadius: 4,
          marginTop: 2,
          marginRight: 2
        }}
      >
        {/* ------------------ TYPES ------------------*/}
        <FilterCheckboxes
          variant="type"
          onChange={e => handleChange(e, "type")}
          initialState={state}
        />
        {/* ------------------ WEAKNESS ------------------*/}
        <FilterCheckboxes
          variant="weaknesses"
          onChange={e => handleChange(e, "weaknesses")}
          initialState={state}
        />

        {/* ------------------ BUTTON SECTION ------------------*/}
        <Box style={{ paddingInline: 25, paddingBottom: 25 }}>
          <Button
            variant="outlined"
            style={{ width: "48%", marginRight: "2%" }}
            onClick={() => clearFilter()}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            style={{ width: "48%", marginInline: "1%" }}
            onClick={() => handleSearch()}
          >
            Filter
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
