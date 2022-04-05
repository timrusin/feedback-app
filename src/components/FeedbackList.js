import React from 'react'

const FeedbackList = ( {feedback} ) => {
    if(!feedback || feedback.length===0) {
        return <p>no feedback yet</p>
    }
  return (
    <div>FeedbackList</div>
  )
}

export default FeedbackList
