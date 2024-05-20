import PropTypes from 'prop-types';

const Bookmark = ({index, bookmark }) => {

    const { title } = bookmark;
    return (
        <div>
            <ol><li className='text-lg m-2'>{index + 1}. {title}</li></ol>
        </div>
    );
};

Bookmark.propTypes = {
    index: PropTypes.number.isRequired,
    bookmark: PropTypes.object
}

export default Bookmark;