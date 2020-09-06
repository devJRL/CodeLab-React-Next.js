import ThumbnailStyles from "./styles";

import Link from "next/link";

const Thumbnail = (
  // props from parent
  {
    imageUrl = "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg", // for no thumbnail
    showName,
    small = false,
    href = "",
    as = "",
  }
) => {
  // Render with props
  return (
    <>
      <Link href={href} as={as}>
        <div className="thumbnail">
          <img src={imageUrl} className="thumbnail__image" />
          <p className="thumbnail__name">{showName}</p>
        </div>
      </Link>

      {/* CSS Styling on JSX with JS */}
      {/* <style jsx>{ThumbnailStyles}</style> */}

      {/* CSS Styling on JSX */}
      <style jsx>{`
        .thumbnail {
          width: 120px;
          text-align: center;
        }
        .thumbnail__image {
          width: ${small ? "100px" : "100%"};
        }
        .thumbnail__name {
          text-align: center;
          padding: 5px;
        }
      `}</style>
    </>
  );
};

export default Thumbnail;
