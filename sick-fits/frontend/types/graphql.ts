/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addToCartMutation
// ====================================================

export interface addToCartMutation_addToCart {
  __typename: "CartItem";
  id: string;
}

export interface addToCartMutation {
  addToCart: addToCartMutation_addToCart | null;
}

export interface addToCartMutationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_ORDER_MUTATION
// ====================================================

export interface CREATE_ORDER_MUTATION_checkout_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
}

export interface CREATE_ORDER_MUTATION_checkout {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  items: CREATE_ORDER_MUTATION_checkout_items[];
}

export interface CREATE_ORDER_MUTATION {
  checkout: CREATE_ORDER_MUTATION_checkout | null;
}

export interface CREATE_ORDER_MUTATIONVariables {
  token: string;
}

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
  price: number | null;
}

export interface CreateProduct {
  /**
   *  Create a single Product item. 
   */
  createProduct: CreateProduct_createProduct | null;
}

export interface CreateProductVariables {
  name: string;
  price: number;
  description: string;
  image?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteProductMutation
// ====================================================

export interface DeleteProductMutation_deleteProduct {
  __typename: "Product";
  id: string;
  name: string | null;
}

export interface DeleteProductMutation {
  /**
   *  Delete a single Product item by ID. 
   */
  deleteProduct: DeleteProductMutation_deleteProduct | null;
}

export interface DeleteProductMutationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PaginationQuery
// ====================================================

export interface PaginationQuery__allProductsMeta {
  __typename: "_QueryMeta";
  count: number | null;
}

export interface PaginationQuery {
  /**
   *  Perform a meta-query on all Product items which match the where clause. 
   */
  _allProductsMeta: PaginationQuery__allProductsMeta | null;
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
  price: number | null;
  photo: AllProducts_allProducts_photo | null;
}

export interface AllProducts {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (AllProducts_allProducts | null)[] | null;
}

export interface AllProductsVariables {
  skip?: number | null;
  first?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeFromCart
// ====================================================

export interface removeFromCart_deleteCartItem {
  __typename: "CartItem";
  id: string;
}

export interface removeFromCart {
  /**
   *  Delete a single CartItem item by ID. 
   */
  deleteCartItem: removeFromCart_deleteCartItem | null;
}

export interface removeFromCartVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: requestResetMutation
// ====================================================

export interface requestResetMutation_sendUserPasswordResetLink {
  __typename: "SendUserPasswordResetLinkResult";
  code: PasswordResetRequestErrorCode;
  message: string;
}

export interface requestResetMutation {
  sendUserPasswordResetLink: requestResetMutation_sendUserPasswordResetLink | null;
}

export interface requestResetMutationVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resetMutation
// ====================================================

export interface resetMutation_redeemUserPasswordResetToken {
  __typename: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: string;
}

export interface resetMutation {
  redeemUserPasswordResetToken: resetMutation_redeemUserPasswordResetToken | null;
}

export interface resetMutationVariables {
  email: string;
  password: string;
  token: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEARCH_PRODUCTS_QUERY
// ====================================================

export interface SEARCH_PRODUCTS_QUERY_searchTerms_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SEARCH_PRODUCTS_QUERY_searchTerms_photo {
  __typename: "ProductImage";
  image: SEARCH_PRODUCTS_QUERY_searchTerms_photo_image | null;
}

export interface SEARCH_PRODUCTS_QUERY_searchTerms {
  __typename: "Product";
  id: string;
  name: string | null;
  photo: SEARCH_PRODUCTS_QUERY_searchTerms_photo | null;
}

export interface SEARCH_PRODUCTS_QUERY {
  /**
   *  Search for all Product items which match the where clause. 
   */
  searchTerms: (SEARCH_PRODUCTS_QUERY_searchTerms | null)[] | null;
}

export interface SEARCH_PRODUCTS_QUERYVariables {
  searchTerm: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signinMutation
// ====================================================

export interface signinMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface signinMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess {
  __typename: "UserAuthenticationWithPasswordSuccess";
  item: signinMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item;
}

export interface signinMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure {
  __typename: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: string;
}

export type signinMutation_authenticateUserWithPassword = signinMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess | signinMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure;

export interface signinMutation {
  authenticateUserWithPassword: signinMutation_authenticateUserWithPassword;
}

export interface signinMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signOutMutation
// ====================================================

export interface signOutMutation {
  endSession: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpMutation
// ====================================================

export interface signUpMutation_createUser {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface signUpMutation {
  /**
   *  Create a single User item. 
   */
  createUser: signUpMutation_createUser | null;
}

export interface signUpMutationVariables {
  email: string;
  name: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUserQuery
// ====================================================

export interface CurrentUserQuery_authenticatedItem_cart_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CurrentUserQuery_authenticatedItem_cart_product_photo {
  __typename: "ProductImage";
  image: CurrentUserQuery_authenticatedItem_cart_product_photo_image | null;
}

export interface CurrentUserQuery_authenticatedItem_cart_product {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  photo: CurrentUserQuery_authenticatedItem_cart_product_photo | null;
}

export interface CurrentUserQuery_authenticatedItem_cart {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
  product: CurrentUserQuery_authenticatedItem_cart_product | null;
}

export interface CurrentUserQuery_authenticatedItem {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
  cart: CurrentUserQuery_authenticatedItem_cart[];
}

export interface CurrentUserQuery {
  authenticatedItem: CurrentUserQuery_authenticatedItem | null;
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
  price: number | null;
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

// ====================================================
// GraphQL mutation operation: UpdateSingleProduct
// ====================================================

export interface UpdateSingleProduct_updateProduct {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
}

export interface UpdateSingleProduct {
  /**
   *  Update a single Product item by ID. 
   */
  updateProduct: UpdateSingleProduct_updateProduct | null;
}

export interface UpdateSingleProductVariables {
  id: string;
  name?: string | null;
  description?: string | null;
  price?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PasswordAuthErrorCode {
  FAILURE = "FAILURE",
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
  SECRET_MISMATCH = "SECRET_MISMATCH",
  SECRET_NOT_SET = "SECRET_NOT_SET",
}

export enum PasswordResetRedemptionErrorCode {
  FAILURE = "FAILURE",
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
  TOKEN_MISMATCH = "TOKEN_MISMATCH",
  TOKEN_NOT_SET = "TOKEN_NOT_SET",
  TOKEN_REDEEMED = "TOKEN_REDEEMED",
}

export enum PasswordResetRequestErrorCode {
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
