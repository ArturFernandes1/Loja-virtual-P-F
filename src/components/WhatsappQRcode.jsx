import React from 'react';
import '../components/WhatsappQRcode.css'

import QRCode from 'qrcode.react';


const WhatsappQRCode = ({ phoneNumber }) => {
  // Substitua <phoneNumber> pelo seu número do WhatsApp, incluindo o código do país
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="whatsapp-qr-code">
      <p>Escaneie o QR Code para iniciar uma conversa conosco no WhatsApp:</p>
      <QRCode value={whatsappLink} size={256} />
      <p>Ou clique <a href={whatsappLink}>aqui</a> para abrir no WhatsApp.</p>
    </div>
  );
};

export default WhatsappQRCode;