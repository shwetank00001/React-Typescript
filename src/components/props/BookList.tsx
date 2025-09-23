import { useState } from 'react'
import {books} from './Books.js'

const BookList = () => {

    const [bookDisp, setBooks] = useState(books);
    console.log(bookDisp);

  return (
    <div>
        <p></p>
    </div>
  )
}

export default BookList