import qrcode from "qrcode-terminal";

export async function gerarQRCode(url) {
    qrcode.generate(url, { small: true }, (qrcode) => {
        console.log("QR Code gerado com sucesso:");
        console.log(qrcode);
    });
}