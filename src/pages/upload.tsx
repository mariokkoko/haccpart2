import Link from 'next/link';
import Head from "next/head";

export default function page2() {
    return (
      <>
        <Head>
        <title>Upload Page</title>
        <meta name="description" content="This is the first page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="navbar bg-green-900">
            <Link className="btn byn-ghost text-xl" href="page1">Home</Link>
            <Link className="btn byn-ghost text-xl" href="page2">Upload Photo</Link>
            <Link className="btn byn-ghost text-xl" href="postclick">Post Click Page</Link>
            <Link className="btn byn-ghost text-xl" href="forum">Forum</Link>
          </div>
          <div className="pt-4">
            <h1 className="text-center text-5xl">Upload Page</h1>
          </div>
          <div>
            <h2>Upload photos of a plant to the forum to either report a native plant sighting or ask a question about a plant that you saw.</h2>
          </div>
        </div>  
      </main>
      </>
    );
  }
  