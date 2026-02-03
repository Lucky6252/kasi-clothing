import { DirectoryItemContainer, BackgroundImage, Body, Title, ShopNow } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage
      imageUrl={imageUrl}
      />
      <Body>
        <Title>{title}</Title>
        <ShopNow>Shop Now</ShopNow>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
