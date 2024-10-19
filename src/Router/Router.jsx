import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import PageToRead from "../Pages/PageToRead";
import BookDetails from "../Components/BookDetails";
import ListedBooks from "../Pages/ListedBooks";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/booksData.json')
            },
            {
                path:'/pageToRead',
                element:<PageToRead></PageToRead>,
                loader:() => fetch('/booksData.json')
            },
            {
                path:'/bookDetails/:bookId',
                element: <BookDetails></BookDetails>,
                loader:() => fetch('/booksData.json')
            },

            {
                path:'/listedBooks',
                element:<ListedBooks></ListedBooks>,
                loader:() => fetch('/booksData.json')
            }
            ]
    }
]) 