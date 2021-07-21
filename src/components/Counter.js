import PropTypes from 'prop-types';

const Counter = props => {
    const { value, onIncrement, onDecrement } = props
    return (
        <div>
            <p>{value}</p>
            <br />
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}

Counter.propTypes = {
    value : PropTypes.element.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter;