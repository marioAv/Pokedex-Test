import "./App.css";
import PokeList from "./Components/PokeList";
import { pokeData } from "./Data/pokeData";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import { Box } from "@mui/system";

function App() {
  const { pokemon } = pokeData;
  const [filteredData, setFilteredData] = useState(pokemon);

  return (
    <Box style={{ padding: 10, maxWidth: 1600, margin: "auto" }}>
      <SearchBar data={pokemon} setFilteredData={setFilteredData} />
      <PokeList data={filteredData} />
    </Box>
  );
}

export default App;
