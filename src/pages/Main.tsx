import React, {useEffect, useState} from 'react';
import {catData} from "../models/catData";
import useRequest from "../hooks/useRequest";
import {picsEndpoint} from "../api/api";
import CardsContainer from "../components/CardsContainer";

const Main = () => {
    const [cats, setCats] = useState<catData[]>([]);
    const {isLoading, error, sendRequest: fetchData} = useRequest();

    useEffect(() => {
        const getData = (dataArr: catData[]): void => {
            // const newCats: catData[] = [...cats].concat(...dataArr)
            setCats(dataArr);
        };
        fetchData({url: picsEndpoint + '?limit=15'}, getData);
    }, [fetchData])

    return (
        <CardsContainer data={cats} isLoading={isLoading} error={error} />
    )
};

export default Main;