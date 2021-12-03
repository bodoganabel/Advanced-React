import Form from "./styles/Form";
import useForm from 'lib/useForm';
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { signinMutation, signinMutationVariables } from "types/graphql";
import { CURRENT_USER_QUERY } from "./User";
import ErrorMessage from "components/ErrorMessage";

const SIGNIN_MUTATION = gql`
 mutation signinMutation($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
  ...on UserAuthenticationWithPasswordSuccess {
      item {
        id
        email
        name
      }
    }

  ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
  }
}
`;

export default function SignIn() {

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  const [signinMutation, { data: signinMutationData, loading: signinMutationLoading, error: signinMutationError }] = useMutation<signinMutation, signinMutationVariables>(SIGNIN_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    variables: {
      email: inputs.email,
      password: inputs.password
    }
  });

  async function handleSubmit(event: any) {
    event.preventDefault() //Stop form from submitting
    console.log(inputs);
    const response = await signinMutation();
    console.log(response);
    resetForm();

  }

  const error = signinMutationData?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure" ? signinMutationData.authenticateUserWithPassword : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      <ErrorMessage error={error}/>
      <fieldset>
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
        <label htmlFor="password">password
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

      </fieldset>

      <button type="submit">Submit</button>
    </Form>
  )
}