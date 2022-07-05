import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {TypeDocument} from './type-document.model';
import {AppUser} from './app-user.model';

@model({settings: {strict: false}})
export class UserDocument extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
  @property({
    type: 'number',
    required: true,
  })
  Document: number;

  @property({
    type: 'string',
    required: true,
  })
  PlaceExpedition: string;

  @property({
    type: 'date',
    required: true,
  })
  dateExpedition: string;

  @belongsTo(() => TypeDocument)
  typeDocumentId: number;

  @belongsTo(() => AppUser)
  appUserId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserDocument>) {
    super(data);
  }
}

export interface UserDocumentRelations {
  // describe navigational properties here
}

export type UserDocumentWithRelations = UserDocument & UserDocumentRelations;
