import PropTypes from 'prop-types' //impt

const Header = ( {text, bgColor, textColor} ) => {

  const headerStyles = { //another way fo doing in-line styles, passed in with single {} in header bellow, would need double {{}} if doing actual in-line
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <h2>{text}</h2>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string.isRequired //like typescript and wouldnt be needed if using typescript
}

export default Header