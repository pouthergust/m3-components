import React, { memo } from "react";
import styles from "../styles.css";

interface LowPriceProps {
    lowPrice: number | string
}

function LowPrice({ lowPrice }: LowPriceProps) {
    return (
        <p className={styles.lowPrice}>
            <strong>{lowPrice}&nbsp;</strong>
        </p>
    );
}

export default memo(LowPrice);
