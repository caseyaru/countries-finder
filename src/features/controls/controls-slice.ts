import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Region } from 'types';

type controlsSlice = {
  search: string,
  region: Region | '',
}

const initialState: controlsSlice = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | ''>) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  }
});

export const {setRegion, setSearch, clearControls} = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
