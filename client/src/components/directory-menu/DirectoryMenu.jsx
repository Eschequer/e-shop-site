import React from "react";
import styles from "./DirectoryMenu.module.scss";
import hats from "../../images/directory-images/hats.jpg";
import shoes from "../../images/directory-images/shoes.jpg";
import jackets from "../../images/directory-images/jackets.jpg";
import men from "../../images/directory-images/men.jpg";
import women from "../../images/directory-images/women.jpg";
import MenuItem from "../menu-item/MenuItem";

class DirectoryMenu extends React.Component {
  state = {
    sections: [
      { title: "jackets", image: jackets, id: 1, linkUrl: "shop/jackets" },
      { title: "hats", image: hats, id: 2, linkUrl: "shop/hats" },
      { title: "shoes", image: shoes, id: 3, linkUrl: "shop/shoes" },
      { title: "men", image: men, size: "large", id: 4, linkUrl: "shop/men" },
      {
        title: "women",
        image: women,
        size: "large",
        id: 5,
        linkUrl: "shop/women",
      },
    ],
  };

  render() {
    return (
      <div className={styles.directoryMenu}>
        {this.state.sections.map(({ title, image, id, size, linkUrl }) => (
          <MenuItem
            title={title}
            key={id}
            image={image}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
