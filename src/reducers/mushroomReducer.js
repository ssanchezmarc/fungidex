import { initialState } from "./initialState";
import { SEARCH_INPUT_CHANGED, MARK_CAUGHT } from '../constants/ActionTypes';
import { Mushrooms } from '../data/mushrooms';

export default const mushroom = (state = initialState, action) => {
  var doFilter = (searchTerm=state.searchTerm, filters=state.filterOptions) => {
    var filtered = Mushrooms;
    if (searchTerm) {
      filtered = Mushrooms.filter(mushroom => mushroom.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }

    return filtered;
  };

  switch (action.type) {
  case SEARCH_INPUT_CHANGED:
    return {
      ...state,
      searchTerm: action.searchTerm,
      mushrooms: doFilter(action.searchTerm)
    };

  case MARK_CAUGHT:
    return {
      ...state,
      caughtMushrooms: [
        ...state.caughtMushrooms,
        action.name
      ]
    };

  default:
    return state;
  }
}
