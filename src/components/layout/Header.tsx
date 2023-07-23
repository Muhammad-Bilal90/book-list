"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/logo.png";
import Ellipse from "/public/Ellipse1.png";
import Search from "/public/search.svg";
import { toast } from "react-toastify";
import {
  handleSearchedBooks,
  handleRemoveSearchedBooks,
  Book,
} from "@/store/features/booksSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import Link from "next/link";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const { books } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchedItem: Book[] = books.filter((book) =>
      book?.title?.toLowerCase().includes(search.toLowerCase())
    );
    if (searchedItem.length > 0) {
      dispatch(handleSearchedBooks(searchedItem));
    } else {
      toast.error("Incorrect Title please enter valid title");
    }
  };

  const clearSearch = () => {
    setSearch("");
    dispatch(handleRemoveSearchedBooks());
  };

  return (
    <header className="flex justify-evenly items-center pt-[9.349px] pb-[10.228px]  gap-[10px] sm:gap-[75px]">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" className="flex-shrink-0" />
      </Link>
      <div className="flex items-center w-[245px] sm:w-[475px] lg:w-[633px] h-[50px] pr-4 pl-4 py-[14px] gap-[15px] flex-shrink-0 rounded-[100px] bg-[#EFEFEF]">
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-[15px] w-full"
        >
          <button type="submit">
            <Image src={Search} alt="search-icon" />
          </button>
          <input
            type="text"
            value={search}
            placeholder="search by title"
            className="outline-none bg-[#EFEFEF] w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {search.length > 0 ? <button onClick={clearSearch}>X</button> : ""}
      </div>
      <div>
        <Image src={Ellipse} alt="avatar" className="flex-shrink-0" />
      </div>
    </header>
  );
};

export default Header;
