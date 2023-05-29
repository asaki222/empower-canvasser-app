import { configureStore} from '@reduxjs/toolkit';
import notesReducer from './reducers/notesReducer';
import thunk from 'redux-thunk';

export type RootState = ReturnType<typeof notesReducer>;

const store = configureStore({
    reducer: {
      notes: notesReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  });

export default store;

  
