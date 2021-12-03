import Form from "./styles/Form";
import useForm from 'lib/useForm';
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { requestResetMutation, requestResetMutationVariables } from "types/graphql";
import ErrorMessage from "components/ErrorMessage";

const REQUEST_RESET_MUTATION = gql`
 mutation requestResetMutation($email: String!) {
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
}
`;

export default function RequestReset({ token }) {

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  })

  
const [requestResetMutation,{ data: requestResetMutationData, loading: requestResetMutationLoading, error: requestResetMutationError }] = useMutation<requestResetMutation,requestResetMutationVariables>(REQUEST_RESET_MUTATION,{
  refetchQueries: [],
  variables: {
    email: inputs.email,
 }
});
  



  async function handleSubmit(event: any) {
    event.preventDefault() //Stop form from submitting
    console.log(inputs);
    const response = await requestResetMutation().catch(() => { console.error });
    console.log({ requestResetMutationData, requestResetMutationLoading, requestResetMutationError });
    console.log(response);
    resetForm();

  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request a password reset</h2>
      <ErrorMessage error={requestResetMutationError}/>
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
      </fieldset>

      <button type="submit">Submit</button>
    </Form>
  )
}