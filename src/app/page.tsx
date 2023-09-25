"use client";
// Remember you must use an AuthProvider for
// client components to useSession
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
export default function Home() {
  const { data: session, status } = useSession();
  const theme = useTheme();
  console.log(session);
  const styles = {
    container: {
      backgroundColor: theme.palette.custom.main,
    },
    heading: {
      color: theme.palette.secondary.main, // Apply the custom color to the heading
    },
    button: {
      backgroundColor: theme.palette.cusred.main,
    },
    primarybtn: {
      backgroundColor: theme.palette.primary.main,
    },
    loader:{
      color:theme.palette.loader.main,
    }
  };
  if (status === "loading") {
    return (
      <div className="text-center h-[100vh] w-[100vw] bg-slate-200 flex items-center justify-center">
        <CircularProgress size={100} thickness={5}  style={styles.loader} />
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="container px-10 mx-auto text-center">
        <h1 className="text-slate-900 text-2xl font-extrabold">Please Login</h1>
        <Link href="#" onClick={() => signIn()} className="btn-signin">
          <Button style={styles.primarybtn} variant="contained">
            Click to visit login page
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="container px-10 mx-auto text-center">
      <h1 className="text-slate-900 text-2xl">
        welcome <span className="text-fuchsia-500">{session?.user?.email}</span>
      </h1>
      {session && (
        <Link href="#" onClick={() => signOut()} className="btn-signin">
          <Button style={styles.button} variant="contained">
            Click here to logout
          </Button>
        </Link>
      )}
    </div>
  );
}
