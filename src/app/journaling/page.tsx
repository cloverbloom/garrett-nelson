import Link from "next/link";

export default function JournalingPage() {

  return (

    <div className="p-8 font-sans w-2/5">

      <nav className="flex gap-8 heading-3 font-medium">

        <Link href="/">home</Link>

        <Link href="/journaling">current notes system</Link>

        <Link href="/content">recommended content</Link>

      </nav>

      <h1 className="heading-1 font-bold mb-4">journaling</h1>

      <p className="text-body">welcome to the journaling page. write thoughts, notes, or daily logs here.</p>

    </div>

  );

}
