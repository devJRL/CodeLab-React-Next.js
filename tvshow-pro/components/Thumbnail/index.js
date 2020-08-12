import ThumbnailStyles from './styles';

const Thumbnail = (
  // props from parent
  { imageUrl = "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg", // for no thumbnail
    showName,
    showId,
    small = false }
) => {
  // Render with props
  return (
    <div className="thumbnail">
      <img src={imageUrl} className="thumbnail__image" />
      <h3 className="thumbnail__name">
        [{showId}] {showName}
      </h3>

      {/* CSS Styling on JSX with JS */}
      {/* <style jsx>{ThumbnailStyles}</style> */}

      {/* CSS Styling on JSX */}
      <style jsx>{`
      .thumbnail__image {
        width: ${small ? '100px' : '100%'};
      }

      .thumbnail__name {
        text-align: center;
        padding: 10px;
      }
      `}</style>
    </div>
  )
}

export default Thumbnail;
