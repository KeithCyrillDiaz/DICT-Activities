
const Buttons = ({onIncrement, onDecrement}) => {
    return (
     <div className="buttonsContainer">
         <button className='increment' onClick={onIncrement}>Increment</button>
         <button className='decrement' onClick={onDecrement}>Decrement</button>
     </div>
    )
}


export default Buttons