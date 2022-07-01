import "./main.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
    const [listOfCar, setListOfCar] = useState([]);
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:3001/.getCar").then((response) => {
            setListOfCar(response.data);
        });
    }, []);

    const addCar = () => {
        Axios.post("http://localhost:3001/addCar", {
            name: name,
            detail: detail,
            price: price,
        }).then((response) => {
            setListOfCar([
                ...listOfCar,
                {
                    name: name,
                    detail: detail,
                    price: price,
                },
            ]);
        });
    };

    return (
        <div className="container">
            <div className="heading">
                <h2>Automobile Company</h2>
            </div>

            <div className="textFields">
                <div className="inputField">
                    <label>Name: </label>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>

                <div className="inputField">
                    <label>Details: </label>
                    <input
                        type="text"
                        placeholder="Details"
                        onChange={(event) => {
                            setDetail(event.target.value);
                        }}
                    />
                </div>

                <div className="inputField">
                    <label>Price: </label>
                    <input
                        type="number"
                        placeholder="Price"
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                    />
                </div>

                <button className="btn" onClick={addCar}> Add Car </button>

                <div className="carDisplay">
                    {listOfCar.map((car) => {
                        return (
                            <div>
                                <h3>Name: {car.name}</h3>
                                <h3>Detail: {car.detail}</h3>
                                <h3>Price: {car.price}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;