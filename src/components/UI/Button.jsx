import Link from "next/link";
import classes from './button.module.css';

function Button(props) {
    return (
        props.link ? (
            <Link href={props.link} legacyBehavior>
              <a className={classes.btn}>{props.children}</a>
            </Link>
        ) : (
            <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
        )
    );
}

export default Button;