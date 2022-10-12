import { Seller } from "vtex.product-context/react/ProductTypes";
import { find, propEq } from "ramda";

const getDefaultSeller = (sellers: Seller[]) => {
    return find(propEq("sellerDefault", true))(sellers) || sellers[0];
};

export default getDefaultSeller;
