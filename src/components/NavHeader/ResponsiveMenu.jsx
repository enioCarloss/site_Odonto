import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import navLinks from '../Mockdata/data';
import styles from './index.module.scss';

const ResponsiveMenu = ({ open, onClose }) => {
  const location = useLocation(); 
  const activeRoute = location.pathname; 

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key={open ? "menu-open" : "menu-closed"}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.responsiveMenu}
          aria-hidden={!open}
        >
          <div className={styles.menuContent}>
            <ul className={styles.menuList} role="menu">
              {navLinks.map((link) => (
                <li key={link.id} role="menuitem">
                  <Link 
                    to={link.path} 
                    className={activeRoute === link.path ? styles.activeLink : undefined}
                   onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;