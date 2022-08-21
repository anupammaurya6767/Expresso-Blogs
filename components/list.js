import Link from 'next/link';
import React from 'react'

const Lists = (props) => {
  let date =  new Date(props.createdAt);
  let month = date.toLocaleString('default', { month: 'short' });
  let day = date.getDay();
  let year = date.getFullYear();
  return (
    <div className="container px-5 py-20 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
    <div className="py-8 flex flex-wrap md:flex-nowrap">
    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span className="font-semibold title-font text-gray-700">{props.category}</span>
      <span className="mt-1 text-gray-500 text-sm">{`${month} ${day} ${year}`}</span>
    </div>
    <div className="md:flex-grow">
      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{props.title}</h2>
      <p className="leading-relaxed">{`${props.content.slice(0,250)}...`}</p>
      <Link href={`/blogs/${props.slug}`}><a className="text-green-500 inline-flex items-center mt-4">Read More
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      </Link>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Lists;