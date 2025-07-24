import 'reflect-metadata';
import express from 'express';
import { characterRouter } from './character/character.routes.js';
//import { Character } from './character/character.entity.js';
//import { characterRepository } from './character/character.repository.js';
import { characterClassRouter } from './character/characterClass.routes.js';
import { orm, syncSchema } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
const app = express();
app.use(express.json());
//luego de las middlewares base
//se tendrian que hacer validaciones del tipo de datos, que no haya datos maliciosos
app.use((req, res, next) => {
    RequestContext.create(orm.em, next);
});
//antes de las rutas y middlewares de negocio
app.use('/api/characters', characterRouter);
app.use('/api/characters/classes', characterClassRouter);
app.use((req, res) => {
    res.status(404).send({
        message: 'Resource not found',
    });
});
await syncSchema(); //never in rp
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
//# sourceMappingURL=app.js.map