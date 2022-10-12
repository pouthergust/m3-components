import React, { useCallback } from "react";
import { useSearchPage } from "vtex.search-page-context/SearchPageContext";
import styles from "./styles.css";

function ClearFilterButton() {
    const { searchQuery } = useSearchPage();

    const makeRedirect = useCallback((obj: {key: string, value: string }) => (
        `/${obj.value}?map=${obj.key}`
    ), []);

    const getQuery = useCallback(() => {
        return makeRedirect(
            searchQuery
                .variables
                .selectedFacets
                .find((facets: { key: string }) => facets.key === "ft")
        );
    }, []);

    return (
        <a href={getQuery()} className={styles.clearButton}>
            Limpar Filtros
        </a>
    );
}

export default ClearFilterButton;
