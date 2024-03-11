import axios from "axios";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

const PokemonSearch = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const types = response.data.results;
    setTypes(types);
  };

  const search = () => {};

  return (
    <Box display="flex" justifyContent="space-between" sx={{ pt: 10 }}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <Select
        value={type}
        label="Pokemon type"
        onChange={(event: SelectChangeEvent) => {
          setType(event.target.value as string);
        }}
      >
        {types.map((type, index) => {
          <MenuItem key={index} value={type.url}>
            {type.name}
          </MenuItem>;
        })}
      </Select>
      <Button variant="contained" size="medium" onClick={search}>
        Search
      </Button>
    </Box>
  );
};

export default PokemonSearch;
