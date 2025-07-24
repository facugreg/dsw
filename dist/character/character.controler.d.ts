import { Request, Response, NextFunction } from 'express';
declare function sanitizeCharacterInput(req: Request, res: Response, next: NextFunction): void;
declare function findAll(req: Request, res: Response): Promise<void>;
declare function findOne(req: Request, res: Response): Promise<void>;
declare function add(req: Request, res: Response): Promise<void>;
declare function update(req: Request, res: Response): Promise<void>;
declare function remove(req: Request, res: Response): Promise<void>;
export { sanitizeCharacterInput, findAll, findOne, update, remove, add };
