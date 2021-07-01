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
      { title: "Jackets", image: jackets, id: 1 },
      { title: "Hats", image: hats, id: 2 },
      { title: "Shoes", image: shoes, id: 3 },
      { title: "Men", image: men, size: "large", id: 4 },
      { title: "Women", image: women, size: "large", id: 5 },
    ],
  };

  render() {
    return (
      <div className={styles.directoryMenu}>
        {this.state.sections.map(({ title, image, id, size }) => (
          <MenuItem title={title} key={id} image={image} size={size} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
