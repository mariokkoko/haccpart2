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
          <p className="text-lg">This is the first page, it was created by Talia.</p>
          <p>You can navigate back to the landing page by clicking <Link href="/" className="underline text-blue-600">here</Link>.</p>
        </div>
      </main>
    </>
  );
}