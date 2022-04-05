import React from 'react'

const FeedbackStats = ({ feedback }) => {
    //calulating average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')//sets average to only one decimal place and also if it's decimal 0, it will remove the zero

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average)? 0 : average}</h4>
        </div>
  )
}

export default FeedbackStats