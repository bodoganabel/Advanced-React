import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { relationship, text } from '@keystone-next/fields';
import { cloudinary } from '../micro-services/cloudinary';
import { Product } from './Product';
import { isSignedIn, rules } from '../access';

console.log('cloudinary:');
console.log(cloudinary);

export const ProductImage = list({
  access: {
    create: isSignedIn,
    read: ()=>true,
    update: rules.canManageProducts,
    delete: rules.canManageProducts,
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',

    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' })
    
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText','product']
    },
    labelField: 'altText' ,
  }
})