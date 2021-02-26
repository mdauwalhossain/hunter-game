import { Formik, Field, ErrorMessage } from 'formik'
import MaskedInput from "react-text-mask"
import styles from './Contact.module.css'

const phoneNumberMask = [
    "(",
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];

export default function Contact() {

    return (
        <div className={styles.contact}>
            <span>Fale Conosco!</span>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    whatsapp: '',
                    message: '',
                }}
                validate={values => {
                    const errors = {}

                    if (!values.name) {
                        errors.name = 'Campo Obrigatório!'
                    }

                    if (!values.email) {
                        errors.email = 'Campo Obrigatório!'
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'E-mail Inválido!'
                    }

                    if (!values.whatsapp) {
                        errors.whatsapp = 'Campo Obrigatório!'
                    } else if (values.whatsapp.charAt(values.whatsapp.length - 1) == '_') {
                        errors.whatsapp = 'Número Inválido!'
                    }

                    if (!values.message) {
                        errors.message = 'Campo Obrigatório!'
                    }

                    return errors
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                        resetForm()
                    }, 400);
                }}
            >
                {({
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nome: </label>
                            <Field name="name" id="name" />
                            <ErrorMessage name="name" component="div" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">E-mail: </label>
                            <Field type="email" name="email" id="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="whatsapp">Whatsapp: </label>
                            <Field name="whatsapp">
                                {({ field }) => (
                                    <MaskedInput
                                        {...field}
                                        mask={phoneNumberMask}
                                        id="whatsapp"
                                    />
                                )}
                            </Field >

                            <ErrorMessage name="whatsapp" component="div" />
                        </div>

                        <div className={`${styles.formGroup} ${styles.formArea}`}>
                            <Field name="message" as="textarea" placeholder="Mensagem: " />
                            <ErrorMessage name="message" component="div" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
