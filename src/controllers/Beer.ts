import {Request, Response} from 'express';
import {Beer} from "../models/Beer";

export class BeerController {
  static async getAllBeers(req: Request, res: Response): Promise<void> {
    console.log('---------');
    console.log('get all beer request');
    console.log('---------');
    const categories = await Beer.find();
    res.json(categories);
  }

  static async getBeerByTitle(req: Request, res: Response): Promise<void> {
    const title = req.params.title;
    const product = await Beer.findOne({ title });
    res.json(product);
  };
}
