import React, {useCallback, useEffect, useState} from 'react';
import {catData} from "../models/catData";
import useRequest from "../hooks/useRequest";
import {picsEndpoint} from "../api/api";
import CardsContainer from "../components/CardsContainer";

const Main = () => {
    const [cats, setCats] = useState<catData[]>([]);
    const {isLoading, error, sendRequest: fetchData} = useRequest();

    const getData = (dataArr: catData[]): void => {
        // const newCats: catData[] = [...cats].concat(...dataArr)
        setCats(cats => [...cats, ...dataArr]);
    };

    const scrollHandler = useCallback(() => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            fetchData({url: picsEndpoint + '?limit=15'}, getData);
        }
    }, [fetchData])

    useEffect(() => {
        fetchData({url: picsEndpoint + '?limit=15'}, getData);
    }, [fetchData])

    useEffect(() => {

        window.addEventListener('scroll', scrollHandler)
        return function(){
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [scrollHandler])

    return (
        <CardsContainer data={cats} isLoading={isLoading} error={error} />
    )
};

export default Main;