import { FilterQuery, QueryOptions } from 'mongoose';
import { TModel, TMongoId, TResultDocument } from '../../core/interfaces/util.interface';

export class Repository<T> {
  model: TModel<T>;

  constructor(model: TModel<T>) {
    this.model = model;
  }

  /**
   * Method which search by id in the collection given
   * @param id mongo id
   * @returns Document
   */
  protected async findOneById(id: TMongoId): Promise<TResultDocument<T>> {
    const result = await this.model.findById(id);

    return result;
  }

  /**
   * Method which search by the condition given
   * @param filter Filter applied to the search
   * @returns Document
   */
  async findOneByFilter(filter: FilterQuery<T>): Promise<TResultDocument<T>> {
    const result = await this.model.findOne(filter);

    return result;
  }

  /**
   * Method which returns all documents found in the collection given
   * @returns Array of documents
   */
  async find(): Promise<TResultDocument<T>[]> {
    const result = await this.model.find();

    return result;
  }

  /**
   * Method which insert a document into the collection given
   * @param input Document to insert
   * @returns Document inserted
   */
  async insert<T>(input: T) {
    const newModel = new this.model(input);
    const newRecord = await newModel.save();
    return newRecord;
  }

  /**
   * Method which update a document which match with the id given
   * @param id Document id to update
   * @param input Data to update
   * @returns Document updated
   */
  async update<T>(id: TMongoId, input: T, options?: QueryOptions): Promise<TResultDocument<T>> {
    return this.model.findByIdAndUpdate(id, input, { ...options, new: true });
  }
}
