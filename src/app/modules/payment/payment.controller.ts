import { NextFunction, Request, Response } from 'express';
import { PaymentService } from './payment.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const initPayment = async (req: Request, res: Response, next: NextFunction) => {
  console.log('data', req.body);
  const result = await PaymentService.initPayment(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment init successfully',
    data: result
  });
};

const webhook = async (req: Request, res: Response, next: NextFunction) => {
  const result = await PaymentService.webhook(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment verified!',
    data: result
  });
};

export const PaymentController = {
  initPayment,
  webhook
};
