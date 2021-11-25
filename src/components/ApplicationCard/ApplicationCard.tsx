import React from "react";
import style from "./ApplicationCard.module.scss";

// @ts-ignore
const ApplicationCard = ({ id, name, spend, BCAP1, BCAP2, BCAP3 }) => {

    return <div className={style.card}>
        <h2>{name}</h2>
        Total spend: ${spend}
    </div>;
};

export default ApplicationCard;
