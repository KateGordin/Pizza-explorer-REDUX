import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  console.log("restaurants", restaurants);
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((oneRestaurant) => (
          <li key={oneRestaurant.id}>
            {oneRestaurant.name}
            <ul>
              {/* because each restaurant has id, name and pizzas (pizzas array if id) */}
              {oneRestaurant.pizzas.map((pizza) => (
                <li key={pizza.id}>{pizza.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
