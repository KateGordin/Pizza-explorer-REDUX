// src/components/AddPizzaForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/actions";

export default function AddPizzaForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    // TODO:
    // - dispatch an action that sends the new pizza to the store
    dispatch(
      addPizza({
        name,
        description,
        image,
      })
    );

    // - clear the input fields
    setName(" ");
    setDescription(" ");
    setImage(" ");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>

      <p>
        <label>
          Image:{" "}
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
      </p>

      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
