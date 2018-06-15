import { BaseRoute } from './BaseRoute';
import { Router } from 'express';
import { BeerController } from '../controllers/Beer';

export class BeerRoute extends BaseRoute {
  public initRoutes(): Router {
    this.router.get('/', BeerController.getAllBeers);
    this.router.get('/:title', BeerController.getBeerByTitle);
    return this.router;
  }
}
