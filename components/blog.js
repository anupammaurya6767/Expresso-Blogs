import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const Blog = (props) => {
  let date =  new Date(props.createdAt);
  let month = date.toLocaleString('default', { month: 'short' });
  let day = date.getDay();

  return (
    <div className="py-8 px-4 lg:w-1/3">
    <div className="h-full flex items-start">
      <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
        <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{month}</span>
        <span className="font-medium text-lg text-gray-800 title-font leading-none">{day}</span>
      </div>
      <div className="flex-grow pl-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">{props.category}</h2>
        <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{props.title}</h1>
        <p className="leading-relaxed mb-5">{`${props.content.slice(0,150)}...`}</p>
        <Link href={`/blogs/${props.slug}`}><a className="inline-flex items-center">
        <Image alt="blog" src="/author.jpg" width={32} height={32} className="rounded-full flex-shrink-0 object-cover object-center mb-2" />
          <span className="flex-grow flex flex-col pl-3">
            <span className="title-font font-medium text-gray-900">{props.author}</span>
          </span>
        </a></Link>
      </div>
    </div>
  </div>
  );
}

export default Blog;