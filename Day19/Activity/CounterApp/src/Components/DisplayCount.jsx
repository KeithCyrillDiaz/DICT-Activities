import PropTypes from 'prop-types'
const DisplayCount = ({count}) => {
  return (
    <div>
      Count: {count}
    </div>
  )
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired,
}

export default DisplayCount
