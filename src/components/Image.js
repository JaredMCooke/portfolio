const Image = ({ src, fallback, type = "image/webp", alt }) => {
  return (
    <picture>
      {/* <source srcSet={src} type={type} /> */}
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Image;

export const ImageBlock = ({ id }) => {
  return (
    <div>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.jpeg`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpeg`}
        alt={id}
      />
    </div>
  );
};
