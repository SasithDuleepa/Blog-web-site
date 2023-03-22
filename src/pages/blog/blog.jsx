import React from 'react'
import Blogpost from '../../components/blogpost/blogpost'
import reacticon from '../../components/pic/react.jpg'
import python from '../../components/pic/python.jpg'
export default function Blog() {
  return (
    <div><Blogpost head='React.js'
     image={reacticon}
     info="ReactJS is an open-source JavaScript library used for building user interfaces (UIs)
      and web applications. Developed and maintained by Facebook, React allows developers to create
       reusable UI components that can be combined to create complex applications with ease.<br/>
One of the main features of React is its use of a virtual DOM (Document Object Model), which 
allows for faster and more efficient updates to the UI. Rather than updating the entire DOM tree, 
React only updates the specific components that have changed, resulting in a faster and smoother user experience.<br/>
React also uses a declarative approach to building UIs, meaning that developers simply declare what they 
want the UI to look like and React takes care of the rest. This makes it easier to write and
 maintain code, as well as to debug and test applications.<br/>
React is highly scalable and can be used to build applications of any size, from small 
single-page applications to large enterprise-level applications. It also has a large and
 active community of developers, which means that there are always new resources and tools
  available to help developers build better applications.<br/>
Overall, React is a powerful and flexible tool for building modern web applications that
 are fast, efficient, and highly scalable. Whether you are a seasoned developer or just 
 getting started with web development, React is definitely worth considering for your next project."
     />
     <Blogpost head='Python'
     image={python}
     info="Python is a high-level, interpreted programming language that has gained immense popularity in recent years due to its simplicity, versatility, and ease of use. It is a general-purpose language that is widely used for web development, scientific computing, data analysis, artificial intelligence, and many other applications.

     One of the key features of Python is its clean and readable syntax, which makes it easy for beginners to learn and write code quickly. Python also has a vast library of pre-built modules and packages that make it easy to perform complex tasks without having to write code from scratch.
     
     Python's popularity is also due to the fact that it is an open-source language with a large and active community of developers who contribute to its development and support. This means that Python is constantly evolving and improving, with new features and enhancements being added all the time.
     
     Overall, Python is a powerful and versatile language that is well-suited for a wide range of programming tasks. Whether you are a beginner or an experienced developer, Python is an excellent language to learn and add to your skillset."
     />
     </div>
  )
}
