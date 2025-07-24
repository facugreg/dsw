import { Rel } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { CharacterClass } from './characterClass.entity.js';
import { Item } from './item.entity.js';
export declare class Character extends BaseEntity {
    name: string;
    characterClass: Rel<CharacterClass>;
    level: number;
    hp: number;
    mana: number;
    attack: number;
    items: Item[];
}
