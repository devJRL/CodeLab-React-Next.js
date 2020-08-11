// yarn add @zeit/next-sass node-sass
import './styles.scss'

const ThumbnailWtihSass = (
  // props from parent
  { imageUrl = 'https://via.placeholder.com/210x295?text=No%20image', // default value for undefined
    showName,
    showId }
) => {
  // Render with props
  return (
    <div className="thumbnail">
      <img src={imageUrl} className="thumbnail__image" />
      <h3 className="thumbnail__name">
        {showName} ({showId})
      </h3>
    </div>
  )
}

export default ThumbnailWtihSass;
