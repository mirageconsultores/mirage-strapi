/**
 * post controller
 */

import { factories } from '@strapi/strapi';
import type { Context } from 'koa';

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async find(ctx: Context) {
    ctx.query = {
      ...ctx.query,
      populate: {
        imagen: true,
        previsualizacion: true,
        autores: true,
      },
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx: Context) {
    ctx.query = {
      ...ctx.query,
      populate: {
        imagen: true,
        previsualizacion: true,
        autores: true,
      },
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));
