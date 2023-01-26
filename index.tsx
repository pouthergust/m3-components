import React from "react";

import { PriceProvider } from "./Context";
interface PriceProps {
    discount?: number
    showHighPrice?: boolean
    showLowPrice?: boolean
    showInstallments?: boolean
}

import CustomPrice from "./components/CustomPrice";

export type PricesType = "highPrice" | "lowPrice" | "installment"

function Price({
    discount = 0,
    showHighPrice = true,
    showLowPrice = true,
    showInstallments = true,
}: PriceProps) {
    return (
        <PriceProvider>
            <CustomPrice
                discount={discount}
                showHighPrice={showHighPrice}
                showLowPrice={showLowPrice}
                showInstallments={showInstallments}
            />
        </PriceProvider>
    );
}

// Price.schema = {
//     title: "Preço",
// };

export default Price;
