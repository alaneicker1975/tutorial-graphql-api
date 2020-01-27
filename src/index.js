import express from 'express';
import cors from 'cors';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import typedefs from './schema';
import * as rootValue from './resolvers';

const env = process.env.NODE_ENV;
const port = process.env.PORT || 3030;

const app = express();
const schema = buildSchema(typedefs);

app.use(cors());

app.use('/api', cors(), express_graphql({
  schema,
  rootValue,
  graphiql: env === 'development',
}));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});