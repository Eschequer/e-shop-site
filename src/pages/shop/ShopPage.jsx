import React from "react";
import { SHOP_DATA } from "./shopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collections: SHOP_DATA };
  }

  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

ShopPage.propTypes = {};

export default ShopPage;
