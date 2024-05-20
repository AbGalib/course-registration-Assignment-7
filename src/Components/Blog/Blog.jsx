import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBookOpen } from '@fortawesome/free-solid-svg-icons';


const Blog = ({ blog, handleAddToBookmark}) => {
    const {title, cover_picture, short_description, price, reading_time } = blog;
    
    const handleClick = () => {
        handleAddToBookmark(blog);
    };



    return (
        <div className="card w-auto bg-base-100 shadow-xl rounded-lg flex flex-col">
            <figure className="rounded-t-lg overflow-hidden w-auto h-48">
                <img src={cover_picture} alt={`Cover Picture of the title ${title}`} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body flex-grow">
                <h2 className='mx-3 my-2 font-bold text-2xl'>{title}</h2>
                <p className='mx-2 my-3'>{short_description}</p>

                <div className='flex justify-between px-auto mx-4'>
                    <div>
                        <p className='font-bold'><FontAwesomeIcon icon={faDollarSign} /> Price: {price}</p>
                    </div>
                    <div>
                        <p className='font-bold'><FontAwesomeIcon icon={faBookOpen} /> Credit: {reading_time} hr</p>
                    </div>
                </div>
            </div>
            <div className="w-auto my-3 mx-4">
                <button 
                    className={`bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded-md`}
                    onClick={handleClick}   
                >
                    Select
                </button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
  
    
};

export default Blog;
