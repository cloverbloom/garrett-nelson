import Link from "next/link";

export default function Home() {

  return (

    <div className="min-h-screen flex flex-col items-start justify-start p-8 font-sans space-y-6 w-2/5">

      {/* Header nav */}

      <nav className="flex gap-8 heading-3 font-medium">

        <Link href="/">home</Link>

        <Link href="/journaling">current notes system</Link>

        <Link href="/content">recommended content</Link>

      </nav>

      {/* Intro */}

      <section className="text-body space-y-8">

        <p className="heading-1">hi i'm garrett</p>

        <p>my goal is to provide resources for the person i used to be</p>

        <p>i spent my whole life wanting to be a crazy entrepreneur with lots of freedom & doing meaningful work</p>

        <p>after a while i slowly started realizing that my dreams were not actually happening</p>

        <p>a difficult question i asked myself was - if i didn't get what i wanted in life would it still be worth it?<br/>my honest answer was no</p>
        
        <p>so i quit my cozy corporate job & moved to my dream city - san diego california</p>

        <p>i figured if i put myself on some sort of "death ground" that i would be forced to respond to my dreams or have accept that they weren't going to happen</p>

        <p>so that's what i'm doing right now - i figure to have an extreme life you must go through extreme situations</p>

        <p>my theory - is that most people would actually acomplish their dreams if they had the courage to do this</p>

        <p>this site will act as a representation of atleast who i envision myself to be - if i don't perfectly live up to each item</p>
        
        <p>here you'll find alot of lessons worth sharing<br/>most of them obvious<br/>but all of it valuable</p>

        <p>sometimes i get the idea to write about my mistakes or mainly just my thoughts on life - i get the deep feeling that i could really help alot of people in today's world so drop your email below if you'd care to stay updated</p>
        
        <p>derek.sivers@cdbaby.com</p>
        
        <p>if you wanna contact me ping garrett@cloverbloom.co - my goal is to respond to anyone who takes the time to email</p>
      
      </section>

    </div>

  );

}
