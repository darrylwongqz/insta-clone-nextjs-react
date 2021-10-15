import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

//Browser...
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          className="w-80"
          src="https://i.ibb.co/YcNHmgk/2880px-Instagram-logo-svg.webp"
        />

        <p className="font-xs italic">
          This is not a REAL app. I built this to familiarize myself on
          TailwindCSS, Next.js and Reactjs
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Middleware...
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
