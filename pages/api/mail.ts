import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.EMAIL_PASS;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, message } = JSON.parse(req.body);

	try {
		const response = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${RESEND_API_KEY}`,
			},
			body: JSON.stringify({
				from: `Contato do Website <${email}>`,
				to: [process.env.EMAIL_TO],
				subject: `${name} - ${email}`,
				text: message,
				html: message.replace(/\n/g, '<br/>'),
			}),
		});

		if (response.ok) {
			const data = await response.json();
			res.status(200).json(data);
		} else {
			const errorData = await response.json();
			res.status(response.status).json(errorData);
		}
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
