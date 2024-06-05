require('dotenv').config();

import { init } from './utils';
import { connection } from './database/database.connection';
import { RedisClient } from './utils/redis.utils';

const app = init();

const PORT = process.env.PORT || '3000';
console.log(process.env.PORT)
console.log(process.env.DB_URI)
connection(`${process.env.DB_URI}`)
  .then(async () => {
    await RedisClient.connect();
    app.listen(PORT, async () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch(console.error);

module.exports = app;
