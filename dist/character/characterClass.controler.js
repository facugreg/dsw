import { orm } from '../shared/db/orm.js';
import { CharacterClass } from './characterClass.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const characterClasses = await em.find(CharacterClass, {});
        res
            .status(200)
            .json({ message: 'found all character classes', data: characterClasses });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const id = Number.parseInt(req.params.id);
        const characterClass = await em.findOneOrFail(CharacterClass, { id });
        res
            .status(200)
            .json({ message: 'found character class', data: characterClass });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const characterClass = em.create(CharacterClass, req.body);
        await em.flush();
        res
            .status(201)
            .json({ message: 'character class created', data: characterClass });
    }
    catch (error) {
        if (error.name === 'EntityNotFound') {
            return res.status(404).json({ message: 'Character class not found' });
        }
        res.status(500).json({
            message: error.message,
        });
    }
}
async function update(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
async function remove(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
export { findAll, findOne, update, remove, add };
//# sourceMappingURL=characterClass.controler.js.map