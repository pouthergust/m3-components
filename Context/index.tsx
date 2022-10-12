import React, {
    useState,
    useCallback,
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react";

import useProduct from "vtex.product-context/useProduct";

import useInstallments from "./../Hooks/useInstallments";
import priceBrazillianFormatter from "./../utils/priceBrazillianFormatter";
import getDefaultSeller from "./../utils/getDefaultSeller";
import { Seller } from "vtex.product-context/react/ProductTypes";

interface PriceProviderProps {
    children: ReactNode
}

interface PriceContextValue {
    highPrice: string
    lowPrice: string
    installment: { quantity: any; value: any }
    discountCtx: number
    setDiscount: Dispatch<SetStateAction<number>>
}

const Context = createContext({} as PriceContextValue);

function PriceProvider({ children }: PriceProviderProps) {
    const [discountCtx, setDiscount] = useState(0);

    const { product } = useProduct();

    const pbf = useCallback(
        (priceValue) => priceBrazillianFormatter(priceValue),
        []
    );
    const sellers = useCallback(
        () => getDefaultSeller(product.items[0].sellers),
        [product]
    );
    const { quantity, value } = useInstallments({ sellers: sellers() as Seller });

    const highPrice = pbf(product.priceRange.listPrice.highPrice);
    const lp = product.priceRange.sellingPrice.lowPrice;
    const lowPrice = pbf(discountCtx === 0 ? lp : lp - lp * (discountCtx / 100));

    return (
        <Context.Provider
            value={{
                highPrice,
                lowPrice,
                setDiscount,
                discountCtx,
                installment: { quantity, value: pbf(value) },
            }}
        >
            {children}
        </Context.Provider>
    );
}

const usePrice = () => {
    const priceContext = useContext(Context);

    if (!priceContext)
        throw new Error("This custom hook must to be used inside a PRICE provider");

    return priceContext;
};

export { Context, PriceProvider, usePrice };
