import { useLocalSearchParams } from 'expo-router';
import React from 'react'

const BlogDetail = () => {

    const { slug } = useLocalSearchParams();

  return (
    <div>
      Here is the blog detail of {slug}
    </div>
  )
}

export default BlogDetail
