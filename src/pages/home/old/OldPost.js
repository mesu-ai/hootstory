import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


const OldPost = () => {
    return (
        <Box sx={{mt:3}}>
            <Typography gutterBottom component="div" sx={{textAlign:'start',color:'white',fontSize:'20px',fontWeight:'bold'}}>
                Old
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>xs=2</Item>
            </Grid>
            ))}
      </Grid>


            
        </Box>
    );
};

export default OldPost;