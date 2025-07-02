// config/logger.ts
export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
  // Nivel 'silly' para tener todos los logs: silly, debug, info, warn, error
  level: env('STRAPI_LOG_LEVEL', 'silly'),
  // Muestra la pila de errores completa en consola
  exposeInContext: true,
});
