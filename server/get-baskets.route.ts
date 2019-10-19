import { Request, Response } from 'express';
import { BASKETS } from './baskets-data';

export function getAllBaskets(req: Request, res: Response) {
    console.log('Retrieving baskets data ...');
    setTimeout(() => {
      res.status(200).json(Object.values(BASKETS));
    }, 1000);
}

