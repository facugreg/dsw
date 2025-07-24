import { PrimaryKey, Property, DateTimeType, Entity } from '@mikro-orm/core';

@Entity()
export abstract class BaseEntity {
  @PrimaryKey()
  id?: number;

  /*
  @Property()
  createdAt?=new Date()
  
  @Property({
  type:DataTimeType,onUpdate:()=>new Data()})
  updatedAt?=new Date()

  
  */
}
