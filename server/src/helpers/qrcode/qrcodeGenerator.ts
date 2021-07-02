import qrcode = require('qrcode');

class CodeMaker {
	generate(url) {
		const options = {
			errorCorrectionLevel: 'H',
			type: 'svg',
			color: {
				dark: '#000000',
				light: '#ffffff',
			},
		};
		const generatedCode = qrcode.toString(
			url,
			options,
			function (error, string) {
				if (error) {
					return error;
				}
				return string;
			},
		);
		return generatedCode;
	}
}

const QRCode = new CodeMaker();

export default QRCode;
