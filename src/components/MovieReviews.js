// Code MovieReviews Here
import React from 'react'

const MovieReviews = function (props){
    debugger
    let moviesList = props.reviews.map(review => {
    return(
    <div className="review">
        <strong>{review["display_title"]}</strong>
        <br></br>
        {review["summary_short"]}
        <br></br><br></br>
        </div>)})
    return(
    <div className="review-list">{moviesList}</div>)}

export default MovieReviews