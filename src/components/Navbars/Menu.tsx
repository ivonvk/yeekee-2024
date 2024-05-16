import Link from 'next/link'
import { useRouter } from 'next/router'
import React from "react";
import { useIntl } from "react-intl";
import styles from "./Menu.module.scss";


interface MenuProps {
  open: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ open, toggleMenu }) => {
  const { locale } = useRouter();
  const { formatMessage } = useIntl();

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`}>
      <div className={styles.wrapper}>
      </div>
    </div>
  );
};

export default Menu;
