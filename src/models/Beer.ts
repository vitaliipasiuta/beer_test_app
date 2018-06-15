import {Document, Model, model, Schema, Types} from "mongoose";

const collectionName = 'beer';

export interface IBeer extends Document {
  title: string;
}

const beerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {pluralize: false, collection: String(collectionName)});

type BeerModel = Model<IBeer> & IBeer;

const Beer: BeerModel = model<IBeer>(String(collectionName), beerSchema) as BeerModel;

export {
  Beer,
}
