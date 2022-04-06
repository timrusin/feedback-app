import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ( {feedback, handleDelete} ) => {
    if(!feedback || feedback.length===0) {
        return <p>no feedback yet</p>
    }
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div 
            key={item.id}
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0}}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  //version withought animation
  // return (
  //   <div className="feedback-list"> 
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(//we could hacve also just left this as Array, but this gets more specific
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList
