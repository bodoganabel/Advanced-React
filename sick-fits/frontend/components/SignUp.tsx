import Form from "./styles/Form";
import useForm from 'lib/useForm';
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { signinMutation, signinMutationVariables, signUpMutation, signUpMutationVariables } from "types/graphql";
import { CURRENT_USER_QUERY } from "./User";
import ErrorMessage from "components/ErrorMessage";

const SIGNUP_MUTATION = gql`
 mutation signUpMutation($email: String!, $name: String!, $password: String!) {
createUser(data:{
  email: $email,
  name: $name,
  password: $password
}) {
  id
  email
  name
}
}
`;


export default function SignIn() {

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  
const [signUpMutation,{ data: signUpMutationData, loading: signUpMutationLoading, error: signUpMutationError }] = useMutation<signUpMutation,signUpMutationVariables>(SIGNUP_MUTATION,{
   variables: {
     name: inputs.name,
     email: inputs.email,
     password: inputs.password
  }
  });

  async function handleSubmit(event: any) {
    event.preventDefault() //Stop form from submitting
    console.log(inputs);
    const response = await signUpMutation().catch(() => {console.error});
    console.log(response);
    resetForm();

  }

  if (signUpMutationData?.createUser) {
    return <p className="">
      Signed Up with { signUpMutationData.createUser.email} - Please Go Head and Sign in!
    </p>
  }
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up For an Account</h2>
      <ErrorMessage error={signUpMutationError}/>
      <fieldset>
        <label htmlFor="name">Your Name
          <input
          
            type="name"
            name="name"
            placeholder="name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
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