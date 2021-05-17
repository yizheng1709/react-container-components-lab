import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = "1AbQiXiVsekJ1Ah36DA9f72RDxNJcE10"
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        // let key = "1AbQiXiVsekJ1Ah36DA9f72RDxNJcE10"
        // debugger
        fetch(URL)
        .then(res => res.json())
        .then(response => this.setState({ reviews: response["results"].map(review => {
            let value = []
            value["display_title"] = review["display_title"]
            value["summary_short"] = review["summary_short"]
            // debugger
            return value
        })   
    }))
    // {debugger}
        // .then(resp => console.log(resp["results"]))
        // .then(resp => {debugger})
    }

    render() {
        // debugger
        return(
            <div className="latest-movie-reviews">
                {/* {this.state.reviews} */}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer