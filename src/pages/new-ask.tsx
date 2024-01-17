import Head from "next/head";
import siteNavbar from "../components/siteNavbar";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>New Ask</title>
        <meta name="description" content="Create a forum post to get help identifying a plant." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <siteNavbar/>
        <div className="px-48 py-24">
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </main>
    </>
  );
}