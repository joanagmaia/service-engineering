import "./notification.css";

type PropTypes = {
  text: string;
};

const Notification = ({ text }: PropTypes) => {
  return <div className="notification">{text}</div>;
};

export default Notification;
