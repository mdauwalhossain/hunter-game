import nodemailer from "nodemailer"

const authEmail = process.env.EMAIL
const authPass = process.env.EMAIL_PASS

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    port: 587, // port for secure SMTP
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: authEmail,
        pass: authPass
    }
})

export default async (req, res) => {
    const { name, email, whatsapp, message } = req.body

    if (name === "" || email === "" || whatsapp === "" || message === "") {
        res.status(403).send("")
        return
    }

    const html = `<br />
        <b>Nome: </b> ${name} <br />
        <b>E-mail: </b> ${email} <br />
        <b>Whatsapp: </b> ${whatsapp} <br />
        <b>Mensagem: </b> ${message}`

    const options = {
        subject: `Site - Novo contato de ${name}`,
        html,
        from: `Site <${authEmail}>`,
        to: [authEmail],
        replyTo: [email]

    }

    const mailerRes = await new Promise((resolve, reject) => {
        transporter.sendMail(options, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })

    res.send(mailerRes)
}
