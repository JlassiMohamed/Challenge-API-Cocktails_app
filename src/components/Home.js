import React, { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";

import DrinkCard from "./DrinkCard";
import "./Home.css";
import Loading from "./Loading";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  console.log(cocktails);

  const fetchCocktails = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
      );
      const data = await res.json();
      // console.log(data);
      setCocktails(data.drinks);
      setIsLoading(false);
    } catch (err) {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [input]);

  return (
    <div>
      <Form inline style={{ justifyContent: "center", padding:'20px'}}>
        <FormControl
          type="text"
          placeholder="Search by name..."
          className="mr-sm-2"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          style={{ width: "30%" }}
        />
      </Form>
      {isloading ? (
        <Loading />
      ) : (
        <div className="cocktailsList">
          {cocktails
            ? cocktails.map((drink) => (
                <DrinkCard drink={drink} key={drink.idDrink} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};
export default Home;
