import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ReCaptcha: React.FC<{ captchaValue: boolean }> = () => {
	const captcha = useRef<ReCAPTCHA>(null)

	const onCaptcha = () => {
		captcha.current?.getValue() ? true : false
		console.log(captcha.current?.getValue())
	}
	return (
		<ReCAPTCHA
			ref={captcha}
			sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
			onChange={onCaptcha}
		/>
	)
}

export default ReCaptcha
