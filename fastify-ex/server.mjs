import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/', async function handler (request, reply) {
  return 'Hello fastify!'
})

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
