import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = "1AbQiXiVsekJ1Ah36DA9f72RDxNJcE10"
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    updateSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}
        `)
        .then(resp => resp.json())
        .then(response => this.setState({ reviews: response["results"].map(review => {
            let value = []
            value["display_title"] = review["display_title"]
            value["summary_short"] = review["summary_short"]
            // debugger
            return value
        })   
    }))

    }


    render() {
        let current = this 
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={(e) => current.handleSubmit(e)}>
                    <input onChange={this.updateSearchTerm} name="searchTerm" type="text" value={this.state.searchTerm}></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer