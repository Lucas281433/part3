const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  if (message.startsWith("Information") || message.startsWith("Person")) {
    return <div className="error">{message}</div>;
  }

  return <div className="added">{message}</div>;
};

export default Notification;
