import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {UserDocument} from './user-document.model';

@model({settings: {strict: false}})
export class AppUser extends Entity {
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
      maxLength: 20,
      errorMessage: 'Error',
    },
  })
  LastName: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 1,
      maxLength: 20,
      errorMessage: 'Error',
    },
  })
  Name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  IsMilitar: boolean;

  @property({
    type: 'date',
    required: true,
  })
  TimeCreate: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isTemporal: boolean;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    unique: true,
    required: true,
    jsonSchema: {
      format: 'email',
    },
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    unique: true,
    jsonSchema: {
      format: 'email',
    },
  })
  emailVerified: string;

  @property({
    type: 'string',
    required: true,
  })
  verificationToken: string;

  @hasOne(() => UserDocument)
  userDocument: UserDocument;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppUser>) {
    super(data);
  }
}

export interface AppUserRelations {
  // describe navigational properties here
}

export type AppUserWithRelations = AppUser & AppUserRelations;
