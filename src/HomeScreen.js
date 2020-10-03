import React, { useState } from 'react';
import { useForm } from './hooks/useForm';
import axios from 'axios';

export const HomeScreen = () => {

    // ----------------------------------------------------------------------------1-------------------------------------------------------
    const [formValues1, handleInputChange1, reset1] = useForm({
        proveedor01: ''
    })

    const { proveedor01 } = formValues1;

    const [dato1, setDato1] = useState([]);
    const [dato2, setDato2] = useState([]);
    const [dato3, setDato3] = useState([]);
    const [dato4, setDato4] = useState([]);
    const [dato5, setDato5] = useState([]);

    const handleSubmit01 = (e) => {
        e.preventDefault();
        if (proveedor01.length > 0) {
            console.log(proveedor01);
            axios.post("http://localhost:9000/EstadisticaProveedores/", {
                'nombre': proveedor01
            })
                .then(response => {
                    const datosC = response.data;
                    setDato1(cust => datosC);
                    console.log(datosC);
                })
                .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------2-------------------------------------------------------
    const [formValues2, handleInputChange2, reset2] = useForm({
        cliente: ''
    })

    const { cliente } = formValues2;

    const handleSubmit02 = (e) => {
        e.preventDefault();
        if (cliente.length > 0) {
            // axios.post("http://localhost:9000/Clientes/", formValues)
            //     .then(response => {
            //         const datosC = response.data;
            //         setCustomers(cust => datosC);
            //     })
            //     .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------3-------------------------------------------------------
    const [formValues3, handleInputChange3, reset3] = useForm({
        fecha13: '',
        fecha23: ''
    })

    const { fecha13, fecha23 } = formValues3;

    const handleSubmit03 = (e) => {
        e.preventDefault();
        if (fecha13.length > 0 && fecha23.length > 0) {
            // axios.post("http://localhost:9000/Clientes/", formValues)
            //     .then(response => {
            //         const datosC = response.data;
            //         setCustomers(cust => datosC);
            //     })
            //     .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------4-------------------------------------------------------
    const [formValues4, handleInputChange4, reset4] = useForm({
        fecha14: '',
        fecha24: ''
    })
    const { fecha14, fecha24 } = formValues4;
    const handleSubmit04 = (e) => {
        e.preventDefault();
        if (fecha14.length > 0 && fecha24.length > 0) {
            // axios.post("http://localhost:9000/Clientes/", formValues)
            //     .then(response => {
            //         const datosC = response.data;
            //         setCustomers(cust => datosC);
            //     })
            //     .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------5-------------------------------------------------------
    const [formValues5, handleInputChange5, reset5] = useForm({
        fecha15: '',
        fecha25: ''
    })
    const { fecha15, fecha25 } = formValues5;
    const handleSubmit05 = (e) => {
        e.preventDefault();
        if (fecha15.length > 0 && fecha25.length > 0) {
            // axios.post("http://localhost:9000/Clientes/", formValues)
            //     .then(response => {
            //         const datosC = response.data;
            //         setCustomers(cust => datosC);
            //     })
            //     .catch(error => console.log(error));
        }
    }

    return (
        <div className="container">
            <h1>Datos estadísticos</h1>

            {/* --------------------------------------#1------------------------------- */}
            <hr />
            <br></br>
            <h5> Búsqueda de los montos más altos, bajos y compra promedio que se le hace a los proveedores.</h5>
            <form onSubmit={handleSubmit01}>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependproveedor01"><strong>Proveedor:</strong></span>
                            </div>
                            <input
                                name='proveedor01'
                                type="text"
                                className="form-control"
                                value={proveedor01}
                                onChange={handleInputChange1}
                                aria-describedby="inputGroupPrependproveedor01" />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset1}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <table className="table dt-responsive nowrap table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Nombre Proveedor</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Monto Máximo</th>
                        <th scope="col">Monto Mínimo</th>
                        <th scope="col">Promedio</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        deliveri.map((deliveri) => (
                            <tr>
                                <td>{deliveri.SupplierName}</td>
                                <td>{deliveri.SupplierCategoryName}</td>
                                <td>{deliveri.DeliveryMethodName}</td>
                                <td key={deliveri.SupplierID}><center><button className="btn btn-primary" onClick={(e) => getDatos(deliveri.SupplierID, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>

                            </tr>
                        ))
                    } */}
                </tbody>
            </table>

            <br />
            <br />
            <br />
            <br />
            <h5> Búsqueda de los montos más altos, bajos y ventas promedio que hacen los clientes.</h5>
            {/* --------------------------------------#2------------------------------- */}
            <form onSubmit={handleSubmit02}>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependcliente"><strong>Cliente:</strong></span>
                            </div>
                            <input
                                name='cliente'
                                type="text"
                                className="form-control"
                                value={cliente}
                                onChange={handleInputChange2}
                                aria-describedby="inputGroupPrependcliente" />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset2}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <table className="table dt-responsive nowrap table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Monto Máximo</th>
                        <th scope="col">Monto Mínimo</th>
                        <th scope="col">Promedio</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        deliveri.map((deliveri) => (
                            <tr>
                                <td>{deliveri.SupplierName}</td>
                                <td>{deliveri.SupplierCategoryName}</td>
                                <td>{deliveri.DeliveryMethodName}</td>
                                <td key={deliveri.SupplierID}><center><button className="btn btn-primary" onClick={(e) => getDatos(deliveri.SupplierID, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>

                            </tr>
                        ))
                    } */}
                </tbody>
            </table>


            <br />
            <br />
            <br />
            <br />
            <h5> Búsqueda de los top 10 de los productos que generan más ganancia en las ventas.</h5>
            {/* --------------------------------------#3------------------------------- */}
            <form onSubmit={handleSubmit03}>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependnumF3"><strong>Del:</strong></span>
                            </div>
                            <input
                                name='fecha13'
                                type="date"
                                className="form-control"
                                value={fecha13}
                                onChange={handleInputChange3}
                                aria-describedby="inputGroupPrependnumF3" />
                        </div>
                    </div>
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependcliente3"><strong>Al:</strong></span>
                            </div>
                            <input
                                name='fecha23'
                                type="date"
                                className="form-control"
                                value={fecha23}
                                onChange={handleInputChange3}
                                aria-describedby="inputGroupPrependcliente3" />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset3}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <table className="table dt-responsive nowrap table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        deliveri.map((deliveri) => (
                            <tr>
                                <td>{deliveri.SupplierName}</td>
                                <td>{deliveri.SupplierCategoryName}</td>
                                <td>{deliveri.DeliveryMethodName}</td>
                                <td key={deliveri.SupplierID}><center><button className="btn btn-primary" onClick={(e) => getDatos(deliveri.SupplierID, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>

                            </tr>
                        ))
                    } */}
                </tbody>
            </table>

            <br />
            <br />
            <br />
            <br />
            <h5> Búsqueda de los top 10 de los clientes que tienen mayor cantidad de facturas emitidas a su nombre.</h5>
            {/* --------------------------------------#4------------------------------- */}
            <form onSubmit={handleSubmit04}>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependnumF4"><strong>Del:</strong></span>
                            </div>
                            <input
                                name='fecha14'
                                type="date"
                                className="form-control"
                                value={fecha14}
                                onChange={handleInputChange4}
                                aria-describedby="inputGroupPrependnumF4" />
                        </div>
                    </div>
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependcliente4"><strong>Al:</strong></span>
                            </div>
                            <input
                                name='fecha24'
                                type="date"
                                className="form-control"
                                value={fecha24}
                                onChange={handleInputChange4}
                                aria-describedby="inputGroupPrependcliente4" />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset4}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <table className="table dt-responsive nowrap table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Monto total facturado</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        deliveri.map((deliveri) => (
                            <tr>
                                <td>{deliveri.SupplierName}</td>
                                <td>{deliveri.SupplierCategoryName}</td>
                                <td>{deliveri.DeliveryMethodName}</td>
                                <td key={deliveri.SupplierID}><center><button className="btn btn-primary" onClick={(e) => getDatos(deliveri.SupplierID, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>

                            </tr>
                        ))
                    } */}
                </tbody>
            </table>


            <br />
            <br />
            <br />
            <br />
            <h5> Búsqueda de los top 10 de los proveedores que tienen mayor cantidad de órdenes de compras emitidas a su nombre.</h5>
            {/* --------------------------------------#5------------------------------- */}
            <form onSubmit={handleSubmit05}>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend51"><strong>Del:</strong></span>
                            </div>
                            <input
                                name='fecha15'
                                type="date"
                                className="form-control"
                                value={fecha15}
                                onChange={handleInputChange5}
                                aria-describedby="inputGroupPrepend51" />
                        </div>
                    </div>
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend5"><strong>Al:</strong></span>
                            </div>
                            <input
                                name='fecha25'
                                type="date"
                                className="form-control"
                                value={fecha25}
                                onChange={handleInputChange5}
                                aria-describedby="inputGroupPrepend5" />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset5}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <table className="table dt-responsive nowrap table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Nombre Proveedor</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        deliveri.map((deliveri) => (
                            <tr>
                                <td>{deliveri.SupplierName}</td>
                                <td>{deliveri.SupplierCategoryName}</td>
                                <td>{deliveri.DeliveryMethodName}</td>
                                <td key={deliveri.SupplierID}><center><button className="btn btn-primary" onClick={(e) => getDatos(deliveri.SupplierID, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>

                            </tr>
                        ))
                    } */}
                </tbody>
            </table>

        </div>
    )
}
