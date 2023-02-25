import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}
Header.defaultProps = {
    title : "React Default Prop"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header