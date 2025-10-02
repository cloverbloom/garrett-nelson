import Link from "next/link";

export default function ContentPage() {

  return (

    <div className="min-h-screen flex flex-col items-start justify-start p-8 font-sans space-y-8 w-2/5">

      {/* Header nav */}

      <nav className="flex gap-8 tabs font-medium">

        <Link href="/">HOME</Link>

        <Link href="/journaling">CURRENT NOTES SYSTEM</Link>

        <Link href="/content">RECOMMENDED CONTENT</Link>

      </nav>

      {/* Intro */}

      <section className="paragraph space-y-8">

        <p className="title">RECOMMENDED CONTENT</p>

        <p>here is content that inspired me for atleast one of the values i have listed</p>
      
        <p>everything that's red is something that changed my perspective & redefined me in some way</p>

      </section>

    </div>

  );

}
