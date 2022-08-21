import React from 'react';
import Lists from './list';

const ListContainer = (props) => {
  return (
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-row flex-wrap -mx-4 -my-8">
    { props.data.slice(4).map((blog,key)=>{
           return <Lists key={blog._id} createdAt= {blog.createdAt} slug = {blog.slug} title = {blog.title} category = {blog.category} author = {blog.author} views = {blog.views} img={blog.img} content = {blog.content}/>
        })
    }    
        </div>
        </div>
  )
}

export default ListContainer;