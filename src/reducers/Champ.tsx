import { createSlice} from "@reduxjs/toolkit";

export const champSlice = createSlice({
  name: "champ",
  initialState: { value: { id: "Aatrox", name: "Aatrox", all: [] as String[] } },
  reducers: {
    setChamp: (state, action) => { 
      state.value = action.payload;
    }
  }
});

export const { setChamp } = champSlice.actions;

export default champSlice.reducer;