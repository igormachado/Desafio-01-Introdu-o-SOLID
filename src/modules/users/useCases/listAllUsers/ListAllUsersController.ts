import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = request.headers.user_id as string;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).json(users);
    } catch (error) {
      return response.status(400).json({ error: "Error" });
    }
  }
}

export { ListAllUsersController };
