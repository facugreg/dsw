import { MikroORM } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';
export declare const orm: MikroORM<MySqlDriver, import("@mikro-orm/mysql").EntityManager<MySqlDriver> & import("@mikro-orm/core").EntityManager<import("@mikro-orm/core").IDatabaseDriver<import("@mikro-orm/core").Connection>>>;
export declare const syncSchema: () => Promise<void>;
