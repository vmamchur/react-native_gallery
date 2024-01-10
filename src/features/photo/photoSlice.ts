import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {Photo} from '../../types/Photo.interface';
import photoService from '../../services/photoService';

export const fetchPhotos = createAsyncThunk(
  'photo/fetchPhotos',
  async (page: number): Promise<Photo[]> => {
    const response = await photoService.getAll(page);

    return response;
  },
);

interface PhotoState {
  photos: Photo[];
  isLoading: boolean;
  error: string;
}

const initialState: PhotoState = {
  photos: [],
  isLoading: false,
  error: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPhotos.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = [...state.photos, ...action.payload];
      state.isLoading = false;
    });
    builder.addCase(fetchPhotos.rejected, state => {
      state.isLoading = false;
      state.error = 'Something went wrong 🤡';
    });
  },
});

export default photoSlice.reducer;
