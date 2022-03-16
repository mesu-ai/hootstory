import React from 'react';
import Grid from '@mui/material/Grid';
import LongPostCard from './LongPostCard';
import ShortPostCard from './ShortPostCard';

const PostCard = ({story}) => {
    const {type} = story;


    return (
         <>
           { type=== 'long' &&
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <LongPostCard story={story}></LongPostCard>
            </Grid>
            }
            { type=== 'short' &&
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <ShortPostCard story={story}></ShortPostCard>
            </Grid>
            }
            
         </>   
    );
};

export default PostCard;