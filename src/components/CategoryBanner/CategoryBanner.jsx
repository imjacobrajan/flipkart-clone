import "./CategoryBanner.css";

const CategoryBanner = ({ ImgSrc, Title, Brand }) => {
  return (
    <div className="categorybanner">
      <img src={ImgSrc} alt="Banner-image" />
      <p className="categorybanner-title">
        {Title.length < 20 ? Title : Title.slice(0, 15) + "..."}
      </p>
      <p className="categorybanner-shopnow">Shop Now!</p>
      <p className="categorybanner-brands">{Brand}</p>
    </div>
  );
};

export default CategoryBanner;
