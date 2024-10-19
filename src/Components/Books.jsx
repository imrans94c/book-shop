import Book from "./Book";

const Books = ({books}) => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-10">Books</h2>

            <div className="grid grid-cols-3 gap-14" >
                {
                    books?.map((book) => (
                    <Book book={book} key={book.bookId}></Book>
                    ))
                }
            </div>
        </div>
    );
};

export default Books;