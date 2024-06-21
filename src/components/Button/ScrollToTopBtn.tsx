import React, { useState, useEffect } from 'react';
import styles from "./ScrollToTopBtn.module.scss";

function MyComponent() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset >500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.btn}>
      {/* Your component content */}
      <button
        className={`${styles.scroll} ${showButton ?`${styles.show}` : ''}`}
        onClick={scrollToTop}
      >
        &#8593;
      </button>
    </div>
  );
}

export default MyComponent;