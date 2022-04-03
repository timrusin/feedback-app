import { useState } from "react";

const FeedbackItem = () => {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of feedback item')

  const handleClick = () => {
    setRating((prev)=> {//cool way to change state with 'prev'
      console.log(prev)
      return prev - 10
    })
  }
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem