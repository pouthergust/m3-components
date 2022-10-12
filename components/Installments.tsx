import React, { memo } from "react";
import styles from "../styles.css";

interface InstallmentsProps {
    installment: { quantity: number | string; value: number | string }
}

function Installments({ installment }: InstallmentsProps) {
    return (
        <p className={styles.installment}>
            ou {installment.quantity}x de
            <strong>
                &nbsp;{installment.value}&nbsp;
            </strong>
            sem juros
        </p>
    );
}

export default memo(Installments);
