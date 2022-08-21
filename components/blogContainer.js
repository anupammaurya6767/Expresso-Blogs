import React from 'react';
import Blog from './blog';

const BlogContainer = (props) => {
  return (
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-row flex-wrap -mx-4 -my-8">
    { props.item.slice(6,9).map((blog,key)=>{
           return <Blog key={blog._id} createdAt= {blog.createdAt} slug = {blog.slug} title = {blog.title} author = {blog.author} category = {blog.category} views = {blog.views} img={blog.img} content = {blog.content} authorimg = {blog.authorimg}/>
        })     
}
        </div>
        </div>
  )
}

export default BlogContainer;