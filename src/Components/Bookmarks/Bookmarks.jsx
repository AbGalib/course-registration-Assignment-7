import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime, creditHourRemaining}) => {
    return (
        <div className="md:w-1/3">
            <h1 className="mt-4 font-bold text-lg ml-2 mr-2 mb-2 text-blue-500"> Credit Hour Remaining {creditHourRemaining} hr</h1>
          <hr />
          <p className='font-bold text-3xl m-2'> Course Name</p>
      <ol>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={bookmark.id} index={index} bookmark={bookmark} />
        ))}
      </ol>
        <hr />
        
        <p className='font-bold text-xl m-2'>Total Ceredit Hour: {readingTime} hr </p>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
    creditHourRemaining: PropTypes.number.isRequired
};

export default Bookmarks;
