import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import {CartegoryTitle, CategoryContainer} from "./category.styles";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  console.log(products);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CartegoryTitle>{category.toUpperCase()}</CartegoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
