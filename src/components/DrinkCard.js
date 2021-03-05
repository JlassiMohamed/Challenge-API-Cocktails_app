import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DrinkCard = ({ drink }) => {
  // console.log(drink.idDrink);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={drink.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{drink.strDrink}</Card.Title>
        <Card.Text>{drink.idDrink}</Card.Text>
        <Link to={`/drinks/${drink.idDrink}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DrinkCard;
