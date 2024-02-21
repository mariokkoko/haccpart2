import Link from 'next/link';

export default function page2() {
    return (
      <>
      <div>
        <div className="navbar bg-green-900">
          <Link className="btn byn-ghost text-xl" href="/">Home</Link>
          <Link className="btn byn-ghost text-xl" href="/upload">Upload Photo</Link>
          <Link className="btn byn-ghost text-xl" href="/postclick">Post Click Page</Link>
        </div>

        <h1 className="text-center text-5xl">Forum Page</h1>

        <div className="flex flex-col border-opacity-50">
        <div className="grid h-50 card bg-base-300 rounded-box place-items-center">
          <button className="btn btn-success">Reply</button>
          <button className="btn">Helpful
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </button>
        </div>

        <div className="divider divider-success"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">People's comments would go here I guess</div>
        </div>
      </div>
      </>
    );
  }
  