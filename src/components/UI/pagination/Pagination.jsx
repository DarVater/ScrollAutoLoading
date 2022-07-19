import React from 'react';
import {usePagenation} from "../../hooks/usePagenation";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagenation(totalPages)
    return (
        <div className={"page__wrapper"}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;