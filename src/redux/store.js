import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

// const middleware = ({ dispatch, getState }) => (next) => (action) => {
//   if (action.type === 'TEST_MIDDLEWARE') {
//     //
//   }
//   return next(action);
// };

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
