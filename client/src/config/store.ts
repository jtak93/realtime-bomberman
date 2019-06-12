import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const middleware = [];
const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

export default store;