import { useState, useEffect } from "react";
import { Seller } from "vtex.product-context/react/ProductTypes";

import getDefaultSeller from "../../utils/getDefaultSeller";

interface UseInstallmentsProps {
    sellers: Seller
}

const useInstallments = ({ sellers }: UseInstallmentsProps) => {
    const [installmentQuantity, setInstallmentQuantity] = useState(0);
    const [installmentValue, setInstallmentValue] = useState(0);

    useEffect(() => {
        console.log(sellers);
        if (sellers) {
            const seller = getDefaultSeller(
                sellers instanceof Array ? sellers : [sellers]
            ) as Seller;

            const installments = seller?.commertialOffer.Installments;

            if (installments && installments.length > 0) {
                const maxInstallment = installments?.reduce((prev: any, current: any) =>
                    prev.NumberOfInstallments > current.NumberOfInstallments
                        ? prev
                        : current
                );

                setInstallmentQuantity(maxInstallment?.NumberOfInstallments ?? 0);
                setInstallmentValue(maxInstallment?.Value ?? 0);
            }
        }
    }, [sellers]);

    return { quantity: installmentQuantity, value: installmentValue };
};

export default useInstallments;
