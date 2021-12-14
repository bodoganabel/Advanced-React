import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { rules, isSignedIn } from '../access';

enum EProductStatuses {
  DRAFT = 'DRAFT',
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}

export const Product = list({
  // TODO:
  access: {
    create: isSignedIn,
    read: rules.canReadProducts,
    update: rules.canManageProducts,
    delete: rules.canManageProducts,
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      }
    }),
    status: select({
      options: [
        { label: 'Draft', value: EProductStatuses.DRAFT },
        { label: 'Available', value: EProductStatuses.AVAILABLE },
        { label: 'Unavailable', value: EProductStatuses.UNAVAILABLE },
      ],
      defaultValue: EProductStatuses.DRAFT,
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
        inlineConnect: true,
      }
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name','status','photo','price', 'description', ]
    }
  }
})