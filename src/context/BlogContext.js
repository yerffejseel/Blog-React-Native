import React, { useState, createContext } from "react";

const BlogContext = createContext();

function BlogProvider({ children }) {
    const [blogs, setBlogs] = useState([]);
    return <BlogContext.Provider value={{blogs, setBlogs}}>
        {children}
    </BlogContext.Provider>
}

export { BlogProvider };
export default BlogContext;