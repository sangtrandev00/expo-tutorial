import { useLocalSearchParams } from 'expo-router';
import React from 'react'

const RestBlog = () => {

    const { rest } = useLocalSearchParams();

    console.log("rest: ", rest);

  return (
    <div>
        Here is the rest blog
    </div>
  )
}

export default RestBlog
