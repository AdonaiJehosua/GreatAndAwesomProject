import classes from './Footer.module.css';

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footerInformation}>
            <div className={classes.footerLinks}>
                <a className={classes.footerLink} href={'https://chkalov-tip.ru/'} target={'_blank'} rel={'noreferrer noopener nofollow'}>Типография Чкалов</a>
            </div>
            <div className={classes.footerText}>All Rights Reserved</div>
            </div>
            <a className={classes.footerScrollUp} href={'#Top'}>Наверх</a>
        </div>
    )
}

export default Footer;