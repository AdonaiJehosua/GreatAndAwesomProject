import './CompliteOrders.css';
import CompliteOrderItem from "./CompliteOrderItem/CompliteOrderItem";

function CompliteOrders(props) {
    let CompliteOrdersArray = props.compliteOrdersData
        .map((compliteorder) => {
            return (
                <CompliteOrderItem
                    dispatch={props.dispatch}
                    id={compliteorder.id}
                    productName={compliteorder.productName}
                    productType={compliteorder.productType}
                    productEdition={compliteorder.productEdition}
                    productStartDate={compliteorder.productStartDate}
                    productRealyFinDate={compliteorder.productRealyFinDate}
                    productFinDate={compliteorder.productFinDate}
                    productComment={compliteorder.productComment}/>
            )
        })

    return (
        <div>
            {CompliteOrdersArray}
        </div>

    )
}

export default CompliteOrders;