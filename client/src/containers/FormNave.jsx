import React from 'react';
import {Formik, Form, Field} from 'formik';
const FormNave = () => {
    return (
        <div>
            <Formik initialValues={{
                nameNave: '',
                weight: '',
                cap_combustible: '',
                speed_max: '',
                push: '',
                type: '',
            }}
                    onSubmit={(valores) => {
                        console.log(valores)
                    }}
            >
                {({}) => (
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
                                <label htmlFor="name" className="form-label">Tipo De Nave: </label>
                                <div className="form-input-grup">
                                    <Field name="type" as="select">
                                        <option value="tripulade">Nave Tripulada</option>
                                        <option value="satelite">Nave satelite</option>
                                        <option value="sonda">Nave Sonda</option>
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <button type="submit">Crear Nave</button>
                            </div>
                        </Form>
                    </main>
                )}

            </Formik>
        </div>
    );
};

export default FormNave;