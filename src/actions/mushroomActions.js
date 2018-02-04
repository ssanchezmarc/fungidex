import * as types from './ActionTypes';

export function searchTermChanged(searchTerm) {
  return {
    type: types.SEARCH_INPUT_CHANGED,
    searchTerm
  };
}

export function markCaught(name) {
  return {
    type: types.MARK_CAUGHT,
    name
  };
}
