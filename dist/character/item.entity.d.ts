import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Collection } from '@mikro-orm/core';
import { Character } from './character.entity.js';
export declare class Item extends BaseEntity {
    name: string;
    description: string;
    characters: Collection<Character, object>;
}
