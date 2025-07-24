import { Request, Response } from 'express';
declare function findAll(req: Request, res: Response): Promise<void>;
declare function findOne(req: Request, res: Response): Promise<void>;
declare function add(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function update(req: Request, res: Response): Promise<void>;
declare function remove(req: Request, res: Response): Promise<void>;
export { findAll, findOne, update, remove, add };
