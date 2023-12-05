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
          <Link className="underline text-blue-600" href="/">ur mom this is a link</Link>
        </div>
      </main>
    </>
  );
}