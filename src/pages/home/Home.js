import React from 'react';
import Container from '@mui/material/Container';
import moment from 'moment';
import Header from './header/Header';
import RecentPost from './post/postTime/recent/RecentPost';
import OldPost from './post/postTime/old/OldPost';
import useStories from '../../hooks/useStories';


const Home = () => {
    const [stories]= useStories();
    console.log(stories);

    stories.forEach(element => {
      const dateObj = new Date(element.datetime);
      let year = dateObj.getFullYear();
      console.log(year);

        
    });

     const recentPost= stories.filter(story=>new Date(story.datetime).getFullYear() ===2022);

     const oldPost= stories.filter(story=>new Date(story.datetime).getFullYear() !==2022);

    //  console.log(recentPost);
    // const oldPost= stories.filter(story=>story.datetime.getFullYear()!=='2022');

    // var date = moment.utc(story.datetime).format('ll');
    // var time = moment.utc(story.datetime).format("LT");

    


    return (
        <Container sx={{minHeight:'100vh',maxHeight:'auto',pb:3}}>
           <Header/>
           <RecentPost stories={recentPost}/>
           <OldPost stories={oldPost}/>
        </Container>
    );
};

export default Home;