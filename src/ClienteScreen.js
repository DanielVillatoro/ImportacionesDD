import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export const ClienteScreen = () => {

    const {register, handleSubmit} = useForm();
    console.log(register);

    const onSubmit = (data) => {
        const dataJson = JSON.stringify(data);
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

    return (
        <div className="container">
            <h1>ClienteScreen</h1>
            <hr />
            <br></br>
            <h5> Búsqueda de clientes por filtros</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Container">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependCliente"><strong>Cliente:</strong></span>
                                </div>
                                <input id="clienteInput" name="cliente" type="text" className="form-control" ref={register} aria-describedby="inputGroupPrependCliente" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependCategoria"><strong>Categoría:</strong></span>
                                </div>
                                <input id="categoriaInput" name="categoria" type="text" className="form-control" ref={register} aria-describedby="inputGroupPrependCategoria" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrependEntrega"><strong>Método de entrega:</strong></span>
                                </div>
                                <input id="entregaInput" name="entrega" type="text" className="form-control" ref={register} aria-describedby="inputGroupPrependEntrega" />
                            </div>
                        </div>
                        <div className="form-group col-md-1">
                            <button className='btn btn-info float-right' type="submit">Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
            <br></br>
            <hr></hr>
        </div>
    )
}
