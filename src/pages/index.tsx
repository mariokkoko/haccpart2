import Head from "next/head";
import Link from "next/link";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="This is the landing page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p className="text-lg">This is the landing page.</p>
          <p>You can navigate to other pages by clicking on the links below.</p>
          <ul>
            <li>• <Link href="/page1" className="underline text-blue-600">This is the link to page one.</Link></li>
            <li>• <Link href="/page2" className="underline text-blue-600">This is the link to page two.</Link></li>
            <li>• <Link href="/page3" className="underline text-blue-600">This is the link to page three.</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
}