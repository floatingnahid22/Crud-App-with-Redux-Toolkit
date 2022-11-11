import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import booksReducer from "../features/books/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

=======

import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
>>>>>>> 2e147f031e9ac6db7e7164255d9b043fd7bc9e57
export default store;
