import classes from './CurrentOrderItem.module.css';
import React from "react";


function CurrentOrderItem(props) {


    let currentOrderId = React.createRef();
    let currentOrderName = React.createRef();
    let currentOrderType = React.createRef();
    let currentOrderEdition = React.createRef();
    let currentOrderStartDate = React.createRef();
    let currentOrderFinDate = React.createRef();
    let currentOrderComment = React.createRef();


    let compliteCurrentOrder = () => {

        let id = props.id;
        let name = props.productName;
        let editiontype = props.productType;
        let edition = props.productEdition;
        let finDate = props.productFinDate;
        let startDate = props.productStartDate;
        let comment = props.productComment;

        props.dispatch({type: 'COMPLITING-CURRENT-ORDER-DATA',
            currentOrderCommentValue: comment,
            currentOrderFinDateValue: finDate,
            currentOrderStartValue: startDate,
            currentOrderEditionValue: edition,
            currentOrderTypeValue: editiontype,
            currentOrderNameValue: name,
            currentOrderIdValue: id
        })
    }

    let delOrder = () => {
        let id = props.id;

        props.dispatch({type: 'DEL-COMPLITING-ORDER', delCurrentOrderId: id});

    }

    return (
        <div className={classes.currentOrderItem}>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemName}>
                <h2>Название</h2>
                <div ref={currentOrderName} className={classes.currentOrderItemValue}>{props.productName}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemId}>
                {/*<h2>№</h2>*/}
                <div ref={currentOrderId} className={classes.currentOrderItemValue}>{/*{props.id}*/}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemType}>
                <h2>Вид</h2>
                <div ref={currentOrderType} className={classes.currentOrderItemValue}>{props.productType}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderEdition}>
                <h2>Тираж</h2>
                <div ref={currentOrderEdition} className={classes.currentOrderItemValue}>{props.productEdition}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderStartDate}>
                <h2>Начат</h2>
                <div ref={currentOrderStartDate} className={classes.currentOrderItemValue}>{props.productStartDate}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderFinDate}>
                <h2>Закончить к</h2>
                <div ref={currentOrderFinDate} className={classes.currentOrderItemValue}>{props.productFinDate}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderComment}>
                <h2>Комментарий</h2>
                <div ref={currentOrderComment} className={classes.currentOrderItemValue + ' ' + classes.currentOrderCommentValue}>{props.productComment}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemButtonContainer}>
            <div className={classes.currentOrderItemButtonContainerItem}>
                <button onClick={compliteCurrentOrder} className={classes.currentOrderItemButton}>Завершить</button>
            </div>
            <div className={classes.currentOrderItemButtonContainerItem}>
                <button className={classes.currentOrderItemButton}>Изменить</button>
            </div>
            <div className={classes.currentOrderItemButtonContainerItem}>
                <button className={classes.currentOrderItemButton} onClick={delOrder}>Удалить</button>
            </div>
            </div>
        </div>
    )
}

export default CurrentOrderItem;