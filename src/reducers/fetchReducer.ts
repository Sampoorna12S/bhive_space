// src/reducers/exampleReducer.ts
export interface FetchState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: FetchState = {
  data: [],
  loading: false,
  error: null,
};

type FetchAction =
  | { type: 'FETCH_DATA_REQUEST'; }
  | { type: 'FETCH_DATA_SUCCESS'; payload: any[]; }
  | { type: 'FETCH_DATA_FAILURE'; error: string; };

export default function fetchReducer(
  state = initialState,
  action: FetchAction
): FetchState {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
