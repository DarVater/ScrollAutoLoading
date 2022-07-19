import {useMemo} from "react";

export const usePagenation = (totalPages) => {
    const pagesArray = useMemo(() => {
        let tempArray = []
        for (let i = 0; i < totalPages ; i++) {
            tempArray.push(i + 1);
        }
        return tempArray;
    }, [totalPages])
    return pagesArray;
}