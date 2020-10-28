import { actions } from '../../constants';

const initialState = {
  data: [],
  isLoading: false,
  hasFailedToLoad: false,
  hasLoaded: false,
};

const actionFactory = {
  [actions.ITEMS_GET_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
    hasFailedToLoad: false,
    hasLoaded: false,
  }),
  [actions.ITEMS_GET_SUCCESS]: (state, { result }) => ({
    ...state,
    isLoading: false,
    hasFailedToLoad: false,
    data: result.data.results,
    hasLoaded: true,
  }),
  [actions.ITEMS_GET_FAILURE]: (state) => ({
    ...state,
    data: [],
    isLoading: false,
    hasFailedToLoad: true,
    hasLoaded: false,
  }),
};

export default (state = initialState, action) => {
  if (actionFactory[action.type]) {
    return actionFactory[action.type](state, action);
  }

  return state;
};