import React from "react";

const WarsCard = props => {
    // console.log("props in wars card", props);
    return (
        <>
    <h1>{props.data.name}</h1>
    <p>DOB: {props.data.birth_year}</p>
    <p>Gender: {props.data.gender}</p>
    <p>Height: {props.data.height} cm</p>
    <p>Mass: {props.data.mass} kg</p>

    {/* <p>HomeWorld: {props.secondProps}</p> */}
    
        </>
    );
};

export default WarsCard;