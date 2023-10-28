import { sslService } from '../ssl/ssl.service';

const initPayment = async () => {
  const paymentSession = await sslService.initPayment();

  return paymentSession;
};

export const PaymentService = {
  initPayment
};
