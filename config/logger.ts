// config/logger.ts
import { StrapiLoggerConfig } from '@strapi/strapi';

export default ({ env }): StrapiLoggerConfig => ({
  level: env('STRAPI_LOG_LEVEL', 'silly'),
  // Opcional: muestra la pila de errores en consola
  exposeInContext: true,
});
