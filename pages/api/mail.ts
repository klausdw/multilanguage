import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, message } = JSON.parse(req.body);

	try {
		const data = await resend.emails.send({
			from: `Contato do Website <${email}>`,
			to: [`${process.env.EMAIL_TO}`],
			subject: `${name} - ${email}`,
			text: message,
			html: message.replace(/\n/g, '<br/>'),
		});

		res.status(200).json(data);
	} catch (error) {
		console.error("Error:", error);
		res.status(400).json(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
