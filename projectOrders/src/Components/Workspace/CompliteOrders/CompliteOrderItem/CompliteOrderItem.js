import classes from './CompliteOrderItem.module.css';
import React from "react";

function CompliteOrderItem(props) {

    let compliteOrderIdValue = React.createRef();
    let compliteOrderNameValue = React.createRef();
    let compliteOrderTypeValue = React.createRef();
    let compliteOrderEditionValue = React.createRef();
    let compliteOrderStartValue = React.createRef();
    let compliteOrderFinDateValue = React.createRef();
    let compliteOrderCommentValue = React.createRef();

    let returnCompliteOrder = () => {

        let id = props.id;
        let name = props.productName;
        let editiontype = props.productType;
        let edition = props.productEdition;
        let finDate = props.productFinDate;
        let startDate = props.productStartDate;
        let comment = props.productComment;

        props.dispatch({type: 'RETURN-COMPLITE-ORDER-DATA',
            compliteOrderIdValue: id,
            compliteOrderNameValue: name,
            compliteOrderTypeValue: editiontype,
            compliteOrderEditionValue: edition,
            compliteOrderStartValue: startDate,
            compliteOrderFinDateValue: finDate,
            compliteOrderCommentValue: comment
        })
    }

    return (
        <div className={classes.currentOrderItem}>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemName}>
                <h2>Название</h2>
                <div ref={compliteOrderNameValue} className={classes.currentOrderItemValue}>{props.productName}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemId}>
                {/*<h2>№</h2>*/}
                <div ref={compliteOrderIdValue} className={classes.currentOrderItemValue}>{/*{props.id}*/}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemType}>
                <h2>Вид</h2>
                <div ref={compliteOrderTypeValue} className={classes.currentOrderItemValue}>{props.productType}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderEdition}>
                <h2>Тираж</h2>
                <div ref={compliteOrderEditionValue} className={classes.currentOrderItemValue}>{props.productEdition}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderStartDate}>
                <h2>Был начат</h2>
                <div ref={compliteOrderStartValue} className={classes.currentOrderItemValue}>{props.productStartDate}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderFinDate}>
                <h2>Закончен</h2>
                <div ref={compliteOrderFinDateValue} className={classes.currentOrderItemValue}>{props.productFinDate}</div>
            </div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderComment}>
                <h2>Комментарий</h2>
                <div ref={compliteOrderCommentValue}
                     className={classes.currentOrderItemValue + ' ' + classes.currentOrderCommentValue}>{props.productComment}</div></div>
            <div className={classes.currentOrderItemPart + ' ' + classes.currentOrderItemButtonContainer}>
                <div className={classes.currentOrderItemButtonContainerItem}>
                    <button onClick={returnCompliteOrder} className={classes.compliteOrderItemButton}>Вернуть в текущие</button>
                </div>
                <div className={classes.currentOrderItemButtonContainerItem}>
                    <button className={classes.compliteOrderItemButton}>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default CompliteOrderItem;