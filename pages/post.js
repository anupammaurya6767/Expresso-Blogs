import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {
    const [authors, setauthors] = useState("");
    const [titles, settitles] = useState("");
    const [imgs, setimgs] = useState("");
    const [authorimgs, setauthorimgs] = useState("");
    const [categories, setcategories] = useState("");
    const [contents, setcontents] = useState("");
    const [slugs, setslugs] = useState("");
    const value = true;

    const changekro = (e)=>{
        setauthorimgs(e.target.value);

    }
    const changekro1 = (e)=>{
        setcontents(e.target.value);

    }
    const changekro2 = (e)=>{
        setcategories(e.target.value);

    }
    const changekro3 = (e)=>{
        setimgs(e.target.value);

    }
    const changekro4 = (e)=>{
        setslugs(e.target.value);

    }
    const changekro5 = (e)=>{
        setauthors(e.target.value);

    }
    const changekro6 = (e)=>{
        settitles(e.target.value);

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const data = [{
            author: authors,
            slug: slugs,
            title: titles,
            img: imgs,
            authorimg: authorimgs,
            category: categories,
            content: contents,
          }]

          const JSONdata = JSON.stringify(data);
          const endpoint = '/api/addblogs';

          const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
          }

          const response = await fetch(endpoint, options);

          const result = await response.json()
          if(result.success==='success')
          {
            toast.success("Adding your post...!",{
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          }
          else{
            toast.error("Some error occurred. Try Again!,",{
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            value = false;
          }

            setauthorimgs("");

            setcontents("");

            setcategories("");

            setimgs("");

            setslugs("");

            setauthors("");
            settitles("");

    }

   
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
    <form onSubmit={handleSubmit}>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
    <input type="text" value={authors} onChange={changekro5} id="email" name = "author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Tanjirou Kamado" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password11" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Slug</label>
    <input type="text" id="password11" value={slugs} onChange={changekro4} name="slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog Title</label>
    <input type="text" id="password" value={titles} onChange={changekro6} name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog Image</label>
    <input type="text" id="password3" value={imgs} onChange={changekro3} name="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Profile Image Url</label>
    <input type="text" id="password2" value={authorimgs} onChange={changekro} name="authorimg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password9" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog Category</label>
    <input type="text" id="password9" value={categories} onChange={changekro2} name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog Content</label>
    <textarea type="text" id="password4"  value={contents} onChange={changekro1} name = "content" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 h-96 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
  </div>
  <button type="submit" className="text-white bg-green-500 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Post</button>
</form>
{value ? <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>:<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>}
</div>
</div>
  );
}

export default Post;