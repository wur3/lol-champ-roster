import { createSlice} from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: { value: { code: "en_US", all: [] as String[] } },
  reducers: {
    setLanguage: (state, action) => { 
      state.value = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;