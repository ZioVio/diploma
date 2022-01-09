import mongoose from 'mongoose';

type BaseModel<T = {}> = mongoose.Model<T, {}, {}, {}>;
type ID = mongoose.ObjectId | string;

export abstract class BaseStorage<T> {
  constructor(protected model: BaseModel<T>) {}

  async get(query: Parameters<BaseModel['find']>[0]) {
    return this.model.find(query);
  }

  async getOne(query: Parameters<BaseModel['findOne']>[0]) {
    return this.model.findOne(query);
  }

  async getById(id: ID) {
    return this.model.findById(id);
  }

  async getAll() {
    return this.model.find({});
  }

  async create(entity: (mongoose.AnyKeys<T> & mongoose.AnyObject) | undefined) {
    return new this.model(entity).save();
  }

  async deleteById(id: ID) {
    return this.model.findByIdAndDelete(id);
  }

  async updateById(
    id: ID,
    entity: Parameters<BaseModel['findOneAndUpdate']>[1],
  ) {
    return this.model.findOneAndUpdate({ _id: id }, entity);
  }
}
