import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymobPayment({ paymentKey, onSuccess }) {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    onSuccess();
  };

  return (
    <div className="PaymobPayment">
      <iframe title='pay'
        src={`https://accept.paymobsolutions.com/api/acceptance/iframes/YOUR_IFRAME_ID?payment_key=${paymentKey}`}
        width="100%"
        height="600"
        frameBorder="0"
        onLoad={() => console.log('Paymob iframe loaded')}
        onPaymentSuccess={handlePaymentSuccess} // Handle the successful payment event
      />
      <button onClick={() => navigate(-1)}>Cancel Payment</button>
    </div>
  );
}

export default PaymobPayment;
