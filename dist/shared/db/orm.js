import { MikroORM } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { MySqlDriver } from '@mikro-orm/mysql';
export const orm = await MikroORM.init({
    driver: MySqlDriver,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'hc4gmo',
    metadataProvider: TsMorphMetadataProvider,
    clientUrl: 'mysql://dsw:dsw@localhost:3306/hc4gmo',
    highlighter: new SqlHighlighter(),
    debug: true,
    schemaGenerator: {
        //never in production
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: [],
    },
});
export const syncSchema = async () => {
    const generator = orm.getSchemaGenerator();
    /*
    await generator.dropSchema()           permite borrar y crear desde cero el schema, en caso de que updateSchema falle y que no se pueda actualizar
    await generator.createSchema()
  
    */
    await generator.updateSchema();
};
//# sourceMappingURL=orm.js.map