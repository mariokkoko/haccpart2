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
          <div className="navbar bg-green-900"></div>
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://1.bp.blogspot.com/-CL_cudJVWKE/X5M79d58n4I/AAAAAAAABoU/Zv9vgFheK-UupasFhNKIVX5JyhVv9vT1wCLcBGAsYHQ/s2048/IMG_1077.JPG)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
         <h1 className="mb-50 text-8xl font-bold justify-center">COOL PLANT WEBSITE</h1>
         <p className="mb-5 text-5xl">Learn more about Hawaii's native plants.</p>  
         <button className="btn">Get Started Below </button>
        </div>
        </div>
        </div>

        <div className = "flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <img src="https://pictarts.com/25/material/08-free-download/0800-image-m.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="text-5xl card-title">UPLOAD</h2>
        <p className="text-2xl">Create a post for the forum that reports a native plant sighting or asks a question for others to answer!</p>
       <div className="card-actions">
       <button className="btn bg-green-600"><Link href="/upload">Upload Post</Link></button>
       </div>
       </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <img src="https://cdn-icons-png.flaticon.com/512/3090/3090600.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="text-5xl card-title">DISCOVER</h2>
        <p className="text-2xl">Search our collection of native plants and learn more about them!</p>
       <div className="card-actions">
       <button className="btn bg-green-600"><Link href="/discover">Discover More</Link></button>
       </div>
       </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <img src="https://cdn.pixabay.com/photo/2020/11/06/09/05/plant-5717237_960_720.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="text-5xl card-title">FORUM</h2>
        <p className="text-2xl">Visit the community forum to view commonly asked questions, answers, and more!</p>
       <div className="card-actions">
       <button className="btn bg-green-600"><Link href="/forum">Visit Forum</Link></button>
       </div>
       </div>
      </div>
      </div>
         </div>
      </main>
    </>
  );
}