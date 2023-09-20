import { NextApiRequest, NextApiResponse } from "next"
require("dotenv").config();
const nodemailer = require('nodemailer')

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, message } = JSON.parse(req.body)

	const transporter = nodemailer.createTransport({
		host: 'smtp.resend.com',
		port: 465,
		secure: true,
		auth: {
			user: 'resend',
			pass: process.env.EMAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	})

	const mailOption = {
		from: `Contato do Website ${email}`,
		replyTo: email,
		subject: `${name} - ${email}`,
		text: message,
		html: message.replace(/\n/g, '<br/>'),
	}

	await transporter.sendMail(mailOption)
		.then((result: any) => {
			result
			res.status(200).json({ status: 'OK' })

		})
		.catch((err: any) => {
			console.log(err);
			err instanceof Error ? err.message : err
		})
}