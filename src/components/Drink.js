import React, { useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Loading from "./Loading";

const Drink = ({ match }) => {
  const [drink, setDrink] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { idDrink } = match.params;
  console.log(drink);

  useEffect(() => {
    const fetchCocktails = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        const data = await res.json();
        // console.log(data);
        setDrink(data.drinks[0]);
        setIsLoading(false);
      } catch (err) {
        console.log("Error fetching data");
      }
    };
    fetchCocktails();
  }, [idDrink]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={drink.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{drink.strDrink}</Card.Title>
            <hr />
            <h6>Instructions:</h6>
            <Card.Text>
              {drink.strInstructions} {drink.strInstructionsDE}
              {drink.strInstructionsIT}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <h6>Ingredients:</h6>
            <ListGroupItem>
              {drink.strIngredient1}, {drink.strIngredient2},{" "}
              {drink.strIngredient3}, {drink.strIngredient4} and{" "}
              {drink.strIngredient5}
            </ListGroupItem>
            <ListGroupItem>
              <h6>Category:</h6>
              {drink.strCategory}, {drink.strAlcoholic}
            </ListGroupItem>
            <ListGroupItem>{drink.strGlass}</ListGroupItem>
          </ListGroup>
        </Card>
      )}
    </div>
  );
};

export default Drink;
