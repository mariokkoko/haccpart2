import Link from 'next/link';

export default function page2() {
    return (
      <>
      <div>
        <h1>dis da upload page</h1>
        <button className="btn btn-primary">
            
          <Link href="/">Back to home</Link>
        </button>

        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
        </div>
      </>
    );
  }
  