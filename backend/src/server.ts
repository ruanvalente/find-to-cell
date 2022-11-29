import Fastify from "fastify";
import cors from "@fastify/cors";

import { userRoutes } from "./routes/user/user";

async function boostrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(userRoutes);

  await fastify.listen({ port: 3000 });
}

boostrap();
