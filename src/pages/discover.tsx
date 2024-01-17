import Head from "next/head";
import Link from "next/link";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>Discover Page</title>
        <meta name="description" content="This is the first page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="navbar bg-green-900">
            <Link className="btn byn-ghost text-xl" href="/">Home</Link>
            <Link className="btn byn-ghost text-xl" href="/upload">Upload Photo</Link>
            <Link className="btn byn-ghost text-xl" href="/postclick">Post Click Page</Link>
            <Link className="btn byn-ghost text-xl" href="/forum">Forum</Link>
          </div>
          <div className="pt-4">
            <h1 className="text-center text-5xl">Discover Page</h1>
          </div>
          <div className="pt-4">
            <input type="text-center" placeholder="Search Bar" className="input input -bordered w-full max-w-xd text-center text-xl"></input>
          </div>
          <table className="flex table-fixed justify-center items-center">
            <tbody>
            <tr>
              <td>
                <figure className="max-w-lg">
                  <img className="rounded-lg" src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/04/p/n/ohialehua-gettyimages-622449416-1024x683.jpg" alt="image description"></img>
                  <figcaption className="mt-2 text-2xl text-center text-black-500 dark:text-black-400">'Ohi'a Lehua</figcaption>
                </figure>
              </td>
              <td>
                <figure className="max-w-lg">
                  <img className="rounded-lg" src="https://merwinconservancy.org/wp-content/uploads/2016/05/Pritchardia-Hillebrandii-a-native-Hawaiian-palm-SM-1024x682.jpg" alt="image description"></img>
                  <figcaption className="mt-2 text-2xl text-center text-black-500 dark:text-black-400">Loulu Palm</figcaption>
                </figure>
              </td>
              <td>
                <figure className="max-w-lg">
                  <img className="rounded-lg" src="https://irp-cdn.multiscreensite.com/5be3da7c/IMG_4986.jpg" alt="image description"></img>
                  <figcaption className="mt-2 text-2xl text-center text-black-500 dark:text-black-400">Naupaka</figcaption>
                </figure>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}