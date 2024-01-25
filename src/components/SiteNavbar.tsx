import React from "react";
import Link from "next/link";

export default function SiteNavbar() {
    return(
        <div className="navbar bg-green-900">
            <Link className="btn byn-ghost text-xl" href="/">Home</Link>
            <Link className="btn byn-ghost text-xl" href="/upload">Upload Photo</Link>
            <Link className="btn byn-ghost text-xl" href="/postclick">Post Click Page</Link>
            <Link className="btn byn-ghost text-xl" href="/forum">Forum</Link>
        </div>
    );
}