import React, {useState, useEffect} from "react";
import axios from "axios";
import WarsCard from "./WarsCard";
import { Container, Row} from "reactstrap";

export default function WarsList() {
    const [char, setChar] = useState([]);
    // const [planet, setPlanet] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/",)
        .then( response => {
            console.log("this is props in waslist" , response);
            // console.log("second props" , response.data.next);
            // setPlanet(response.data.planet);
            setChar(response.data.results);
            // setPlanet(response.data.next);
        })
        .catch(error => {
            console.log("No sirve esta mamada ", error);
        });
    }, []);
    return (
        <Container>
            <Row>
        {char.map(myCharacters => {
            return <WarsCard key={myCharacters.name}data={myCharacters} />
        })},
        {/* {planet.map(myPlanet => {
            return <WarsCard secondProps={myPlanet} />
        })} */}
            </Row>
        </Container>
    );
}