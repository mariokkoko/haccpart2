import Link from 'next/link';

export default function page2() {
    return (
      <>
        <h1>wahhooo</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            
          <Link href="/">Back to home</Link>
        </button>
      </>
    );
  }
  