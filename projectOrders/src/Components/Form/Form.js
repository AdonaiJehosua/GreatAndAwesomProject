import React from 'react';
import classes from './Form.module.css';
import {useNavigate} from "react-router-dom";



const Form = () => {

    const navigate = useNavigate();

    return (
        <form className={classes.form}>
            <h1 className={classes.head}>{'^_^'}</h1>
            <div className={classes.inputBox + ' ' + classes.inputEmailBox}>
                <h2 className={classes.head}>Email</h2>
                <input className={classes.input} placeholder="emale@example.com" type="email"/>
            </div>
            <div className={classes.inputBox + ' ' + classes.inputPassBox}>
                <h2 className={classes.head}>Пароль</h2>
                <input className={classes.input} placeholder="введите пароль" type="password"/>
            </div>
            <div>
                <button className={classes.button} onClick={() => navigate('/workspace')}>Войти</button>
            </div>
        </form>
    )
};

export default Form;