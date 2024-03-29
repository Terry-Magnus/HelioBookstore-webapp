import { useEffect, useState } from "react"
import banner from "../../assets/images/reading.svg"
import BookCard from "../../components/bookcard/bookcard"
import "./homepage.scss"

const Homepage = () => {
    const [featuredBooks, setFeaturedBooks] = useState([])

    const getFeaturedBooks = async () => {
        const response = await fetch("https://example-data.draftbit.com/books?_limit=8")
        const results = await response.json()
        setFeaturedBooks(results)
    }

    useEffect(() => {
        getFeaturedBooks()
    }, [featuredBooks])

    return (
        <>
            <section className="hero">
                <div className="hero-text">
                    <i>Welcome to Helio Bookstore</i>
                    <h1>Books are uniquely portable magic</h1>
                    <p> "Discover your next great read at our online bookstore.<br />
                        Browse our collection today and find your next literary adventure!"
                    </p>
                </div>
                <div className="hero-banner">
                    <img src={banner} alt="hero-banner" />
                </div>
            </section>
            <section className="featured">
                <h1>Featured Books</h1>
                <div className="card-deck">
                    {featuredBooks.map((book, index) => {
                        return <BookCard key={index}
                            title={book.title}
                            author={book.authors}
                            image={book.image_url}
                            description={book.description}
                            genre={book.genre}
                            rating={book.rating}
                        />
                    })}
                </div>
            </section>
            <section className="call-to-action">
                <h2>Get a Book Today!</h2>
                <hr />
                <p>Why don't you take a peek at our various genres and have a splendid read?</p>
            </section>
            <section className="reviews">
                <h4>No reviews available at this time</h4>

            </section>
        </>
    )
}

export default Homepage