const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SEND_API_KEY)

export default (req, res) => {
	const body = JSON.parse(req.body)
	const message = `
	  Nome: ${body.nome}\r\n
	  E-Mail: ${body.email}\r\n
	  Mensagem: ${body.mensagem}\r\n
	`
	const data = {
		to: process.env.EMAIL_FROM,
		from: process.env.EMAIL_TO,
		bcc: 'abconnection20@gmail.com',
		subject: 'Contato do Website',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	}
	try {
		mail.send(data)
		res.status(200).json({ status: 'Ok' })
	} catch (error) {
		console.log(error)
		if (error.response) {
			console.error(error.response.body)
		}
	}
}
