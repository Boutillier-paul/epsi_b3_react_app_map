import React from 'react';
import { TextField, Autocomplete } from '@mui/material';


function SearchInput({ id, locations, location = { region: null, department: null, city: null }, onChange }) {
  const handleChange = (event, value) => {
    if (!location.region || Object.keys(location.region).length === 0) {
      onChange({...location, region: value});
    } else if (!location.department || Object.keys(location.department).length === 0) {
      onChange({...location, department: value});
    } else if (!location.city || Object.keys(location.city).length === 0) {
      onChange({...location, city: value});
    }
    if (event.target.closest("svg")) {onChange({region: null, department: null, city: null})}
  };


  let options = [];
  if (!location.region || Object.keys(location.region).length === 0) {
    options = locations.regions;
  } else if (!location.department || Object.keys(location.department).length === 0) {
    options = locations.departments.filter(object => object.region_code === location.region.code);
  } else if (!location.city || Object.keys(location.city).length === 0) {
    options = locations.cities.filter(object => object.department_code === location.department.code).map(item => { return {...item, label: item.label + " (" + item.zip_code + ")"} });
  }

  return (
    <div className='SearchInput'>
        <Autocomplete
          id={id}
          freeSolo
          autoHighlight
          onChange={handleChange}
          sx={{ width: '100%' }}
          options={options}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => <TextField {...params} label={id.replace(/^\w/, c => c.toUpperCase())}/>}
        />
    </div>
  );
}

export default SearchInput