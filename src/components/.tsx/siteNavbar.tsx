import React from 'react';
import Link from "next/link";

function siteNavbar() {
    return (
    <div><Link href="/">Home</Link> <Link href="/new-ask">Create New Ask</Link> <Link href="/discover">Discover Native Plants</Link> <Link href="/forum">Visit Forum</Link></div>
    );
}

export default siteNavbar;