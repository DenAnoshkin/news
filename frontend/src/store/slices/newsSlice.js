import { createSlice } from "@reduxjs/toolkit";
import { getAllNews } from "../../api/news";

const newsSlice = createSlice({
    name: "news",
    initialState: { entities: [], isLoading: true },
    reducers: {
        set(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
    },
});

const { set } = newsSlice.actions;
export default newsSlice.reducer;

export const fetchNews = () => async (dispach) => {
    try {
        const news = await getAllNews();
        dispach(set(news));
    } catch (error) {
        console.log(error);
    }
};
