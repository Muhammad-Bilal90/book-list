import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  length(length: any): unknown;
  author: string;
  country: string;
  language: string;
  pages: number;
  link: string;
  imageLink: string;
  title: string;
  price: number;
  rating: number;
  reviews: string[];
  is_liked: boolean;
  year: number;
}

export interface BookState {
  books: Book[];
  searchedBook: Book[];
  loading: boolean;
  error: boolean;
}

export const fetchAllBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch("https://books-list-api.vercel.app/books", {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": `${process.env.API_KEY}`,
    },
  });

  const { data } = await response.json();
  return data;
});

const initialState: BookState = {
  books: [],
  searchedBook: [],
  loading: false,
  error: false,
};
export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    handleSearchedBooks: (state, action: PayloadAction<Book[]>) => {
      state.searchedBook = [];
      state.searchedBook = [...action.payload];
    },
    handleRemoveSearchedBooks: (state) => {
      state.searchedBook = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllBooks.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { handleSearchedBooks, handleRemoveSearchedBooks } =
  booksSlice.actions;
export default booksSlice.reducer;
