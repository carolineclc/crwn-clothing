import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const Directory = ({ categories }) => {
  const { id } = categories;
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
