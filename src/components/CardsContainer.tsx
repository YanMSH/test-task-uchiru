import React from 'react';
import {catData} from "../models/catData";
import CatCard from "./CatCard";
import classes from "./CardsContainer.module.css";

const CardsContainer: React.FC<{ data: catData[], isLoading: boolean, error: string | null, favourites?: boolean }> = (props) => {

    return (
        <div className={classes.container}>
            {props.data.map((cat) => {
                return <CatCard data={cat} key={cat.id} favourite={props.favourites}/>
            })}
            {props.isLoading && <p className="placeholder_message">Загружаем кис...</p>}
            {props.error && <p className="placeholder_message">Извините. Похоже, произошла ошибка. Попробуйте еще раз.</p>}
        </div>
    );
};

export default CardsContainer;