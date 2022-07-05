import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PruebaDbDataSource} from '../datasources';
import {TypeDocument, TypeDocumentRelations} from '../models';

export class TypeDocumentRepository extends DefaultCrudRepository<
  TypeDocument,
  typeof TypeDocument.prototype.id,
  TypeDocumentRelations
> {
  constructor(
    @inject('datasources.pruebaDb') dataSource: PruebaDbDataSource,
  ) {
    super(TypeDocument, dataSource);
  }
}
