import Head from "next/head";
import Link from "next/link";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title >Landing Page</title>
        <meta name="description" content="This is the landing page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
        <div className="navbar bg-green-800 text-primary-content">
       <p className = "text-center text-base-300 text-9xl">COOL PLANT WEBSITE</p>
        </div>
          <p className="text-center text-5xl">This is the landing page.</p>
          <p className = "text-center text-2xl">You can navigate to other pages by clicking on the images below.</p>

          <p className = "text-center text-3xl">ADD A COOL DESCRIPTION HERE!</p>

          <ul>

        <div className = "flex justify-center">

        <a href="/upload">
        <img className = "w-80- h-80" src="https://pictarts.com/25/material/08-free-download/0800-image-m.png" alt="" />
    </a>
          
    <a href="/discover">
        <img className = "w-80 h-80" src="https://cdn-icons-png.flaticon.com/512/3090/3090600.png" alt="" />
    </a>

    <a href="/forum">
        <img className="rounded-t-lg w-80 h-80" src="https://cdn.pixabay.com/photo/2020/11/06/09/05/plant-5717237_960_720.png" alt="" />
    </a>
      </div>

    <div className = "flex justify-center">

    <button className="btn bg-green-600 w-80">
            
            <Link href="/upload">UPLOAD</Link>
      </button>

      <button className="btn bg-green-600 w-80">
            
          <Link href="/discover">DISCOVER</Link>
    </button>

    <button className="btn bg-green-600 w-80">
            
          <Link href="/forum">FORUM</Link>
    </button>
    </div>

          </ul>

        </div>
      </main>
    </>
  );
}