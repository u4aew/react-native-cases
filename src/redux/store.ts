import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Получить тип корневого редьюсера
export type RootState = ReturnType<typeof rootReducer>;

// Тип для AppDispatch, который будет использоваться для диспетчера
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
