// src/store/user/reducer.js
const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite":
      // if (state.favorites.includes(action.payload)) {
      //   const filtered = state.favorites.filter(
      //     (favoriteId) => favoriteId !== action.payload
      //   );
      //   return {
      //     ...state,
      //     favorites: filtered,
      //   };
      // }

      // return {
      //   ...state,
      //   favorites: [...state.favorites, action.payload],
      // };

      return {
        ...state,
        //action.payload is from toggleFavorite function
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(
              (checkFavoriteId) => checkFavoriteId !== action.payload
            )
          : [...state.favorites, action.payload],
      };
    default: {
      return state;
    }
  }
}
