'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div className='container px-10 mx-auto text-center'>
      <h1 className='text-rose-400 text-2xl'>human</h1>
      {session && (
          <Link href="#" onClick={() => signOut()} className="btn-signin">
            Sign out
          </Link>
        )}
        {!session && (
          <Link href="#" onClick={() => signIn()} className="btn-signin">
            Sign in
          </Link>
        )}
    </div>
  )
}
