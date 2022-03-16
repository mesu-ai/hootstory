import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LongPostCard from '../../postcard/LongPostCard';
import ShortPostCard from '../../postcard/ShortPostCard';
// import PostCard from '../../postcard/PostCard';


const RecentPost = ({stories,checkedLong,checkedShort}) => {

    const longStories=stories.filter(story=>story.type==='long');

    const shortStories=stories.filter(story=>story.type==='short');



    return (
        <Box sx={{mt:3}}>
            <Typography gutterBottom component="div" sx={{textAlign:'start',color:'white',fontSize:'20px',fontWeight:'bold'}}>
                Recent
            </Typography>

            { checkedLong && 

            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {longStories.map(story=><LongPostCard story={story} key={Math.random()}></LongPostCard>)
            }
            </Grid>

            }

            {checkedShort &&

            <Box sx={{mt:2}}>

            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {shortStories.map(story=><ShortPostCard story={story} key={Math.random()}></ShortPostCard>)
            }
            </Grid>
            </Box>
            }
            
        </Box>
    );
};

export default RecentPost;