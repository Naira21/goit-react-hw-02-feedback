import PropTypes from "prop-types";
export default function Notification({ message }) {
  return <message>{message}</message>;
}

Notification.prototype = {
  message: PropTypes.string,
};
