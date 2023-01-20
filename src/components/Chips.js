import './style.css'

import React from 'react';
import { Chip, Stack } from '@mui/material';


function Chips({ location }) {
  
  return (
    <div className='ChipList'>
        {location ? 
          <Stack direction="row" spacing={1}>
              {Object.keys(location).map(property => {
                if(location[property] && location[property].label){
                  return <Chip key={property} label={location[property].label} color="primary" />
                }
                  return null;
                })}
              </Stack>
        : null}
    </div>
  );
}


export default Chips