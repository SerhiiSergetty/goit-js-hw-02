function formatMessage(message, maxLength) {
  if (message.length <= maxLength) return message;
  else {
    const shortenedMessage = message.slice(0, maxLength) + "...";
    return shortenedMessage;
  }
}
