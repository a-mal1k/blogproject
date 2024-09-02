import React, { useEffect, useState } from 'react'

export const Blog = ({ item }) => {
  const [date, setDate] = useState(null);
  const formatDate = () => {
    const new_date = new Date(item.published_at);
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new_date.toLocaleDateString('en-US', optionsDate);
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = new_date.toLocaleTimeString('en-US', optionsTime);
    const formattedDateTime = `${formattedTime}, ${formattedDate}`;
    setDate(formattedDateTime);
  }
  useEffect(()=> {
    formatDate();
  }, [])
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-2 lg:m-4 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
      <h3 className="text-lg font-medium text-gray-600 mb-2">{item.blog_name}</h3>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        {item.author && (
          <span className="font-semibold"> Author: {item.author}</span>
        )}
        <span>{date}</span>
      </div>
      <p className="text-gray-700 line-clamp-3 mb-4">{item.text}</p>
      <a href={item.url} className="text-blue-500 hover:text-blue-700 font-semibold">Read more</a>
    </div>

  )
}
