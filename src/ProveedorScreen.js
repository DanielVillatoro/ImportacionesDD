import React, { useState } from 'react';
import { useForm } from './hooks/useForm';
import axios from 'axios';


export const ProveedorScreen = () => {


    const [formValues, handleInputChange, reset] = useForm({
        proveedor: '',
        categoria: '',
        entrega: ''
    })
    const { proveedor, categoria, entrega } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (proveedor.length > 0 || categoria.length > 0 || entrega.length > 0) {
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


    const getDatos=(id,e)=>{
        e.preventDefault();
        console.log(id);
    }

    return (
        <div className="container">
            <h1>ProveedorScreen</h1>
            <hr/>
            <br></br>
            <h5> Búsqueda de proveedores por filtros</h5>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={handleSubmit}>
                <div className="Container">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependCliente"><strong>Proveedor:</strong></span>
                                </div>
                                <input
                                    name='proveedor'
                                    type="text"
                                    className="form-control"
                                    value={proveedor}
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
                        <th scope="col">Nombre Proveedor</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Método de entrega</th>
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
                        <td>Avion</td>
                        <td><center><button id="1" className="btn btn-primary" onClick={(e) => getDatos(1, e)}><i className="fa fa-check"></i></button></center></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
