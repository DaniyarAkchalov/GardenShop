import React from "react";
import logo from "../../media/garden_logo.png";
import shopping_bag from "../../media/shopping_bag.png";
import s from "./index.module.css";

export default function Navmenu() {
  return (
    <header className={s.navmenu}>
      <div className={s.logo_block}>
        <img src={logo} alt="garden_logo" />
        <div>Catalog</div>
      </div>

      <nav>
        <ul className={s.nav_block}>
          <li>Category</li>
          <li>Coupon</li>
          <li>Sale</li>
          <li>Contacts</li>
          <li>
            <img src={shopping_bag} alt="shopping_bag" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
