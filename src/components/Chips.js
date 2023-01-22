import './style.css'

import React from 'react';
import { Chip, Stack } from '@mui/material';

import { IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';


function Chips({ location, onClear }) {

  const handleClear = () => {
    onClear(location);
  }
  
  return (
    <div className='ChipList'>
      {location ? 
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {Object.keys(location).map(property => {
              if(location[property] && location[property].label){
                return <Chip key={property} label={location[property].label} color="primary" />
              }
                return null;
              })}

            {location.region && 
              <IconButton sx={{margin: '20px 0px'}} onClick={handleClear} color='error'><ClearIcon/></IconButton>
            }
        </Stack>
      : null}
    </div>
  );
}


export default Chips