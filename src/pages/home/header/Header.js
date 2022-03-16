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

const blogIconStyles = {
    bgcolor: '#707070',
    m: 2,
    mr:0,
    width: '40px',
    height: '40px',
  };

const Header = ({longStories,shortStories,checkedLong,handleLong,handleShort,checkedShort}) => {



    return (
        <Box className='home-header' sx={{borderRadius:1}}>
            
            <Box sx={{ ...blogIconStyles, borderRadius: '50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14.237" height="16.4" viewBox="0 0 14.237 16.4">
    <g id="Group_573" data-name="Group 573" transform="translate(1158 14784)">
        <rect id="Rectangle_5221" data-name="Rectangle 5221" width="1.262" height="16.4" transform="translate(-1145.024 -14784)" fill="#fdfffc"/>
        <path id="Subtraction_10" data-name="Subtraction 10" d="M12.435,16.4H0V0H12.435V16.4h0ZM3.064,10.092v.522H9.371v-.522Zm0-1.622v.522H9.371V8.47ZM6.308,2.884A1.622,1.622,0,1,0,7.93,4.505,1.624,1.624,0,0,0,6.308,2.884Z" transform="translate(-1158 -14784)" fill="#fdfffc"/>
    </g>
                </svg>
            </Box> 

            <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold',ml:1}}   component="div">
                Blog
            </Typography>




            <Typography sx={{textTransform:'capitalize',color:'red',ml:3}} variant="button" display="block" >
             Delete all
           </Typography>



           <FormGroup  row>

           <Box sx={{display:'flex'}}>
            <Box sx={{ ...commonStyles, borderRadius: '50%',ml:3}}>
                {longStories.length}  
            </Box> 
            
            <FormControlLabel
                value="start"
                control={<Switch
                    checked={checkedLong}
                    onChange={handleLong}
                    inputProps={{ 'aria-label': 'controlled' }}
                />}
                label="Long stories"
                labelPlacement="start"
             />
           </Box>

           <Box sx={{display:'flex'}}>
            <Box sx={{ ...commonStyles, borderRadius: '50%',ml:3}}>
                {shortStories.length}
                </Box> 
            
            <FormControlLabel
                value="start"
                control={<Switch
                    checked={checkedShort}
                    onChange={handleShort}
                    inputProps={{ 'aria-label': 'controlled' }}
                />}
                label="Short stories"
                labelPlacement="start"
             />
           </Box>

            
            

           </FormGroup>
         


            
            
        </Box>
    );
};

export default Header;