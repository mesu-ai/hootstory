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
   paddingBottom:0,
   textAlign: 'center',
   color: theme.palette.text.secondary,
 }));

const LongPostCard = ({story}) => {


// var options = { year: 'numeric', month: 'short', day: 'numeric',hour:'numeric',minute:'numeric' }; 
// const date=new Date(story.datetime).toLocaleDateString('en-US',options);
// console.log(date);


var date = moment.utc(story.datetime).format('ll');
var time = moment.utc(story.datetime).format("LT");



    return (
        <Grid item xs={2} sm={4} md={6} key={Math.random()}>
           <Item sx={{textAlign:'start'}}>
              <Grid container spacing={2}>
                <Grid item xs={9.5}>
                   <Typography sx={{color:'#4392F1',fontSize:'15px'}}>{story?.title}</Typography>

                   <Typography sx={{color:'white',fontSize:'16px',fontWeight:'500',height:'50px'}}>{story?.body.slice(0,105)}...</Typography>

                   <Typography sx={{color:'#BCB8B1',fontSize:'15px'}}> {date} | {time} </Typography>
                       
                  </Grid>
                  <Grid item xs={2.5}>
                      <img src={story?.image} alt="" width='97px' height='99px'/>
                        
                  </Grid>
             </Grid>
          </Item>
        </Grid>
    );
};

export default LongPostCard;