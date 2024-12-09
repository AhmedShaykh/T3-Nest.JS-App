"use client";
import { useEffect, useState } from "react";
import { addBook, deleteBook, editBooks, getBook, getBooks } from "@/lib/services";
import { useRouter } from "next/navigation";

type Books = {
    id?: any;
    userId?: string;
    title?: string;
    description?: string;
    author?: string;
    createdAt?: string;
    updatedAt?: string;
};

const Book = () => {

    const [books, setBooks] = useState<Books[]>([]);

    const [newBook, setNewBook] = useState<Books>();

    const [editBook, setEditBook] = useState<Books | null>(null);

    const [isLoading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {

        FetchBook();

    }, []);

    let FetchBook = async () => {

        router.refresh();

        try {

            const response = await getBooks();

            setBooks(response);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const addBookData = async (e: any) => {

        e.preventDefault();

        if (newBook?.title === "") {

            alert("Title Is Required!");

        } else if (newBook?.description === "") {

            alert("Description Is Required!");

        } else if (newBook?.author === "") {

            alert("Author Is Required!");

        }

        try {

            const response: any = await addBook(newBook);

            if (!response) alert("Book Not Create!");

            setBooks([...books, response]);

            setNewBook({
                userId: "",
                title: "",
                description: "",
                author: "",
                createdAt: "",
                updatedAt: ""
            });

            router.refresh();

        } catch (error) {

            alert(`Error. ${error}`);

        }

    };

    const handleEdit = (book: Books) => {

        setEditBook(book);

    };

    const editBookData = async (id: string) => {

        if (!id) alert("Invalid Book ID!");

        if (editBook?.title === "") {

            alert("Title Is Required!");

        } else if (editBook?.description === "") {

            alert("Description Is Required!");

        } else if (editBook?.author === "") {

            alert("Author Is Required!");

        }

        try {

            const response: any = await editBooks(id, editBook);

            if (!response) alert("Book Not Edit!");

            setEditBook(null);

            FetchBook();

        } catch (error) {

            alert(`Error. ${error}`);

        }
    };

    const deleteBookData = async (id: string) => {

        try {

            const response: any = await deleteBook(id);

            if (!response) alert("Book Not Delete!");

            FetchBook();

        } catch (error) {

            alert(`Error. ${error}`);

        }

    };

    const handleShow = async (id: string) => {

        if (!id) alert("Invalid Book ID!");

        try {

            const response = await getBook(id);

            alert(response.title);

        } catch (error) {

            alert(`Error. ${error}`);

        }

    };

    return (
        <div className="flex flex-col justify-center items-center pt-10 pb-4">
            <div className="flex lg:flex-row flex-col gap-5 justify-center w-full mx-auto">
                <div className="sm:w-9/12 lg:w-6/12 w-full px-4 my-4 flex flex-col justify-start items-center">
                    {editBook ? (
                        <>
                            <input
                                className="w-[90%] my-2 bg-black border-2 border-zinc-400 py-2 text-xl rounded-lg outline-none px-3"
                                onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
                                placeholder="Add Title..."
                                value={editBook?.title}
                                type="text"
                            />

                            <input
                                className="w-[90%] my-2 bg-black border-2 border-zinc-400 py-2 text-xl rounded-lg outline-none px-3"
                                onChange={(e) => setEditBook({ ...editBook, description: e.target.value })}
                                placeholder="Add Description..."
                                value={editBook?.description}
                                type="text"
                            />

                            <input
                                className="w-[90%] my-2 bg-black border-2 border-zinc-400 py-2 text-xl rounded-lg outline-none px-3"
                                onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
                                placeholder="Add Author..."
                                value={editBook?.author}
                                type="text"
                            />

                            <button
                                className="rounded-lg border border-black bg-black py-2.5 font-medium text-green-500 px-5 mt-12"
                                onClick={() => editBookData(editBook?.id)}
                            >
                                Save Book
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                className="w-[90%] my-2 bg-black border-2 border-zinc-400 py-2 text-xl rounded-lg outline-none px-3"
                                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                                placeholder="Add Title..."
                                value={newBook?.title}
                                type="text"
                            />

                            <input
                                className="w-[90%] my-2 bg-black border-2 border-zinc-400 py-2 text-xl rounded-lg outline-none px-3"
                                onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                                placeholder="Add Description..."
                                value={newBook?.description}
                                type="text"
                            />

                            <input
                                className="w-[90%] my-2 bg-black border-2 border-zinc-400 py-2 text-xl rounded-lg outline-none px-3"
                                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                                placeholder="Add Author..."
                                value={newBook?.author}
                                type="text"
                            />

                            <button
                                className="rounded-lg border border-black bg-black py-2.5 font-medium text-white px-5 mt-12"
                                onClick={addBookData}
                            >
                                Add Book
                            </button>
                        </>
                    )}
                </div>

                <ul className="sm:w-9/12 lg:w-5/12 w-full px-4 flex flex-col items-center">
                    {isLoading &&
                        <p className="text-pink-600 text-2xl italic font-medium">
                            Loading...
                        </p>}

                    {!isLoading && books && books.length === 0 ? (
                        <h1 className="text-red-600 text-2xl font-medium">
                            No Book In The List
                        </h1>
                    ) : (
                        <>
                            {!isLoading && books && books.map((book: any) => (
                                <li
                                    className="bg-slate-900 px-6 py-5 rounded-lg my-3 w-full flex justify-between items-start"
                                    key={book.id}
                                >
                                    <div className="flex flex-col gap-4 text-lg">
                                        <h2 className="font-semibold">
                                            {book.title}
                                        </h2>

                                        <h2 className="font-semibold">
                                            {book.description}
                                        </h2>

                                        <h2 className="font-semibold">
                                            {book.author}
                                        </h2>
                                    </div>

                                    <div className="flex justify-end gap-4">
                                        <button
                                            className="text-cyan-400 uppercase md:text-base text-sm px-3 hover:text-cyan-600"
                                            onClick={() => handleShow(book.id)}
                                        >
                                            Show
                                        </button>

                                        <button
                                            className="text-sky-400 uppercase md:text-base text-sm px-3 hover:text-sky-600"
                                            onClick={() => handleEdit(book)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="text-pink-400 uppercase md:text-base text-sm hover:text-pink-600"
                                            onClick={() => deleteBookData(book.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Book;