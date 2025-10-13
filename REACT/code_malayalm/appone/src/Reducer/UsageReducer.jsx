function UsageReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value + 1,
      }

    case 'decrement':
      return {
        ...state,
        value: state.value - 1,
      }

    case 'green':
      return {
        ...state,
        color: 'green',
      }

    case 'blue':
      return {
        ...state,
        color: 'blue',
      }

    default:
      return state
  }
}

export default UsageReducer
