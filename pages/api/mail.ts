import { NextApiRequest, NextApiResponse } from "next"
require("dotenv").config();
const nodemailer = require('nodemailer')

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { nome, email, mensagem } = JSON.parse(req.body)
	console.log(nome, email, mensagem)

	const transporter = nodemailer.createTransport({
		host: 'smtp.ionos.de',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_FROM,
			pass: process.env.EMAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	})

	const mailOption = {
		from: `Contato do Website ${email}`,
		to: process.env.EMAIL_TO,
		bcc: process.env.EMAIL_COPY,
		replyTo: email,
		subject: `${nome} - ${email}`,
		text: mensagem,
		html: mensagem.replace(/\n/g, '<br/>'),
	}

	await transporter.sendMail(mailOption)
		.then((result: any) => {
			console.log(result);
			result
			res.status(200).json({ status: 'OK' })
		})
		.catch((err: any) => {
			console.log(err)
			err instanceof Error ? err.message : err
		})
}