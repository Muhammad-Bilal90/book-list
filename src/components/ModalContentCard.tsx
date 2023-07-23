import { Book } from "@/store/features/booksSlice";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-rating-star-with-type";
import { ExternalLink } from "lucide-react";

const ModalContentCard = (props: { book: Book }) => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="flex-1 lg:flex-[2_0_0%]">
        <Image
          src={props.book.imageLink}
          alt="books-display"
          width={300}
          height={300}
          className="w-full h-60 sm:h-96 lg:h-[792px]"
        />
      </div>
      <div className="flex-1 shrink-0 lg:px-7 p-4 lg:pt-16 bg-white">
        <h1 className="font-poppins text-[26px] not-italic font-semibold leading-normal mb-[30px] capitalize">
          {props.book.title}
        </h1>
        <div className="flex justify-between text-center mb-[30px]">
          <div>
            <p className="font-poppins mb-3 text-xl not-italic font-medium leading-normal capitalize">
              Rating
            </p>
            <span>
              <ReactStars value={props.book.rating} size={"10px"} />
            </span>
          </div>
          <div>
            <p className="font-poppinsoppins mb-3 text-xl not-italic font-medium leading-normal capitalize">
              Reviews
            </p>
            <span>({props.book.reviews})</span>
          </div>
          <div>
            <p className="font-poppins mb-3 text-xl not-italic font-medium leading-normal capitalize">
              Price
            </p>
            <span>${props.book.price}</span>
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-start mb-[30px] ">
          <h2 className="font-poppins text-base font-medium leading-normal capitalize">
            Author:{" "}
            <span className="font-poppins text-base font-normal leading-normal capitalize">
              {props.book.author}
            </span>
          </h2>
          <h2 className="font-poppins text-base font-medium leading-normal capitalize">
            Country:{" "}
            <span className="font-poppins text-base font-normal leading-normal capitalize">
              {props.book.country}
            </span>
          </h2>
          <h2 className="font-poppins text-base font-medium leading-normal capitalize">
            Language:{" "}
            <span className="font-poppins text-base font-normal leading-normal capitalize">
              {props.book.language}
            </span>
          </h2>
          <h2 className="font-poppins text-base font-medium leading-normal capitalize">
            Year:{" "}
            <span className="font-poppins text-base font-normal leading-normal capitalize">
              {props.book.year}
            </span>
          </h2>
          <h2 className="font-poppins text-base font-medium leading-normal capitalize">
            Pages:{" "}
            <span className="font-poppins text-base font-normal leading-normal capitalize">
              {props.book.pages}
            </span>
          </h2>
        </div>
        <Link href={props.book.link} target="_blank">
          <button className="flex justify-center items-center w-full lg:w-[341px] h-[45px] py-[10px] px-[92px] gap-2 shrink-0 rounded-[5px] text-white bg-[#004D6D]">
            View Details <ExternalLink />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModalContentCard;
