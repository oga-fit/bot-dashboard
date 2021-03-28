import { Button } from "@material-ui/core";
import { providers, signIn } from "next-auth/client";
import { Provider } from "next-auth/providers";

export default function SignIn({ providers }) {
  return (
    <>
      <div className="container">
        <h3>Sign in with one of the providers below.</h3>
        {Object.values(providers).map((provider: Provider) => (
          <div key={provider.name}>
            <Button variant="contained" onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};
