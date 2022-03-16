import React, { useState } from 'react';
import Container from '@mui/material/Container';
import moment from 'moment';
import Header from './header/Header';
import RecentPost from './post/postTime/recent/RecentPost';
import OldPost from './post/postTime/old/OldPost';
import useStories from '../../hooks/useStories';


const Home = () => {
    const [stories]= useStories();
    console.log(stories);

    // stories.forEach(element => {
    //   const dateObj = new Date(element.datetime);
    //   let year = dateObj.getFullYear();
    //   console.log(year);

        
    // });
    const [checkedLong, setCheckedLong] = useState(true);
    const [checkedShort, setCheckedShort] = useState(true);


    const handleLong=()=>{
      checkedLong?setCheckedLong(false):setCheckedLong(true);

     }
    const handleShort=()=>{
      checkedShort?setCheckedShort(false):setCheckedShort(true);

     }

    const longStories=stories.filter(story=>story.type==='long');
    const shortStories=stories.filter(story=>story.type==='short');

     const recentPost= stories.filter(story=>new Date(story.datetime).getFullYear() ===2022);

     const oldPost= stories.filter(story=>new Date(story.datetime).getFullYear() !==2022);


    // var date = moment.utc(story.datetime).format('ll');
    // var time = moment.utc(story.datetime).format("LT");

    


    return (
        <Container sx={{minHeight:'100vh',maxHeight:'auto',pb:3}}>
           <Header longStories={longStories} shortStories={shortStories} checkedLong={checkedLong} handleLong={handleLong} checkedShort={checkedShort} handleShort={handleShort}/>

           <RecentPost stories={recentPost} checkedLong={checkedLong} checkedShort={checkedShort}/>
           <OldPost stories={oldPost} checkedLong={checkedLong} checkedShort={checkedShort}/>
        </Container>
    );
};

export default Home;