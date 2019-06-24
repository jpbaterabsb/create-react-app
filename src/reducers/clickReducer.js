import { CLICK_UPDATE_VALUE,CLICK_UPDATE_VALUE_2 } from '../actions/actionTypes';

const initialState = {
  newValue: 'Atualizado via Redux!'
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
      case CLICK_UPDATE_VALUE_2:
        return {
          ...state,
          newValue2: action.newValue
      };
    default:
      return state;
  }
}
