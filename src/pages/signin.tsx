import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const SignIn = ({providers}: {providers: AppProps}) => {

  return (
    <>
     {Object.values(providers).map((provider) => (
      <button 
        key={provider.id} 
        onClick={() => 
          signIn(provider.id, {
        callbackUrl: `${window.location.origin}`
        })
      }>
        Sign in with Google
      </button>
     ))}
    </>
  );
};

export default SignIn;


export const getServerSideProps: GetServerSideProps = async(context) => {
  const providers = await getProviders();
  return{
    props: { providers },
  }
}