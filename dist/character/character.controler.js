//const repository = new characterRepository();
function sanitizeCharacterInput(req, res, next) {
    req.body.sanitizedInput = {
        name: req.body.name,
        characterClass: req.body.characterClass,
        level: req.body.level,
        hp: req.body.hp,
        mana: req.body.mana,
        attack: req.body.attack,
        items: req.body.items,
    };
    //se tendrian que hacer validaciones del tipo de datos, que no haya datos maliciosos
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined)
            delete req.body.sanitizedInput[key];
    });
    next();
}
async function findAll(req, res) {
    res.status(500).json({ message: 'wwwww' });
}
async function findOne(req, res) {
    res.status(500).json({ message: 'w' });
}
async function add(req, res) {
    res.status(500).json({ message: 'ww' });
}
async function update(req, res) {
    res.status(500).json({ message: 'wwwwwwwwwwwwwwww' });
}
async function remove(req, res) {
    res.status(500).json({ message: 'wwwww' });
}
export { sanitizeCharacterInput, findAll, findOne, update, remove, add };
//# sourceMappingURL=character.controler.js.map