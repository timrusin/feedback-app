import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
 const [feedback, setFeedback]=useState (FeedbackData)
 const deleteFeedback = (id) => {
   if(window.confirm('Are you sure you want to delete?')){
    setFeedback(feedback.filter((item)=> item.id !== id))//this will return all but the one we want to delete
   }
 }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App