import React from 'react';
import Blogs from './blogs';

const BlogsContainer = (props) => {
  return (
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-row flex-wrap -mx-4 -my-8">
        { props.item.slice(0,3).map((blog,key)=>{
           return <Blogs key={blog._id} slug = {blog.slug} title = {blog.title} category = {blog.category} views = {blog.views} img={blog.img} content = {blog.content}/>
        })     
}
        </div>
        </div>
  )
}



export default BlogsContainer;