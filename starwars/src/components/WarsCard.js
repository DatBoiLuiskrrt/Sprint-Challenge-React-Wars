import React from "react";
import {Card,CardHeader, CardBody, CardText, Col } from "reactstrap";

const WarsCard = props => {
    // console.log("props in wars card", props);
    return (
        <Col xs="6" md="4" xl="3">
            <Card>
            
    <CardHeader>{props.data.name}</CardHeader>
    <CardBody>
    <CardText>DOB: {props.data.birth_year}</CardText>
    <CardText>Gender: {props.data.gender}</CardText>
    <CardText>Height: {props.data.height} cm</CardText>
    <CardText>Mass: {props.data.mass} kg</CardText>
    </CardBody>
        </Card>

    
    
        </Col>
    );
};

export default WarsCard;