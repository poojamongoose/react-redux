import { fromJS } from 'immutable';
// import colors from 'API/ui';
import {
  TOGGLE_COLOR
} from 'Actions/actionConstants';

// const initialState = {
//   color: 'red'
// };
const initialState = {
  name: 'Ankit',
  lang: [' C ', ' JS ', ' React']
};

const initialImmutableState = fromJS(initialState);

// export default function reducer(state = initialImmutableState, action = {}) {
//   switch (action.type) {
//     case TOGGLE_COLOR:
//       return state.withMutations((mutableState) => {
//         const color = colors[Math.floor(Math.random() * colors.length)];
//         mutableState
//           .set('color', color);
//       });
//     default:
//       return state;
//   };
// };

export default function reducer(state = initialImmutableState, action = {}) {
  return state;
};
