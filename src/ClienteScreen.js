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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cliente.length > 0 || categoria.length > 0 || entrega.length > 0) {
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


    const [customers, setCustomers] = useState([]);
    // const { register, handleSubmit } = useForm();


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
                        customers.map((customer) => (
                            <tr>
                                <td>{customer.CustomerName}</td>
                                <td>{customer.CustomerCategoryName}</td>
                                <td>{customer.DeliveryMethodName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
