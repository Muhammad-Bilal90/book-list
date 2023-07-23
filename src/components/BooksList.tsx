"use client";
import { useEffect } from "react";
import Loader from "./Loader";
import { Modal } from "./modal";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import { Book, fetchAllBooks } from "@/store/features/booksSlice";

const BooksList = () => {
  const { books, searchedBook, error, loading } = useAppSelector(
    (state) => state.books
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <section className="flex flex-wrap justify-center gap-x-8 gap-y-[60px] xl:px-28 py-24">
      {searchedBook && searchedBook.length > 0 ? (
        searchedBook.map((book: Book, ind: number) => {
          return <Modal key={ind} book={book} />;
        })
      ) : error ? (
        <h1>Error</h1>
      ) : loading ? (
        <Loader />
      ) : (
        books &&
        books.length > 0 &&
        books.map((book: Book, ind: number) => {
          return <Modal key={ind} book={book} />;
        })
      )}
    </section>
  );
};

export default BooksList;
