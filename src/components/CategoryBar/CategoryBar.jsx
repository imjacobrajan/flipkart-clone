import "./CategoryBar.css";

const CategoryBar = ({ Imgsrc, CategoryName }) => {
  return (
    <div className="categorybar">
      <div className="categorybar-img">
        <img src={Imgsrc} alt="category" />
      </div>
      <p className="categorybar-name">{CategoryName}</p>
      {console.log("hello")}
    </div>
  );
};

export default CategoryBar;
