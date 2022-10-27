import {createSlice} from "@reduxjs/toolkit";
import tuitItem from '../data/full-tuits.json';

const tuitItemSlice = createSlice({
    name: 'tuits',
    initialState: tuitItem
});

export default tuitItemSlice.reducer;