import React from "react";
import { SHOP_DATA } from "./shopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import styles from "./ShopPage.module.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collections: SHOP_DATA };
  }

  render() {
    return (
      <div className={styles.shopPage}>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

ShopPage.propTypes = {};

export default ShopPage;
