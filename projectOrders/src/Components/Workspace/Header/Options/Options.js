import classes from './Options.module.css';
import {
    Link,
    useMatch, useNavigate,
    useResolvedPath
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import React from "react";


function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "" : "#ffffff"}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

function Options() {

    // const navigate = useNavigate();

        return (
            <div className={classes.options}>
                <div className={classes.optionsLinkBox}>
                    <CustomLink to={'neworder'} className={classes.optionsLink}>Новый</CustomLink>
                </div>
                <div className={classes.optionsLinkBox}>
                <CustomLink to={'currentorders'} className={classes.optionsLink}>Текущие</CustomLink>
                </div>
                <div className={classes.optionsLinkBox}>
                <CustomLink to={'compliteorders'} className={classes.optionsLink}>Выполненные</CustomLink>
                </div>
                {/*<button onClick={() => navigate('/neworder')}>Новый заказ</button>*/}
                {/*<button onClick={() => navigate('/currentorders')}>Список заказов</button>*/}
                {/*<button onClick={() => navigate('/compliteorders')}>Завершенные заказы</button>*/}
            </div>
        )

}

export default Options;
