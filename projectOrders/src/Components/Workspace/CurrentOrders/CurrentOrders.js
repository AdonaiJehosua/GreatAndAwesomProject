import './CurrentOrders.css';
import CurrentOrderItem from "./CurrentOrderItem/CurrentOrderItem";

function CurrentOrders(props) {

    let currentOrdersArray = props.currentOrdersData
        .map((currentorder) => {
                return (
                    <CurrentOrderItem
                        dispatch={props.dispatch}
                        id={currentorder.id}
                        productName={currentorder.productName}
                        productType={currentorder.productType}
                        productEdition={currentorder.productEdition}
                        productStartDate={currentorder.productStartDate}
                        productFinDate={currentorder.productFinDate}
                        productComment={currentorder.productComment}
                        complitingCurrentOrderData={props.complitingCurrentOrderData}/>
                )
            }
        )


    return (
        <div>
            {currentOrdersArray}
        </div>
    )
}

export default CurrentOrders;


