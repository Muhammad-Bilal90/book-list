"use client";
import Image from "next/image";
import ReactStars from "react-rating-star-with-type";
import { Book } from "@/store/features/booksSlice";

const BooksCard = (props: { book: Book }) => {
  return (
    <div className="flex flex-col items-start gap-[15px] w-[247px] cursor-pointer">
      <div className="absolute bg-white p-1 rounded-full m-1 self-end mt-7 mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 26 22"
          fill={props.book.is_liked ? "none" : "#D80000"}
        >
          <path
            d="M16.2625 19.1834L16.2636 19.1825C16.6343 18.8905 17.0113 18.6001 17.3904 18.308C18.995 17.0716 20.6372 15.8063 21.9937 14.279C23.6364 12.4295 24.7796 10.2744 24.7796 7.47981C24.7796 4.74655 23.2352 2.45657 21.1306 1.49455C19.089 0.561354 16.34 0.804589 13.7205 3.52657L12.9999 4.27536L12.2793 3.52649C9.65975 0.803869 6.91074 0.560426 4.86926 1.49345C2.76467 2.45531 1.22034 4.74526 1.22034 7.47854C1.22034 10.2738 2.36379 12.4288 4.00669 14.2786C5.36089 15.8033 6.99943 17.0668 8.60113 18.3019C8.9832 18.5965 9.36319 18.8895 9.73671 19.1841M16.2625 19.1834L9.73671 19.1841M16.2625 19.1834C15.5905 19.7142 14.9931 20.1777 14.4184 20.5136C13.8432 20.8498 13.3852 21 12.9999 21C12.6149 21 12.157 20.8496 11.5815 20.5133M16.2625 19.1834L11.5815 20.5133M9.73671 19.1841C10.4092 19.714 11.0065 20.1772 11.5815 20.5133M9.73671 19.1841L11.5815 20.5133"
            stroke="#D80000"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Image
        src={props.book.imageLink}
        alt="books-display"
        width={300}
        height={300}
        className="w-[247px] h-[390px] rounded-[18.639px]"
      />
      <p className="h-[70px] font-[Poppins] text-[22px] not-italic font-semibold leading-normal capitalize text-black">
        {props.book.title}
      </p>
      <ReactStars value={props.book.rating} />

      <p className="text-center font-[Poppins] text-lg not-italic font-medium leading-normal capitalize text-black">
        ${props.book.price}
      </p>
    </div>
  );
};

export default BooksCard;
