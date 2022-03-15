import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import '../Home.css';

const commonStyles = {
    bgcolor: '#707070',
     m: 1,
     mr:0,
    width: '26px',
    height: '26px',
  };

const Header = () => {
    const [checked, setChecked] = React.useState();


    const handleChange=()=>{

    }



    return (
        <Box className='home-header'>
            <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold',ml:3}}   component="div">
                Blog
            </Typography>

            <Typography sx={{textTransform:'capitalize',color:'red',ml:3}} variant="button" display="block" >
             Delete all
           </Typography>



           <FormGroup  row>

           <Box sx={{display:'flex'}}>
            <Box sx={{ ...commonStyles, borderRadius: '50%',ml:3}}>
                0
                </Box> 
            
            <FormControlLabel
                value="start"
                control={<Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />}
                label="Long stories"
                labelPlacement="start"
             />
           </Box>

           <Box sx={{display:'flex'}}>
            <Box sx={{ ...commonStyles, borderRadius: '50%',ml:3}}>
                4
                </Box> 
            
            <FormControlLabel
                value="start"
                control={<Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />}
                label="Long stories"
                labelPlacement="start"
             />
           </Box>

            
            

           </FormGroup>
         


            
            
        </Box>
    );
};

export default Header;