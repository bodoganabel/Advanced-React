import { gql, useQuery } from "@apollo/client";


export const CURRENT_USER_QUERY = gql`
    query CurrentUserQuery {
        authenticatedItem {
            ...on User {
                id
                email
                name
                cart {
                    id
                    quantity
                    product {
                        id
                        name
                        priceCents
                        description
                        photo {
                            image {
                                publicUrlTransformed
                            }
                        }
                    }
                }
            }
        }
    }
`;


export function useUser() {
    const { data } = useQuery(CURRENT_USER_QUERY)
    return data?.authenticatedItem;
}