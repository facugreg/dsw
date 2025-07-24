import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Character } from './character.entity.js';
import { Collection } from '@mikro-orm/core';
export declare class CharacterClass extends BaseEntity {
    name: string;
    description: string;
    characters: Collection<Character, object>;
}
