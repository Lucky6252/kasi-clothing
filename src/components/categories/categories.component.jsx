import { CategoriesContainer } from "./categories.styles";
import DirectoryItem from "../directory-item/directory-item.component";

const Categories = ({catergories}) => {
  
  return (
    <CategoriesContainer>
      {catergories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
