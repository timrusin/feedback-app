import PropTypes from 'prop-types' //impt

const Header = ( {text} ) => {
  return (
    <header>
      <h2>{text}</h2>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header