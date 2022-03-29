export const addPizza = ({ name, description, image }) => ({
  type: "pizzas/add",
  payload: {
    name,
    description,
    image,
    id: Math.random(),
  },
});
