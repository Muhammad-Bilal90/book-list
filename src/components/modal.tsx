import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BooksCard from "./BooksCard";
import ModalContentCard from "./ModalContentCard";
import { Book } from "@/store/features/booksSlice";

export function Modal(props: { book: Book }) {
  const { book } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <BooksCard book={book} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <ModalContentCard book={book} />
      </DialogContent>
    </Dialog>
  );
}
