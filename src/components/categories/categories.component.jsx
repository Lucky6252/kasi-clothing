import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = ({catergories}) => {
  
  return (
    <div className="categories-container">
      {catergories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
