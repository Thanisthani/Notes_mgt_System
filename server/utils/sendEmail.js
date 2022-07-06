
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const REFRESH_TOKEN = '1//04sF-zTaKVClyCgYIARAAGAQSNwF-L9IrTfAiFqIHD_3j8cj_perOYahE2JrIv8-lVrynOHfZED-5DMmd86R46Cmaqtqcv-vTeYc'
const CLIENT_ID = '121419066625-u9dmc2iqrahudjg1bsvh86v4jj4l7s11.apps.googleusercontent.com'
const CLIENT_SECRET = "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"
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

module.exports = async (email, subject, text) => {
    try {
		const accessToken = await oAuth2Client.getAccessToken();

		const transport = nodemailer.createTransport({
			service: process.env.SERVICE,
			auth: {
				type: 'OAuth2',
				user: process.env.USER,
				clientId:CLIENT_ID,
				clientSecret:CLIENT_SECRET,
				refreshToken:REFRESH_TOKEN,
				accessToken:accessToken
			},
		});
		const url = `${process.env.BASE_URL}login`;
		const mailOptions = {
			from: `QuarantineCoders <${process.env.USER}>`,
			to: email,
			subject: subject,
			text: `Temporary password ${text} click bleow link to login ${url} `,
		}

		const result = await transport.sendMail(mailOptions)

		console.log("email sent successfully");
		return result

	} catch (error) {
		console.log("email not sent!", process.env.CLIENT_ID);
		console.log(error);
		return error;
	}
};