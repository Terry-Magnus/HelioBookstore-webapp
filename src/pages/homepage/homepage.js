import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../../components/card/card"
import Hero from "./hero"
import { reviews, API_URL } from "../../utils/api"
import { Link } from "react-router-dom"
import "./homepage.scss"

const Homepage = () => {
    const [featuredBooks, setFeaturedBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const maxResults = 10
            try {
                const response = await axios.get(API_URL, {
                    params: {
                        q: "popular + books",
                        printType: "books",
                        orderBy: "relevance",
                        maxResults: maxResults
                    }
                })//fetch books from api
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
                        featuredBooks.map(({ id, volumeInfo }) => (//get volumeInfo and id from api
                            <Card key={id}
                                image={volumeInfo.imageLinks}
                                title={volumeInfo.title}
                                author={volumeInfo.authors}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="call-to-action">
                <h2>Get a Book Today!</h2>
                <hr />
                <p>Why don't you take a peek at our various genres and have a splendid read?</p>
                <button><Link to="/collections">See collections</Link></button>
            </section>
            <section className="reviews">
                {
                    reviews.map((review, index) => {
                        return (
                            <div className="review" key={index}>
                                <div className="review-head">
                                    <img src={review.img} alt={review.name} />
                                    <div>
                                        <h3>{review.name}</h3>
                                        <p>stars</p>
                                    </div>
                                </div>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Homepage