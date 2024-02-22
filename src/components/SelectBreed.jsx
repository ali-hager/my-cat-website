import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

function SelectBreed({ selectedBreed, setSelectedBreed }) {
  // creating cat pic by breed without hardcoding each breed
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    async function getBreedList() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const result = await response.json();
      setBreedList(result);
    }
    getBreedList();
  }, []);

  console.log(breedList);

  return (
    <FormControl fullWidth>
      <InputLabel id="breed-select-label">Breed</InputLabel>
      <Select
        labelId="breed-select-label"
        id="breed-select"
        value={selectedBreed}
        label=""
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <MenuItem key="random" value="random">Random Cat (Any Breed) </MenuItem>
        {breedList.map((breed) => (
          <MenuItem value={breed.id}>{breed.name}</MenuItem>
        ))}
        {/* creating the options in the select button - dropdown */}
        {/* <MenuItem value="asho">American Shorthair</MenuItem>
        <MenuItem value="munc">Munchkin</MenuItem>
        <MenuItem value="amis">Australian Mist</MenuItem> */}
      </Select>
    </FormControl>
  );
}

export default SelectBreed;
