import Card from "./shared/Card";
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

const FeedbackItem = ( {item} ) => {

  const handleClick = (id) => {
    console.log(id)
  }

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={()=>handleClick(item.id)}color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem