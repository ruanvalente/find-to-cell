import { FastifyInstance } from "fastify";
import ShortUniqueId from "short-unique-id";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users", async () => {
    const users = [
      {
        id: new ShortUniqueId({ length: 6 }),
        name: "Ruan Valente",
        email: "ruan@gmail.com",
      },
      {
        id: new ShortUniqueId({ length: 6 }),
        name: "Lorena Torres",
        email: "lorena@gmail.com",
      },
      {
        id: new ShortUniqueId({ length: 6 }),
        name: "José Almeida",
        email: "almeida@gmail.com",
      },
      {
        id: new ShortUniqueId({ length: 6 }),
        name: "Luan Costa",
        email: "luan@gmail.com",
      },
    ];

    return { users };
  });
}
