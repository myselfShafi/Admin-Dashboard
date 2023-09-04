import React from "react";
import styles from "./Header.module.css";
import { TbLayoutDashboard, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { LiaLanguageSolid, LiaSearchengin } from "react-icons/lia";
import { BsMenuButton, BsBellFill } from "react-icons/bs";

const headerList = [
  { id: 1, icon: <LiaSearchengin /> },
  { id: 2, icon: <LiaLanguageSolid /> },
  { id: 3, icon: <BsBellFill /> },
  { id: 4, icon: <BsMenuButton /> },
];

const Header = ({ open, setOpen }) => {
  return (
    <header className={styles.header}>
      <TbLayoutSidebarLeftExpand
        className={`${styles.expand} ${styles.link}`}
        onClick={() => setOpen(true)}
      />
      <h2>
        <TbLayoutDashboard /> <span>Dashboard</span>
      </h2>
      <div>
        <ul className={styles.list}>
          {headerList?.map((list) => (
            <div key={list.id}>
              <li className={styles.link}>{list.icon}</li>
            </div>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
