import Form from "./styles/Form";
import useForm from 'lib/useForm';
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { signOutMutation } from "types/graphql";
import { CURRENT_USER_QUERY } from "./User";
import ErrorMessage from "components/ErrorMessage";


const SIGN_OUT_MUTATION = gql`
  mutation signOutMutation {
    endSession
  }
`;



export default function SignOut() {

  const [signOutMutation, { data: signOutMutationData, loading: signOutMutationLoading, error: signOutMutationError }] = useMutation<signOutMutation>(SIGN_OUT_MUTATION, {
  refetchQueries: [{query: CURRENT_USER_QUERY}],
  variables: {
  }
  });

  return (

    <button type="button" onClick={() => { signOutMutation(); }}>Sign Out</button>
  )
}