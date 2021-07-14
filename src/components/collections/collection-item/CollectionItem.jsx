import React from "react";
import { connect } from "react-redux";
import styles from "./CollectionItem.module.scss";
import CustomButton from "../../custom-button/CustomButton";

import { addCollectionItemToCart } from "../../../redux/actions/shoppingCartActions";

const CollectionItem = ({ item, addCollectionItemToCart }) => {
  const { imageUrl, name, price } = item;

  function handleButtonClick() {
    addCollectionItemToCart(item);
  }

  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <CustomButton inverted onClick={handleButtonClick}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addCollectionItemToCart })(CollectionItem);
