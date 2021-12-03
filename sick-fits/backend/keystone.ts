import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { CartItem } from './schemas/CartItem';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data/index';
import { sendPasswordResetEmail } from './lib/mail';
const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How longs should they stay sign in?
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    //TODO: add initial roles here
  },
  passwordResetLink: {
    async sendToken(args: any) {
      await console.log(args)
      await sendPasswordResetEmail(args.token, args.identity);
    },
  }
})

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    async onConnect(keystone) {
      console.log(`Connected to the database`);
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }

    },
  },
  graphql: {},
  lists: createSchema({
    //schema items go in here
    User,
    Product,
    ProductImage,
    CartItem
  }),
  ui: {
    //Show the ui only for people that passes this test
    isAccessAllowed: ({ session }) => {
      console.log(session)
      return !!session?.data;
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: 'id',
  }),
}));