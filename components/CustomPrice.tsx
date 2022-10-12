import React, { useEffect, useState } from "react";

import { usePrice } from "../Context";

import HighPrice from "./HighPrice";
import Installments from "./Installments";
import LowPrice from "./LowPrice";

interface CustomPriceProps {
    showHighPrice?: boolean
    showLowPrice?: boolean
    showInstallments?: boolean
    discount: number
}

function CustomPrice({
    discount,
    showHighPrice = true,
    showLowPrice = true,
    showInstallments = true,
}: CustomPriceProps) {
    const { highPrice, lowPrice, setDiscount, installment } = usePrice();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setDiscount(discount);
        setLoading(false);
    }, []);

    if (loading) return <>carregando...</>;

    return (
        <>
            {showHighPrice && highPrice !== lowPrice && (
                <HighPrice highPrice={highPrice} />
            )}

            {showLowPrice && <LowPrice lowPrice={lowPrice} />}

            {showInstallments && <Installments installment={installment} />}
        </>
    );
}

export default CustomPrice;
