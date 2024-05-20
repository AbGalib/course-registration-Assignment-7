import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3 mx-4">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {blogs.map(blog => (
                    <Blog 
                        key={blog.id} 
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        
                    />
                ))}
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
  
};

export default Blogs;
