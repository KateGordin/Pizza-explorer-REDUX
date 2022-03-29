export const selectRestaurantsWithPizzas = (reduxState) => {
  // .map returns a new (cloned) array so I don't have to worry about cloning it
  return reduxState.restaurants.allRestaurants
    .map((oneRestaurant) => {
      // replace each restaurant with a new object
      return {
        // ...that contains everything from the original restaurant
        ...oneRestaurant,
        // pizzas is in restaurant (restaurant has name, id and pizzas (array of pizzas id))
        pizzas: oneRestaurant.pizzas.map((pizzaIdWeHad) =>
          // ...so that it contains a list of pizzas instead of a list of ids
          reduxState.pizzas.allPizzas.find((pizza) => pizza.id === pizzaIdWeHad)
        ),
      };
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
};
