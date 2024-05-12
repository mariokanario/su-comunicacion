"use client"

import React from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from 'sweetalert2'


const Contact = () => {

    const Schema = yup
        .object({
            name: yup
                .string()
                .required("El nombre es obligatorio")
                .min(5, "El nombre debe tener mínimo 5 letras"),
            phone: yup
                .string()
                .required("El teléfono es obligatorio")
                .min(5, "El teléfono debe de tener mínimo 5 letras")
                .typeError("El teléfono es obligatorio"),
            email: yup
                .string()
                .required("El correo es obligatorio")
                .min(5, "El correo debe de tener mínimo 5 letras")
                .email("Ingresa un correo válido"),
            comment: yup
                .string()
                .required("El comentario es obligatorio")
                .min(5, "El nombre debe tener mínimo 5 letras"),
        })
        .required();


    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            comment: ""
        },
        validationSchema: Schema,
        onSubmit: (data, {resetForm}) => {
            console.log(data);

            Swal.fire({
                title: 'Mensaje enviado',
                text: "Nos estaremos comunicando con usted",
                icon: 'success',
                customClass: {
                    confirmButton: 'succes-alert',
                },
                confirmButtonText: 'Cerrar'
            })

            resetForm();
        },
    });

    const { name, phone, email, comment } = formik.values;

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="touch__input">
                        <input
                            type="text"
                            placeholder="Nombre"
                            id="name"
                            value={name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <small className="text-danger">{formik.errors.name}</small>
                        )}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="touch__input">
                        <input
                            type="text"
                            placeholder="Teléfono"
                            id="phone"
                            value={phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <small className="text-danger">{formik.errors.phone}</small>
                        )}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="touch__input">
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <small className="text-danger">{formik.errors.email}</small>
                        )}
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="touch__input">
                        <textarea
                            placeholder='Comentario'
                            id="comment"
                            value={comment}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></textarea>
                        {formik.touched.comment && formik.errors.comment && (
                            <small className="text-danger">{formik.errors.comment}</small>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="touch__submit">

                        <div className="touch__btn">
                            <button type="button"></button>
                            <button className="border__btn" type="submit">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Contact