import PropTypes from 'prop-types';
import Button from "./Button"

const Header = ({title, onAdd, showbtn}) => {
  return (
    <div className='header'>
        <h1>{title}</h1>
        <Button color={showbtn ? "red": "green"} text={showbtn ? "Close" : "Add"} onClick={onAdd}/>
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