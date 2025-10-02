export default function ContentPage() {

  return (

    <div className="min-h-screen flex flex-col items-start justify-start p-8 font-sans space-y-8 w-2/5">

      {/* Header nav */}

      <nav className="flex gap-8 tabs font-medium">

        <link href="/">HOME</link>

        <link href="/journaling">CURRENT NOTES SYSTEM</link>

        <link href="/content">RECOMMENDED CONTENT</link>

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
