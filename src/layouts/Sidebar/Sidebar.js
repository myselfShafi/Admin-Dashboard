import React from "react";
import styles from "./Sidebar.module.css";
import { TbDeviceAnalytics, TbLayoutSidebarRightExpand } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { RxComponent1 } from "react-icons/rx";

const SidebarList = [
  { id: 1, icon: <TbDeviceAnalytics />, title: "Analytics" },
  { id: 2, icon: <CgCalendarDates />, title: "Calender" },
  { id: 3, icon: <FaTasks />, title: "ToDo" },
  { id: 4, icon: <RxComponent1 />, title: "Components" },
];

const Sidebar = ({ open, setOpen }) => {
  return (
    <div className={`${styles.sidebar} ${open ? styles.sidebar_expand : ""}`}>
      <div>
        <div className={styles.title}>
          <h3>Sidebar</h3>
          {open && (
            <TbLayoutSidebarRightExpand
              onClick={() => setOpen(false)}
              className={styles.icon}
            />
          )}
        </div>
        <hr className={styles.line} />
        <div>
          <ul className={styles.list}>
            {SidebarList.map((list) => (
              <li key={list.id} className={styles.link}>
                {list.icon}&nbsp;&nbsp;&nbsp;
                {list.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.link}>
        <BiLogOutCircle />
        &nbsp;&nbsp;Logout
      </div>
    </div>
  );
};

export default Sidebar;
