import classes from './NewOrder.module.css';
import React from "react";

function NewOrder(props) {

    let newOrderComment = React.createRef();
    let newOrderFinDate = React.createRef();
    let newOrderEdition = React.createRef();
    let newOrderType = React.createRef();
    let newOrderName = React.createRef();

    let getNewOrderDataByClick = () => {

        props.dispatch({type: 'ADD-NEW-ORDER', });
    }

    let onNameChange = () => {
        let OrderName = newOrderName.current.value;
        props.dispatch({type: 'UPDATE-NEW-ORDER-NAME-VALUE', writingOrderNameValue: OrderName});
    }

    let onTypeChange = () => {
        let OrderType = newOrderType.current.value;
        props.dispatch({type: 'UPDATE-NEW-ORDER-TYPE-VALUE', writingOrderTypeValue: OrderType});
    }

    let onEditionChange = () => {
        let OrderEdition = newOrderEdition.current.value;
        props.dispatch({type: 'UPDATE-NEW-ORDER-EDITION-VALUE', writingOrderEditionValue: OrderEdition});
    }

    let onFinDateChange = () => {
        let OrderFinDate = newOrderFinDate.current.value;
        props.dispatch({type: 'UPDATE-NEW-ORDER-FIN-DATE-VALUE', writingOrderFinDateValue: OrderFinDate});
    }

    let onCommentChange = () => {
        let OrderComment = newOrderComment.current.value;
        props.dispatch({type: 'UPDATE-NEW-ORDER-COMMENT-VALUE', writingOrderCommentValue: OrderComment});
    }

    const handleClick = (e) => {
        e.preventDefault();
        getNewOrderDataByClick();
    }

    return (

            <form className={classes.newOrderForm}>
                <div className={classes.newOrderTitle + ' ' + classes.formItem}>
                    <h1>НОВЫЙ ЗАКАЗ</h1>
                </div>
                    <div className={classes.newOrderName + ' ' + classes.formItem}>
                        <h2>Название</h2>
                        <input onChange={onNameChange}
                               value={props.newOrderNameValue}
                               ref={newOrderName}
                               className={classes.newOrderNameInput}
                               placeholder="Введите название изделия"/>
                    </div>
                <div className={classes.newOrderType + ' ' + classes.formItem}>
                    <h2>Вид продукции</h2>
                    <select onChange={onTypeChange} ref={newOrderType} value={props.newOrderTypeValue}>
                        <option>Книга</option>
                        <option>Буклет</option>
                        <option>Брошюра</option>
                        <option>Журнал</option>
                        <option>Листовка</option>
                        <option>Визитка</option>
                        <option>Бланк</option>
                        <option>Календарь</option>
                        <option>Еще что-нибудь</option>
                    </select>
                </div>
                <div className={classes.newOrderEdition + ' ' + classes.formItem}>
                    <h2>Тираж</h2>
                    <input onChange={onEditionChange} ref={newOrderEdition} placeholder="Укажите тираж" value={props.newOrderEditionValue}/>
                </div>
                <div className={classes.newOrderFinDate + ' ' + classes.formItem}>
                    <h2>Дата завершения заказа</h2>
                    <input onChange={onFinDateChange} ref={newOrderFinDate} type="date" placeholder="Укажите дату завершения заказа" value={props.newOrderFinDateValue}/>
                </div>
                <div className={classes.newOrderComment + ' ' + classes.formItem}>
                    <h2>Комментарий</h2>
                    <textarea onChange={onCommentChange} ref={newOrderComment} type="text" placeholder="Введите комментарий к заказу" value={props.newOrderCommentValue}/></div>

                <div className={classes.formItem + ' ' + classes.newOrderButtonContainer}><button onClick={handleClick} className={classes.newOrderButton}>В работу</button></div>
            </form>
    )

}

export default NewOrder;
