import {v4 as uuidv4} from "uuid";

let store = {
    _state: {
        newOrderNameValue: '',
        newOrderTypeValue: '',
        newOrderEditionValue: '',
        newOrderFinDateValue: '',
        newOrderCommentValue: '',
        currentOrdersData: [],
        compliteOrdersData: []
    },
    _callSubscriber() {
        console.log('State was change');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    // updateNewOrderNameValue(writingOrderNameValue) {
    //     this._state.newOrderNameValue = writingOrderNameValue;
    //     this._callSubscriber(this._state);
    // },
    // updateNewOrderTypeValue(writingOrderTypeValue) {
    //     this._state.newOrderTypeValue = writingOrderTypeValue;
    //     this._callSubscriber(this._state);
    // },
    // updateNewOrderEditionValue(writingOrderEditionValue) {
    //     this._state.newOrderEditionValue = writingOrderEditionValue;
    //     this._callSubscriber(this._state);
    // },
    // updateNewOrderFinDateValue(writingOrderFinDateValue) {
    //     this._state.newOrderFinDateValue = writingOrderFinDateValue;
    //     this._callSubscriber(this._state);
    // },
    // updateNewOrderCommentValue(writingOrderCommentValue) {
    //     this._state.newOrderCommentValue = writingOrderCommentValue;
    //     this._callSubscriber(this._state);
    // },
    // addNewOrder() {
    //
    //     let newOrder = {
    //         id: uuidv4(),
    //         productName: this._state.newOrderNameValue,
    //         productType: this._state.newOrderTypeValue,
    //         productEdition: this._state.newOrderEditionValue,
    //         productStartDate: new Date().toLocaleDateString(),
    //         productFinDate: this._state.newOrderFinDateValue,
    //         productComment: this._state.newOrderCommentValue
    //     };
    //     this._state.currentOrdersData.push(newOrder);
    //     this._state.newOrderNameValue = '';
    //     this._state.newOrderTypeValue = '';
    //     this._state.newOrderEditionValue = '';
    //     this._state.newOrderFinDateValue = '';
    //     this._state.newOrderCommentValue = '';
    //     this._callSubscriber(this._state);
    //
    //
    // },
    // complitingCurrentOrderData(){
    //
    //     let compliteOrder = {
    //         id: this._state.currentOrderId,
    //         productName: this._state.currentOrderName,
    //         productType: this._state.currentOrderType,
    //         productEdition: this._state.currentOrderEdition,
    //         productStartDate: this._state.currentOrderStartDate,
    //         productRealyFinDate: new Date().toLocaleDateString(),
    //         productFinDate: this._state.currentOrderFinDate,
    //         productComment: this._state.currentOrderComment
    //     };
    //     this._state.compliteOrdersData.unshift(compliteOrder);
    //     this._callSubscriber(this._state);
    //
    // },


    dispatch(action) {
        if (action.type === 'ADD-NEW-ORDER') {

            let newOrder = {
                id: uuidv4(),
                productName: this._state.newOrderNameValue,
                productType: this._state.newOrderTypeValue,
                productEdition: this._state.newOrderEditionValue,
                productStartDate: new Date().toLocaleDateString(),
                productFinDate: this._state.newOrderFinDateValue,
                productComment: this._state.newOrderCommentValue
            };
            this._state.currentOrdersData.unshift(newOrder);
            this._state.newOrderNameValue = '';
            this._state.newOrderTypeValue = '';
            this._state.newOrderEditionValue = '';
            this._state.newOrderFinDateValue = '';
            this._state.newOrderCommentValue = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'COMPLITING-CURRENT-ORDER-DATA') {
            let compliteOrder = {
                id: this._state.currentOrderId = action.currentOrderIdValue,
                productName: this._state.currentOrderName = action.currentOrderNameValue,
                productType: this._state.currentOrderType = action.currentOrderTypeValue,
                productEdition: this._state.currentOrderEdition = action.currentOrderEditionValue,
                productStartDate: this._state.currentOrderStartDate = action.currentOrderStartValue,
                productRealyFinDate: new Date().toLocaleDateString(),
                productFinDate: this._state.currentOrderFinDate = action.currentOrderFinDateValue,
                productComment: this._state.currentOrderComment = action.currentOrderCommentValue
            };
            this._state.compliteOrdersData.unshift(compliteOrder);
            this._callSubscriber(this._state);
            let searchName = this._state.currentOrdersData.id = action.currentOrderIdValue;
            let indexDelCurrentOrder = this._state.currentOrdersData.findIndex(el => el.id === searchName);
            this._state.currentOrdersData.splice(indexDelCurrentOrder, 1);


        } else if (action.type === 'UPDATE-NEW-ORDER-NAME-VALUE') {
            this._state.newOrderNameValue = action.writingOrderNameValue;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-ORDER-TYPE-VALUE') {
            this._state.newOrderTypeValue = action.writingOrderTypeValue;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-ORDER-EDITION-VALUE') {
            this._state.newOrderEditionValue = action.writingOrderEditionValue;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-ORDER-FIN-DATE-VALUE') {
            this._state.newOrderFinDateValue = action.writingOrderFinDateValue;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-ORDER-COMMENT-VALUE') {
            this._state.newOrderCommentValue = action.writingOrderCommentValue;
            this._callSubscriber(this._state);
        } else if (action.type === 'DEL-COMPLITING-ORDER') {
            let searchName = this._state.id = action.delCurrentOrderId;
            let indexDelCurrentOrder = this._state.currentOrdersData.findIndex(el => el.id === searchName);
            this._state.currentOrdersData.splice(indexDelCurrentOrder, 1);
            this._callSubscriber(this._state);
        } else if (action.type === 'RETURN-COMPLITE-ORDER-DATA') {
            let returnComplitOrder = {
                id: this._state.currentOrderId = action.compliteOrderIdValue,
                productName: this._state.currentOrderName = action.compliteOrderNameValue,
                productType: this._state.currentOrderType = action.compliteOrderTypeValue,
                productEdition: this._state.currentOrderEdition = action.compliteOrderEditionValue,
                productStartDate: this._state.currentOrderStartDate = action.compliteOrderStartValue,
                productFinDate: this._state.currentOrderFinDate = action.compliteOrderFinDateValue,
                productComment: this._state.currentOrderComment = action.compliteOrderCommentValue
            };
            this._state.currentOrdersData.unshift(returnComplitOrder);
            this._callSubscriber(this._state);
            let searchName = this._state.compliteOrdersData.id = action.compliteOrderIdValue;
            let indexDelCompliteOrder = this._state.compliteOrdersData.findIndex(el => el.id === searchName);
            this._state.compliteOrdersData.splice(indexDelCompliteOrder, 1);


        }

    }
}


// state.currentOrdersData.splice(deleteOrder);

export default store;

window.store = store;

