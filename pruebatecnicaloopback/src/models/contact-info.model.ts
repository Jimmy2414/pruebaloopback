import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Country} from './country.model';
import {AppUser} from './app-user.model';

@model({settings: {strict: false}})
export class ContactInfo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Address: string;

  @property({
    type: 'string',
    required: true,
  })
  City: string;

  @property({
    type: 'string',
    required: true,
  })
  Phone: string;

  @property({
    type: 'string',
    required: true,
  })
  CelPhone: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyName: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyPhone: string;

  @belongsTo(() => Country)
  countryId: number;

  @belongsTo(() => AppUser)
  appUserId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ContactInfo>) {
    super(data);
  }
}

export interface ContactInfoRelations {
  // describe navigational properties here
}

export type ContactInfoWithRelations = ContactInfo & ContactInfoRelations;
