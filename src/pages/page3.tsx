import Head from "next/head";
import Link from "next/link";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>Page One</title>
        <meta name="description" content="This is the first page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </main>
    </>
  );
}