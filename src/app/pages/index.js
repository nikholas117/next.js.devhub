import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Head from "next/head";

const LazyComponent = React.lazy(() => import("./lazy-component"));

export default function home() {
  return (
    <div>
      <Head>
        <title>My Next.js Blog</title>
        <meta
          name="description"
          content="A simple blog using Next.js for my project!"
        />
      </Head>

      <h1>Welcome to My Next.js Blog</h1>
      <Image
        src="public/images/1337348.jpg"
        alt="My Image"
        width={500}
        height={300}
      />

      <br />
      <nav>
        <Link href="/ssg">GO TO Static Posts (SSG)</Link>
        <br />
        <Link href="/ssr">GO TO Server Posts (SSR)</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
