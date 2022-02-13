import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'

const Navbar: NextPage = () => {
	const { t } = useTranslation('navbar')
	return (
		<>
			<div className="nav">
				<input type="checkbox" id="nav-check" />
				<div className="nav-header">
					<div className="nav-title">
						<picture>
							<img
								loading="lazy"
								src="/assets/logo.webp"
								width="70"
								height="70"
								alt="AB-logo"
							/>
						</picture>
					</div>
				</div>
				<div className="nav-btn">
					<label htmlFor="nav-check">
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>

				<div className="nav-links">
					<a href="//github.io/jo_geek" target="_blank">
						{t('about1')}
					</a>
					<a href="http://stackoverflow.com/users/4084003/" target="_blank">
						{t('services1')}
					</a>
					<a
						href="https://in.linkedin.com/in/jonesvinothjoseph"
						target="_blank"
					>
						{t('candidate1')}
					</a>
					<a href="https://codepen.io/jo_Geek/" target="_blank">
						{t('jobs1')}
					</a>
					<a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
						{t('blog1')}
					</a>
					<a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
						{t('contact1')}
					</a>
				</div>
			</div>
			<style jsx>{`
				.nav {
					height: 50px;
					width: 100%;
					background-color: #4d4d4d;
					position: relative;
				}
				.nav > .nav-header {
					display: inline;
				}

				.nav > .nav-header > .nav-title {
					display: inline-block;
				}

				.nav-title > img {
					padding: 5px;
				}

				.nav > .nav-btn {
					display: none;
				}

				.nav > .nav-links {
					display: inline;
					float: right;
					font-size: 18px;
					margin: auto 10px;
				}

				.nav > .nav-links > a {
					display: inline-block;
					padding: 13px 10px 13px 10px;
					text-decoration: none;
					color: #efefef;
				}

				.nav > .nav-links > a:hover {
					background-color: rgba(0, 0, 0, 0.3);
				}

				.nav > #nav-check {
					display: none;
				}

				@media (max-width: 600px) {
					.nav > .nav-btn {
						display: inline-block;
						position: absolute;
						right: 0px;
						top: 0px;
					}
					.nav > .nav-btn > label {
						display: inline-block;
						width: 50px;
						height: 50px;
						padding: 13px;
					}
					.nav > .nav-btn > label:hover,
					.nav #nav-check:checked ~ .nav-btn > label {
						background-color: rgba(0, 0, 0, 0.3);
					}
					.nav > .nav-btn > label > span {
						display: block;
						width: 25px;
						height: 10px;
						border-top: 2px solid #eee;
					}
					.nav > .nav-links {
						position: absolute;
						display: block;
						width: 100%;
						background-color: #333;
						height: 0px;
						transition: all 0.3s ease-in;
						overflow-y: hidden;
						top: 50px;
						left: 0px;
					}
					.nav > .nav-links > a {
						display: block;
						width: 100%;
					}
					.nav > #nav-check:not(:checked) ~ .nav-links {
						height: 0px;
					}
					.nav > #nav-check:checked ~ .nav-links {
						height: calc(100vh - 50px);
						overflow-y: auto;
					}
				}
			`}</style>
		</>
	)
}

export default Navbar
