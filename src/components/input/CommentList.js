import classes from './CommentList.module.css';

function CommentList(props) {
  const {items} = props;
  return (
    <ul className={classes.comments}>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.commentMessage}</p>
          <div>
            By <address>{item.userName}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;