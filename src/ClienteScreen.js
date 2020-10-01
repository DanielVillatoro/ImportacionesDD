import React, { useState } from 'react';
import { useForm } from './hooks/useForm';
import axios from 'axios';

export const ClienteScreen = () => {


    const [formValues, handleInputChange, reset] = useForm({
        cliente: '',
        categoria: '',
        entrega: ''
    })
    const { cliente, categoria, entrega } = formValues;

    const [customers, setCustomers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cliente.length > 0 || categoria.length > 0 || entrega.length > 0) {
            const dataJson = JSON.stringify(formValues);
            // console.log(formValues);
            // console.log(dataJson);
            axios.post("http://localhost:9000/Clientes/",formValues)
                .then(response => {
                    const datosC = response.data;
                    setCustomers(cust => datosC);
                    console.log(datosC);

                })
                .catch(error => console.log(error));
            // console.log(data);
        }
    }
    // const { register, handleSubmit } = useForm();

    const getDatosCliente = (id, e) => {
        e.preventDefault();
        console.log(id);
    }


    return (
        <div className="container">
            <h1>ClienteScreen</h1>
            <hr />
            <br></br>
            <h5> Búsqueda de clientes por filtros</h5>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={handleSubmit}>
                <div className="Container">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependCliente"><strong>Cliente:</strong></span>
                                </div>
                                <input
                                    name='cliente'
                                    type="text"
                                    className="form-control"
                                    value={cliente}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependCliente" />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependCategoria"><strong>Categoría:</strong></span>
                                </div>
                                <input
                                    name='categoria'
                                    type="text"
                                    className="form-control"
                                    value={categoria}
                                    onChange={handleInputChange}
                                    aria-describedby="inputGroupPrependCategoria" />
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
                        <th scope="col">Nombre</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Método de entrega</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer) => (
                            <tr>
                                <td>{customer.CustomerName}</td>
                                <td>{customer.CustomerCategoryName}</td>
                                <td>{customer.DeliveryMethodName}</td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                        <td>Daniel</td>
                        <td>Presidente</td>
                        <td>Avion</td>
                        <td><center><button id="1XX" className="btn btn-primary" onClick={(e) => getDatosCliente(1, e)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-check"></i></button></center></td>
                    </tr> */}
                </tbody>
            </table>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cliente:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                <input type="text" className="form-control" id="recipient-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">Message:</label>
                                <textarea className="form-control" id="message-text"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
