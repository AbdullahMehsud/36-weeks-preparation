import React from 'react'
import Testimonials from '../Testimonials'
import post1 from "../../assets/post-1.jpg";
import post2 from "../../assets/post-2.jpg";
import post3 from "../../assets/post-3.jpg";
function Blog() {
    const blogs = [
        {
          image: post1,
          title: "First Time Home Owner Ideas",
          author: "Kristin Watson",
          date: "Dec 19, 2021",
        },
        {
          image: post2,
          title: "How To Keep Your Furniture Clean",
          author: "Robert Fox on",
          date: "Dec 15, 2021", 
        },
        {
          image: post3,
          title: "Small Space Furniture Apartment Ideas",
          author: "Kristin Watson on",
          date: "Dec 12, 2021",
        },
        {
          image: post1,
          title: "First Time Home Owner Ideas",
          author: "Kristin Watson",
          date: "Dec 19, 2021",
        },
        {
          image: post2,
          title: "How To Keep Your Furniture Clean",
          author: "Robert Fox on",
          date: "Dec 15, 2021", 
        },
        {
          image: post3,
          title: "Small Space Furniture Apartment Ideas",
          author: "Kristin Watson on",
          date: "Dec 12, 2021",
        },
        {
          image: post1,
          title: "First Time Home Owner Ideas",
          author: "Kristin Watson",
          date: "Dec 19, 2021",
        },
        {
          image: post2,
          title: "How To Keep Your Furniture Clean",
          author: "Robert Fox on",
          date: "Dec 15, 2021", 
        },
        {
          image: post3,
          title: "Small Space Furniture Apartment Ideas",
          author: "Kristin Watson on",
          date: "Dec 12, 2021",
        }
      ];
  return (
    <>
    <div className="grid grid-cols-3 px-20 gap-6 mt-20 mb-20">
          {blogs.map((blog, index) => (
            <div key={index} className='py-5'>
              <img src={blog.image} alt="" className="w-96 rounded-3xl hover:opacity-70 cursor-pointer duration-500" />
              <h2 className="text-lg mt-3 px-2 font-medium">{blog.title}</h2>
              <h2 className="text-md px-2 font-medium">
                <span className="text-gray-500">by </span>
                {blog.author} <span className="text-gray-500">on</span>{" "}
                {blog.date}
              </h2>
            </div>
          ))}
        </div>
    <Testimonials/>
    </>
  )
}

export default Blog