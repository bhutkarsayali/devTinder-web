import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeUserFromFeed: (state, action) => {
      console.log(action.payload);
      const newFeedArray = state.filter((user) => user._id !== action.payload);
      return newFeedArray;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
