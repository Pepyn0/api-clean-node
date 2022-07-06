import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('access-control-allow-origin', '*')
  res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE')
  res.setHeader('access-control-allow-headers', 'Content-Type, Authorization')
  next()
}
