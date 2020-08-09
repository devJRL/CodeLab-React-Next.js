// yarn add @zeit/next-sass node-sass
import './styles.scss'

const ThumbnailWtihSass = (
  // props from parent
  { imageUrl, showName, showId }
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
