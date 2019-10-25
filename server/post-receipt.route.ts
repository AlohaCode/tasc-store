import { Request, Response } from 'express';

export function postReceipt(req: Request, res: Response) {
    console.log('Posting receipt data ...');
    setTimeout(() => {
      res.status(200).json(req.body);
    }, 1000);
}
