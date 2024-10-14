// src/CareerPath.tsx
import React from "react";
import styles from "./CareerPath.module.scss";

interface CareerStep {
  title: string;
  description: string;
  year: string;
}

interface CareerPathProps {
  steps: CareerStep[];
}

const CareerPath: React.FC<CareerPathProps> = ({ steps }) => {
  return (
    <div className={styles.careerPath}>
      <div className={styles.current}>
        <h3>{`現在(持續更新)`}</h3>
        <p>{``}</p>
        <span className={styles.year}>{2024}</span>
        <div className={styles.lineFirst} />
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div
            className={`${styles.step} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            key={index}
          >
            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className={styles.year}>{step.year}</span>
            </div>
            {index < steps.length && <div className={styles.line} />}
          </div>
        ))}
      </div>
      <h3>{`起源`}</h3>
      <p>{``}</p>
      <span className={styles.year}>{1961}</span>
    </div>
  );
};

export default CareerPath;
