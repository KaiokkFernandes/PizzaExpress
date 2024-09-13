import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token is missing" });
  }


  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, process.env.SECRET_KEY!);

    const { sub } = decoded as TokenPayload;
    req.userId = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
