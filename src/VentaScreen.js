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
    const [Selles, setSell] = useState([]);
    const [datos, setDatos] = useState([]);
    
    const nombre=null;
    const fecha=null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formValues));
        if (numFactura.length > 0 || cliente.length > 0 || entrega.length > 0 || (fecha1.length > 0 && fecha2.length > 0) || (montoMinimo.length > 0 && montoMaximo.length > 0)) {
            axios.post("http://localhost:9000/Ventas", formValues)
                .then(response => {
                    const datosD = response.data;
                    setSell(a => datosD);

                })
                .catch(error => console.log(error));
        }
    }
    const getDatos = (id, e) => {
        console.log(id);
        e.preventDefault();
        id = {
            "id": id
        }
        axios.post("http://localhost:9000/VentasDetalle/", id)
            .then(response => {
                const datosC = response.data;
                console.log(c=>datosC);
                setDatos(c => datosC);

            })
            .catch(error => console.log(error));
    }

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
            <table className="table dt-responsive nowrap table-hover" >
                <thead>
                    <tr>
                        <th scope="col"># Factura</th>
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Método de entrega</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Selles.map((sell) => (
                            <tr>
                                <td>{sell.OrderID}</td>
                                <td>{sell.CustomerName}</td>
                                <td>{sell.DeliveryMethodName}</td>
                                <td>{sell.OrderDate}</td>
                                <td>{currencyFormat(sell.totalLine)}</td>
                                <td key={sell.OrderID}><center><button className="btn btn-primary" onClick={(e) => getDatos(sell.OrderID, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Factura: </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">






                            <div className="invoice-box">
                                <table cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr className="top">
                                            <td colSpan="2">
                                                <table><tbody>Nombre de Cliente
                                                <tr>
                                                        <td className="title">
                                                            {
                                                                datos.slice(0, 1).map((data) => (
                                                                    <h4>{data.CustomerName}</h4>
                                                                ))

                                                                // console.log(pos0)
                                                                // pos0
                                                                
                                                            }

                                                        </td>
                                                        {
                                                            datos.slice(0, 1).map((data) => (
                                                                <td>
                                                                    # factura: {data.OrderID}<br />
                                                                Número de orden: {data.CustomerPurchaseOrderNumber}<br />
                                                                    Fecha:{data.OrderDate} 
                                                                </td>
                                                            ))
                                                        }
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                        <tr className="information">
                                            <td colSpan="2">
                                                <table>
                                                    <tbody>
                                                        {
                                                    datos.slice(0, 1).map((data) => (
                                                        <tr>
                                                            <td>
                                                            Método Entrega: {data.DeliveryMethodName}<br />
                                                            Instrucciones de entrega: {data.DeliveryInstructions}<br />
                            </td>

                                                            <td>
                                                            Nombre del vendedor: {data.Contact1}<br />
                                                            Persona de contacto: {data.Contact1}<br />
                            </td>
                                                        </tr>
                                                        ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr className="heading">
                                            <td>
                                                Payment Method
                </td>

                                            <td>
                                                Check #
                </td>
                                        </tr>

                                        <tr className="details">
                                            <td>
                                                Check
                </td>

                                            <td>
                                                1000
                </td>
                                        </tr>

                                        <tr className="heading">
                                            <td>
                                                Item
                </td>

                                            <td>
                                                Price
                </td>
                                        </tr>

                                        <tr className="item">
                                            <td>
                                                Website design
                </td>

                                            <td>
                                                $300.00
                </td>
                                        </tr>

                                        <tr className="item">
                                            <td>
                                                Hosting (3 months)
                </td>

                                            <td>
                                                $75.00
                </td>
                                        </tr>

                                        <tr className="item last">
                                            <td>
                                                Domain name (1 year)
                </td>

                                            <td>
                                                $10.00
                </td>
                                        </tr>

                                        <tr className="total">
                                            <td></td>

                                            <td>
                                                Total: $385.00
                </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>




                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
