import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string; // Adicione o campo userId como opcional
    }
  }
}
