import 'reflect-metadata';
import gqlServer from '#root/server';

const port = process.env.PORT || 8293;
const server = gqlServer();

server.listen({ port: Number(port) }, () => {
	console.log(`server started on http://localhost:${port}`);
});
