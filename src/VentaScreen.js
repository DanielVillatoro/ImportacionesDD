import React, { useState } from 'react';
import { useForm } from './hooks/useForm';
import axios from 'axios';


export const VentaScreen = () => {


    const [formValues, handleInputChange, reset] = useForm({
        numFactura: '',
        cliente: '',
        entrega: '',
        fecha1: '',
        fecha2: '',
        montoMinimo: '',
        montoMaximo: ''
    })
    const { numFactura, cliente, entrega, fecha1, fecha2, montoMinimo, montoMaximo } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (numFactura.length > 0 || cliente.length > 0 || entrega.length > 0 || (fecha1.length > 0 && fecha2.length > 0) || (montoMinimo.length > 0 && montoMaximo.length > 0)) {
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

    const getDatos = (id, e) => {
        e.preventDefault();
        console.log(id);
    }

    return (
        <div className="container">
            <h1>VentasScreen</h1>
            <hr />
            <br></br>
            <h5> Búsqueda de ventas por filtros</h5>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={handleSubmit}>
                <div className="Container">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependnumF"><strong>Del:</strong></span>
                                </div>
                                <input
                                    name='fecha1'
                                    type="date"
                                    className="form-control"
                                    value={fecha1}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependnumF" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependcliente"><strong>Al:</strong></span>
                                </div>
                                <input
                                    name='fecha2'
                                    type="date"
                                    className="form-control"
                                    value={fecha2}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependcliente" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependEntrega"><strong>Monto Minimo:</strong></span>
                                </div>
                                <input
                                    name="montoMinimo"
                                    type="number"
                                    className="form-control"
                                    value={montoMinimo}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependEntrega" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependEntrega"><strong>Monto Máximo:</strong></span>
                                </div>
                                <input
                                    name="montoMaximo"
                                    type="number"
                                    className="form-control"
                                    value={montoMaximo}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependEntrega" />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependnumF"><strong>#Factura:</strong></span>
                                </div>
                                <input
                                    name='numFactura'
                                    type="number"
                                    className="form-control"
                                    value={numFactura}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependnumF" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependcliente"><strong>Cliente:</strong></span>
                                </div>
                                <input
                                    name='cliente'
                                    type="text"
                                    className="form-control"
                                    value={cliente}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependcliente" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependEntrega"><strong>Método de entrega:</strong></span>
                                </div>
                                <input
                                    name="entrega"
                                    type="text"
                                    className="form-control"
                                    value={entrega}
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
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        deliveri.map((deliveri) => (
                            <tr>
                                <td>{deliveri.CustomerName}</td>
                                <td>{deliveri.CustomerCategoryName}</td>
                                <td>{deliveri.DeliveryMethodName}</td>
                            </tr>
                        ))
                    } */}
                    <tr>
                        <td>Daniel</td>
                        <td>Presidente</td>
                        <td>2/2/2020</td>
                        <td>1000</td>
                        <td><center><button id="1" className="btn btn-primary" onClick={(e) => getDatos(1, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
