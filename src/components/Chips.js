import './style.css'

import { Chip, Stack } from '@mui/material';


function Chips(props) {
  
  return (
    <div className='ChipList'>
        {props.location ? 
          <Stack direction="row" spacing={1}>
              {Object.keys(props.location).map(property => {
                if(props.location[property] && props.location[property].label){
                  return <Chip key={property} label={props.location[property].label} color="primary" />
                }
                  return null;
                })}
              </Stack>
        : null}
    </div>
  );
}


export default Chips