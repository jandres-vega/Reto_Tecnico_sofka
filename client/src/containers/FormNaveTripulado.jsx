import React from 'react';
import {useDispatch} from "react-redux";
import {createNaveTripulada} from "../redux/actions/actions"
import {Formik, Form, Field} from 'formik';
import {Link} from "react-router-dom";

const FormNaveTripulado = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Formik initialValues={{
                nameNave: '',
                weight: '',
                cap_combustible: '',
                speed_max: '',
                push: '',
                type: 'tripulada',
                nameT: '',
                earthDistance: '',
                location: ''
            }}
                    onSubmit={(valores, {resetForm}) => {
                        dispatch(createNaveTripulada(valores));
                        resetForm()

                    }}
            >
                {({values}) => (
                    <main>
                        <Form className="form">
                            <div className="form-grup">
                                <label htmlFor="nameNave" className="form-label">Nombre: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="nameNave"
                                           placeholder="ingrese Nombre"
                                           id="nameNave"
                                    />
                                </div>
                            </div>
                            <div className="form-grup">
                                <label htmlFor="weight" className="form-label">peso </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="weight"
                                           placeholder="ingrese Nombre"
                                           id="weight"
                                    />
                                </div>
                            </div>
                            <div className="form-grup">
                                <label htmlFor="cap_combustible" className="form-label">capacidad de combustible </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="cap_combustible"
                                           placeholder="ingrese Nombre"
                                           id="cap_combustible"
                                    />
                                </div>
                            </div>
                            <div className="form-grup">
                                <label htmlFor="speed_max" className="form-label">Velocidad Maxima: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="speed_max"
                                           placeholder="ingrese Nombre"
                                           id="speed_max"
                                    />
                                </div>
                            </div>
                            <div className="form-grup">
                                <label htmlFor="push" className="form-label">Empuje: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="push"
                                           placeholder="ingrese Nombre"
                                           id="push"
                                    />
                                </div>
                            </div>
                            <div className="form-grup">
                                <label htmlFor="type" className="form-label">Tipo De Nave: </label>
                                <div className="form-input-grup">
                                    <Field name="type"
                                           type="text"
                                           id="type"
                                    >

                                    </Field>
                                </div>
                            </div>
                            <div className="form-grup">
                                <label htmlFor="nameT" className="form-label">nombre de la nave tripulada: </label>
                                <div className="form-input-grup">
                                    <Field name="nameT"
                                           placeholder="infrese el nombre de la nave"
                                           type="text"
                                           id="nameT"
                                    >

                                    </Field>
                                </div>
                            </div>
                            <div className="form-grup">
                                <label htmlFor="purposeNave" className="form-label">Proposito: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text"
                                           name="purposeNave"
                                           placeholder="ingrese su proposito"
                                           id="purposeNave"
                                    />
                                </div>
                            </div>
                            <div className="numberCrew">
                                <label htmlFor="nameNave" className="form-label">Numero de tripulantes: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="numberCrew"
                                           placeholder="ingrese Nombre"
                                           id="numberCrew"
                                    />
                                </div>
                            </div>
                            <div>
                                <button type="submit">Crear Nave</button>
                            </div>
                        </Form>
                        <div>
                            <Link to="/home">
                                <button>volver</button>
                            </Link>
                        </div>
                    </main>
                )}

            </Formik>
        </div>



    );
};

export default FormNaveTripulado;