import classes from './ErrorMessage.module.css';

function ErrorMessage(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorMessage;