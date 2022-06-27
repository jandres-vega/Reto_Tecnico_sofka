import React from 'react';
import {Formik, Form, Field} from 'formik';
import {createNaveSatelite} from '../redux/actions/actions'
import '../styles/FormNave.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
const FormNave = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Formik initialValues={{
                nameNave: '',
                weight: '',
                cap_combustible: '',
                speed_max: '',
                push: '',
                type: 'satelite',
                nameSatelite: '',
                typeLanding: '',
                locationEart: ''
            }}
                    onSubmit={(valores) => {
                        dispatch(createNaveSatelite(valores))
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
                                <label htmlFor="nameSatelite" className="form-label">Ingrese nombre satelite: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="nameSatelite"
                                           placeholder="ingrese nombre del satelite"
                                           id="nameSatelite"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="form-grup">
                                    <label htmlFor="locationEart" className="form-label">ubicacion: </label>
                                    <div className="form-input-grup">
                                        <Field className="form-input"
                                               type="text"
                                               name="locationEart"
                                               placeholder="ingrese su localizacion"
                                               id="locationEart"
                                        />
                                    </div>
                                </div>
                                <div className="typeLanding">
                                    <label htmlFor="typeLanding" className="form-label">Tipo DE aterrizaje: </label>
                                    <div className="form-input-grup">
                                        <Field className="form-input"
                                               type="text" name="typeLanding"
                                               placeholder="ingrese Aterrizaje"
                                               id="typeLanding"
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

export default FormNave;