import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#3A3B3C',
   ...theme.typography.body2,
   padding: theme.spacing(2),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 }));

const ShortPostCard = ({story}) => {


const date = moment.utc(story.datetime).format('ll');
const time = moment.utc(story.datetime).format("LT");


    return (
        <Grid item xs={2} sm={4} md={6} key={Math.random()}>
           <Item sx={{textAlign:'start'}}>
              
                   <Typography sx={{color:'white',fontSize:'16px',fontWeight:'500',height:'74px'}}>{story?.body.slice(0,210)}...</Typography>

                   <Typography sx={{color:'#BCB8B1',fontSize:'15px'}}> {date} | {time} </Typography>
                       
          </Item>
        </Grid>
    );
};

export default ShortPostCard;