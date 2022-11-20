import React, {useEffect, useState} from 'react';
import localStorageUtils from "../utils/localStorageUtils";
import useRequest from "../hooks/useRequest";
import {catData} from "../models/catData";
import {serverUrl} from "../api/api";
import CardsContainer from "../components/CardsContainer";

const Favourites = () => {
    const favouriteCatsIds = localStorageUtils.get(localStorageUtils.fav);
    const [favCats, setFavCats] = useState<catData[]>([]);
    const {isLoading, error, sendRequest: fetchData} = useRequest();
    useEffect(() => {
        const getData = (data: catData): void => {
            setFavCats(favCats => [...favCats, data]);
        };
        if(favouriteCatsIds){
            favouriteCatsIds.forEach((catId) => {fetchData({url: serverUrl + catId}, getData)});
        }
        else return
    }, [])

    const renderContainer = () => {
        if (favCats.length > 0) {
            return (
                <CardsContainer data={favCats} isLoading={isLoading} error={error} favourites={true}/>
            )
        } else {
            return <p className='placeholder_message'>Ищем ваших котиков. Если долго ищем, то похоже, что у вас их еще нет!</p>
        }
    }

    return (
        <>{renderContainer()}</>
    );
};

export default Favourites;