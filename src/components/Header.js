import PropTypes from 'prop-types';
import Button from "./Button"

const Header = ({title}) => {
  return (
    <div className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add'/>
    </div>
  )
}
Header.defaultProps = {
    title : "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header