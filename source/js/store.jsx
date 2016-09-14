import { applyMiddleware, createStore } from 'redux';

import * as storage from 'redux-storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers/reducers';

// Import redux and all your reducers as usual
// import { createStore, applyMiddleware } from 'redux';
// import * as reducers from './reducers';

const reducers = storage.reducer(reducer);

// const middleware = applyMiddleware(promise(), thunk, logger());

// Now it's time to decide which storage engine should be used
//
// Note: The arguments to `createEngine` are different for every engine!
import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('my-save-key');

const middleware = storage.createMiddleware(engine);

// As everything is prepared, we can go ahead and combine all parts as usual
const createStoreWithMiddleware = applyMiddleware(middleware, createStore, logger(), thunk, promise());
const store = createStoreWithMiddleware(reducers);

// export default createStore(reducer, middleware);

// At this stage the whole system is in place and every action will trigger
// a save operation.
//
// BUT (!) an existing old state HAS NOT been restored yet! It's up to you to
// decide when this should happen. Most of the times you can/should do this
// right after the store object has been created.

// To load the previous state we create a loader function with our prepared
// engine. The result is a function that can be used on any store object you
// have at hand :)
const load = storage.createLoader(engine);
// load(store);

// Notice that our load function will return a promise that can also be used
// to respond to the restore event.
load(store).then(
	(newState) => console.log('Loaded state:', newState)
).catch(
	() => console.log('Failed to load previous state')
);
