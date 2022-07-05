import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PruebaDbDataSource} from '../datasources';
import {ContactInfo, ContactInfoRelations, Country, AppUser} from '../models';
import {CountryRepository} from './country.repository';
import {AppUserRepository} from './app-user.repository';

export class ContactInfoRepository extends DefaultCrudRepository<
  ContactInfo,
  typeof ContactInfo.prototype.id,
  ContactInfoRelations
> {

  public readonly country: BelongsToAccessor<Country, typeof ContactInfo.prototype.id>;

  public readonly appUser: BelongsToAccessor<AppUser, typeof ContactInfo.prototype.id>;

  constructor(
    @inject('datasources.pruebaDb') dataSource: PruebaDbDataSource, @repository.getter('CountryRepository') protected countryRepositoryGetter: Getter<CountryRepository>, @repository.getter('AppUserRepository') protected appUserRepositoryGetter: Getter<AppUserRepository>,
  ) {
    super(ContactInfo, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter,);
    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter,);
    this.registerInclusionResolver('country', this.country.inclusionResolver);
  }
}
