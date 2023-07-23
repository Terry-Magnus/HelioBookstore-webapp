import axios from "axios"
import { useEffect, useState } from "react"
import { genres, API_URL } from "../../utils/api";

const Collections = () => {
    const [books, setBooks] = useState([])

    // const getBooksByGenre = async (genres) => { //get books by selected genre

    // }


    // useEffect(() => {
    //     getBooksByGenre(genres)
    // }, [])

    return (
        <>
            <div>
                <h1>Books by Category</h1>

                {/* {
                    genres.map((genre) => {
                        return (
                            <div key={genre}>
                                <h2>{genre.toUpperCase()}</h2>
                            </div>
                        )
                    })
                } */}
            </div>
        </>
    )
}

export default Collections