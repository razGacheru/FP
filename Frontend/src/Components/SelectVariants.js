import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({frequency, setFrequency}) {

  const handleChange = (e) => {
    setFrequency(e.target.value);
  };

  return (
    <div style={{display: 'inline', height: '100%'}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={frequency}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={'yearly'}>yearly</MenuItem>
          <MenuItem value={'weekly'}>weekly</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
