import { useEffect, useState } from 'react';

const useStories = () => {
    const [stories,setStories]=useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setStories(data));

    },[]);

    return [stories,setStories];
};

export default useStories;