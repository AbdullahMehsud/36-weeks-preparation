import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./slice"
const store = configureStore({
  reducer: {
    root: rootReducer
  },
})
// export type RootState = ReturnType<typeof store.getState>

export default store