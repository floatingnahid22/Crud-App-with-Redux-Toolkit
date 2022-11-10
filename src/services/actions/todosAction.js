import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstant";

import axios from "axios";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, payload: error.message });
  }
};
