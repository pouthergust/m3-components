import React, { memo } from "react";
import styles from "../styles.css";

interface HighPriceProps {
  highPrice: number | string
}

function HighPrice({ highPrice }: HighPriceProps) {
    return <p className={styles.highPrice}>{highPrice}</p>;
}

export default memo(HighPrice);
