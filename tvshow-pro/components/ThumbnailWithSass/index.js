import Link from 'next/link'
// yarn add @zeit/next-sass node-sass
import './styles.scss'

const ThumbnailWtihSass = (
  // props from parent
  { imageUrl = 'https://via.placeholder.com/210x295?text=No%20image', // default value for undefined
    showName,
    href = '',
    as = '' }
) => {
  // Render with props
  return (
    <div className="thumbnail">
      {/* href: Template JavaScript file
        * as: Where the link for client */}
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} className="thumbnail__image" />
          <h3 className="thumbnail__name">
            {showName}
          </h3>
        </a>
      </Link>
    </div>
  )
}

export default ThumbnailWtihSass;
