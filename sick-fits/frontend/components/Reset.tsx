import Form from "./styles/Form";
import useForm from 'lib/useForm';
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { signinMutation, signinMutationVariables, signUpMutation, signUpMutationVariables } from "types/graphql";
import { CURRENT_USER_QUERY } from "./User";
import ErrorMessage from "components/ErrorMessage";

const RESET_MUTATION = gql`
  mutation resetMutation(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;



export default function Reset({ token }) {

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });
  const [resetMutation, { data: resetMutationData, loading: resetMutationLoading, error: resetMutationError }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  const successfulError = resetMutationData?.redeemUserPasswordResetToken?.code
    ? resetMutationData?.redeemUserPasswordResetToken
    : undefined;

  async function handleSubmit(event: any) {
    event.preventDefault() //Stop form from submitting
    console.log(inputs);
    const response = await resetMutation().catch(() => {console.error});
    console.log(response);
    resetForm();

  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset Your Password</h2>
      <ErrorMessage error={resetMutationError || successfulError}/>
      <fieldset>
          {resetMutationData?.redeemUserPasswordResetToken === null && (
            <p>Success! You can Now sign in</p>
          )}
          <label htmlFor="email">email
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          New Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <button type="submit">Request Reset!</button>
    </Form>
  )
}