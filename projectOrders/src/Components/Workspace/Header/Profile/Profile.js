import classes from './Profile.module.css';
import {Link} from "react-router-dom";
import HiddenProfileName from "./HiddenPrifileName/HiddenProfileName";

function Profile() {
    return (
        <div className={classes.profile}>
            {/*<button className={classes.profileButton} onClick={HiddenProfileName}>Name</button>*/}
            <div className={classes.profileName}></div>
            <Link to={'/'} className={classes.profileLink}>Выйти</Link>
        </div>
    )
}

export default Profile;