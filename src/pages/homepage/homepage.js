import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../../components/card/card"
import Hero from "./hero"
import { libraryKey, fantasyBooks } from "../../utils/api"
import { Link } from "react-router-dom"
import "./homepage.scss"

const Homepage = () => {
    const [featuredBooks, setFeaturedBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${fantasyBooks}${libraryKey}`)
                const featuredBooks = response.data.items;
                setFeaturedBooks(featuredBooks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBooks();
    }, []);


    return (
        <>
            <Hero />
            <section className="featured">
                <h1>Featured Books</h1>
                <div className="card-deck">
                    {
                        featuredBooks.map(({ id, volumeInfo }) => (
                            <Card key={id}
                                image={volumeInfo.imageLinks.smallThumbnail}
                                title={volumeInfo.title}
                                author={volumeInfo.authors}
                                description={volumeInfo.description}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="call-to-action">
                <h2>Get a Book Today!</h2>
                <hr />
                <p>Why don't you take a peek at our various genres and have a splendid read?</p>
                <Link to="/collections"></Link>
            </section>
            <section className="testimonials">
                <Card />
                <Card />
                <Card />
            </section>
        </>
    )
}

export default Homepage