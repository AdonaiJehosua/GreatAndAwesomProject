import React from "react";
import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Form from "./Components/Form/Form";
import Header from "./Components/Workspace/Header/Header";
import Footer from "./Components/Workspace/Footer/Footer";
import CurrentOrders from "./Components/Workspace/CurrentOrders/CurrentOrders";
import CompliteOrders from "./Components/Workspace/CompliteOrders/CompliteOrders";
import NewOrder from "./Components/Workspace/NewOrder/NewOrder";
import Workspace from "./Components/Workspace/Workspace";


function App(props) {


    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Form/>}/>
                    <Route path='/workspace' element={<Layout/>}>
                        <Route index element={<Workspace/>}/>

                        <Route path={'neworder'} element={<NewOrder
                            dispatch={props.dispatch}/>}/>
                        <Route path={'currentorders'} element={<CurrentOrders
                            currentOrders={props.state}
                            currentOrdersData={props.state.currentOrdersData}
                            dispatch={props.dispatch}/>}/>
                        <Route path={'compliteorders'} element={<CompliteOrders
                            compliteOrders={props.state}
                            compliteOrdersData={props.state.compliteOrdersData}
                            dispatch={props.dispatch}/>}/>

                    </Route>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

function Layout() {
    return (
        <div className="layoutDiv">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
