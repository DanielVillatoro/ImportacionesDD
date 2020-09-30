import React, { useState } from 'react';
import { useForm } from './hooks/useForm';
import axios from 'axios';

export const InventarioScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        inventario: '',
        grupo: '',
        cantidad: ''
    })
    const { inventario, grupo, cantidad } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inventario.length > 0 || grupo.length > 0 || cantidad.length > 0) {
            const dataJson = JSON.stringify(formValues);
            console.log(formValues);
            console.log(dataJson);
            // axios.post("http://localhost:9000/Customer",data)
            //     .then(response => {
            //         const datosC = response.data;
            //         // setCustomers(cust => datosC);
            //         console.log(datosC);

            //     })
            //     .catch(error => console.log(error));
            // console.log(data);
        }
    }


    const [deliveri, setCustomers] = useState([]);



    return (
        <div className="container">
            <h1>InventarioScreen</h1>
            <hr/>
            <br></br>
            <h5> Búsqueda de productos por filtros</h5>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={handleSubmit}>
                <div className="Container">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependinventario"><strong>Producto:</strong></span>
                                </div>
                                <input
                                    name='inventario'
                                    type="text"
                                    className="form-control"
                                    value={inventario}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependinventario" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependgrupo"><strong>G.pertenece:</strong></span>
                                </div>
                                <input
                                    name='grupo'
                                    type="text"
                                    className="form-control"
                                    value={grupo}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependgrupo" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependEntrega"><strong>Cantidad:</strong></span>
                                </div>
                                <input
                                    name="cantidad"
                                    type="number"
                                    className="form-control"
                                    value={cantidad}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependEntrega" />
                            </div>
                        </div>
                        <div className="form-group col-md-1">
                            <button className='btn btn-info' type="submit">Buscar</button>
                        </div>
                        <div className="form-group col-md-1">
                            <button className='btn btn-warning' onClick={reset}>Reset</button>
                        </div>
                    </div>
                </div>
            </form>
            <br></br>
            <hr></hr>
            <table className="table table-striped table-bordered dt-responsive nowrap" >
                <thead>
                    <tr>
                        <th scope="col">Tipo CC</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Fecha Vencimiento</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        deliveri.map((deliveri) => (
                            <tr>
                                <td>{deliveri.CustomerName}</td>
                                <td>{deliveri.CustomerCategoryName}</td>
                                <td>{deliveri.DeliveryMethodName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
