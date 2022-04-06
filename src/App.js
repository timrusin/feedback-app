import { useState, useId } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
 const [feedback, setFeedback]=useState (FeedbackData)

 const id = useId()

 const addFeedback = (newFeedback) => {
    newFeedback.id = id
    setFeedback([newFeedback, ...feedback])//this is adding the newFeedback as well as spreading out all of the previous feedback in an array
 }

 const deleteFeedback = (id) => {
   if(window.confirm('Are you sure you want to delete?')){
    setFeedback(feedback.filter((item)=> item.id !== id))//this will return all but the one we want to delete
   }
 }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App