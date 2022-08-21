import React from 'react';
import BlogContainer from './blogContainer';
import AuthorContainer from './authorContainer';
import BlogsContainer from './blogsContainer';

const TopBlog = (props) => {
  return (
    <div className="container px-2 py-18 mx-auto">
    <div className="flex flex-row flex-wrap -m-2">
      <BlogsContainer item = {props.data}/>
      </div>
      <BlogContainer item = {props.data} />
      <AuthorContainer item = {props.data[6]}/>
     </div>
  )
}

export default TopBlog;