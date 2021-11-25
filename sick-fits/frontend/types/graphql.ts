/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProduct
// ====================================================

export interface CreateProduct_createProduct {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  priceCents: number | null;
}

export interface CreateProduct {
  /**
   *  Create a single Product item. 
   */
  createProduct: CreateProduct_createProduct | null;
}

export interface CreateProductVariables {
  name: string;
  priceCents: number;
  description: string;
  image?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllProducts
// ====================================================

export interface AllProducts_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface AllProducts_allProducts_photo {
  __typename: "ProductImage";
  image: AllProducts_allProducts_photo_image | null;
  altText: string | null;
}

export interface AllProducts_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  status: string | null;
  priceCents: number | null;
  photo: AllProducts_allProducts_photo | null;
}

export interface AllProducts {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (AllProducts_allProducts | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SingleItem
// ====================================================

export interface SingleItem_Product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SingleItem_Product_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: SingleItem_Product_photo_image | null;
}

export interface SingleItem_Product {
  __typename: "Product";
  name: string | null;
  priceCents: number | null;
  description: string | null;
  photo: SingleItem_Product_photo | null;
}

export interface SingleItem {
  /**
   *  Search for the Product item with the matching ID. 
   */
  Product: SingleItem_Product | null;
}

export interface SingleItemVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
