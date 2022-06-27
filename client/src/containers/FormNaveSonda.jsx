import React from 'react';
import {Field, Form, Formik} from "formik";
import {createNaveSonda} from '../redux/actions/actions'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const FormNaveSonda = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <Formik initialValues={{
                nameNave: '',
                weight: '',
                cap_combustible: '',
                speed_max: '',
                push: '',
                type: 'sonda',
                nameS: '',
                location: '',
                earthDistance: ''
            }}
                    onSubmit={(valores) => {
                        dispatch(createNaveSonda(valores))
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
                                <label htmlFor="nameS" className="form-label">Ingrese nombre  sonda: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="sonda"
                                           placeholder="ingrese Nombre"
                                           id="sonda"
                                    />
                                </div>
                            </div>
                             <div>
                                 <div className="form-grup">
                                     <label htmlFor="earthDistance" className="form-label">Distancia de la tierra: </label>
                                     <div className="form-input-grup">
                                        <Field className="form-input"
                                               type="text"
                                               name="earthDistance"
                                               placeholder="ingrese la distancia de la tierra"
                                               id="earthDistance"
                                        />
                                    </div>
                                </div>
                                <div className="location">
                                    <label htmlFor="location" className="form-label">ubicacion: </label>
                                    <div className="form-input-grup">
                                        <Field className="form-input"
                                               type="text" name="location"
                                               placeholder="ingrese Nombre"
                                               id="location"
                                        />
                                    </div>
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

export default FormNaveSonda;