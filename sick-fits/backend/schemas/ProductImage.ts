import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { relationship, text } from '@keystone-next/fields';
import { cloudinary } from '../micro-services/cloudinary';
import { Product } from './Product';

console.log('cloudinary:');
console.log(cloudinary);

export const ProductImage = list({
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