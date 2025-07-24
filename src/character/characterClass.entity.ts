import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Character } from './character.entity.js';
import {
  Cascade,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Collection,
} from '@mikro-orm/core';

@Entity()
export class CharacterClass extends BaseEntity {
  @Property({ nullable: false, unique: true })
  name!: string;
  @Property()
  description!: string;
  @OneToMany(() => Character, (character) => character.characterClass, {
    cascade: [Cascade.ALL],
  })
  characters = new Collection<Character>(this);
}
