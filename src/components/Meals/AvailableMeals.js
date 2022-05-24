import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { fetchOrGetData } = useHttp();

  useEffect(() => {
    const setMealItems = (data) => {
      console.log('data',Object.keys(data));
      const newMeals = Object.keys(data).map((food) => {
        const meal = data[food];
        return (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        );
      });
      setMeals(newMeals);
    };
    fetchOrGetData(
      { url: "https://customhook-7d8ba-default-rtdb.firebaseio.com/food.json" },
      setMealItems
    );
  }, [fetchOrGetData]);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};
