import { createSlice} from "@reduxjs/toolkit";

export const versionSlice = createSlice({
  name: "version",
  initialState: { value: { num: "12.6.1", all: [] as String[] } },
  reducers: {
    setVersion: (state, action) => { 
      state.value = action.payload;
    }
  }
});

export const { setVersion } = versionSlice.actions;

export default versionSlice.reducer;