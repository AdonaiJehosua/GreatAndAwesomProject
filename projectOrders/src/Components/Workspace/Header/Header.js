import classes from './Header.module.css';
import Options from "./Options/Options";
import Profile from "./Profile/Profile";

function Header() {
    return (
        <div className={classes.header} id={'Top'}>
            <Options />
            <Profile />
        </div>
    )
}

export default Header;