import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TypeDocument extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 1,
      maxLength: 50,
      errorMessage: 'Error',
    },
  })
  NameTypeDocument: string;

  @property({
    type: 'number',
  })
  UserId?: number;

  @property({
    type: 'number',
  })
  userDocumentId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TypeDocument>) {
    super(data);
  }
}

export interface TypeDocumentRelations {
  // describe navigational properties here
}

export type TypeDocumentWithRelations = TypeDocument & TypeDocumentRelations;
