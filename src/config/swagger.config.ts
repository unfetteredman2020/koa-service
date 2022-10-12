/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-10 14:12:23
 * @LastEditors: 'weixw2014@qq.com'
 * @LastEditTime: 2022-10-10 15:50:33
 */
const path = require('path');
const jsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'API文档',
    version: '1.0',
    description: '文档',
  },
  host: 'localhost:8000', //localhost:8000/swagger
  basePath: '/'
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../router/modules/*.ts')],
};

const swaggerSpec = jsdoc(options);

export default swaggerSpec;
