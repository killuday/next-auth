'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  const { data: session,status } = useSession();
  console.log(session)
  if(status==='loading'){
    return(
      <div className="text-center">
        <h1 className="text-slate-900 text-4xl">Loading....</h1>
      </div>
    )
    
  }
  if(status==='unauthenticated'){
    return(
      <div className='container px-10 mx-auto text-center'>
      <h1 className='text-slate-900 text-2xl font-extrabold'>Please Login</h1>     
          <Link href="#" onClick={() => signIn()} className="btn-signin">
            Sign in
          </Link>
    </div>
    )
  }
  return (
    <div className='container px-10 mx-auto text-center'>
      <h1 className='text-slate-900 text-2xl'>welcome <span className="text-fuchsia-500">{session?.user?.email}</span></h1>
      {session && (
          <Link  href="#" onClick={() => signOut()} className="btn-signin">
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
