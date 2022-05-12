import "./image.css";

export enum ImgType {
  SmallRectangle = "small-rectangle",
  BigRectangle = "big-rectangle",
  SmallSquare = "small-square",
}

type PropTypes = {
  src: string;
  alt: string;
  type: ImgType;
};

const Image = ({ src, alt, type }: PropTypes) => {
  return (
    <div className="imgWrapper">
      <img alt={alt} src={src} className={type} />
    </div>
  );
};

export default Image;
