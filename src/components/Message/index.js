// Write your code here

const Message = props => {
  const {status} = props
  if (status === false) {
    return 'Welcome User'
  }

  return 'Please Login'
}

export default Message
