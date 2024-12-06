// src/actions/exampleActions.ts
import { AppDispatch } from '../store';

export const fetchData = (url:string) => async (dispatch: AppDispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });
  try {
    const response = await fetch(url);
    console.log("response: ", response);
    const data = await response.json();
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', error: (error as Error).message });
  }
};
