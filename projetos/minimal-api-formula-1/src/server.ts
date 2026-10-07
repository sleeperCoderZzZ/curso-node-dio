import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
});

const teams = [
  {
    id: 1,
    name: "Ferrari",
    base: "Maranello, Italy",
  },
  {
    id: 2,
    name: "Mercedes",
    base: "Brackley, United Kingdom",
  },
];

const drivers = [
  {
    id: 1,
    name: "Charles Leclerc",
    teamId: 1,
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    teamId: 2,
  },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface driverParams {
  id: string;
}

server.get<{ Params: driverParams }>("/drivers/:id", async (request, response) => {
  const { id } = request.params as driverParams;
  const driver = drivers.find((d) => d.id === parseInt(id));

  if (!driver) {
    response.type("application/json").code(404);
    return { error: "Driver not found" };
  }

  response.type("application/json").code(200);
  return { driver };
});

server.listen({ port: 3000 }, () => {
  console.log("Server is running on port 3000");
});
