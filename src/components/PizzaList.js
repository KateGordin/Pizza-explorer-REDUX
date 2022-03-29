// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/pizzas/actions";
import { useDispatch } from "react-redux";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>There are {pizzas.length} in total</p>
      <ul>
        {pizzas.map((onePizza) => (
          <li key={onePizza.id}>
            <h3>
              {" "}
              <button
                onClick={() => {
                  dispatch(toggleFavorite(onePizza.id));
                }}
              >
                {user.favorites.includes(onePizza.id) ? "❤️" : "♡"}
              </button>{" "}
              {onePizza.name}
            </h3>
            <strong>Description:</strong> {onePizza.description}
            <p>
              <strong> Bought: </strong>
              {onePizza.bought} times
            </p>
            <p>
              <img src={onePizza.image} style={{ width: 200 }} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
