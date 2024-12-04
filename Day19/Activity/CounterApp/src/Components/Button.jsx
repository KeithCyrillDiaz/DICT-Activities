import PropTypes from "prop-types"

const Buttons = ({onIncrement, onDecrement}) => {
    return (
     <div>
         <button onClick={onIncrement}>Increment</button>
         <button onClick={onDecrement}>Decrement</button>
     </div>
    )
}

Buttons.propTypes = {
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
}

export default Buttons