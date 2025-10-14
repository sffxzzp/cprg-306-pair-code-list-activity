import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>Pair Programming List Component Activity</h1>
        </header>
        <section>
          <header>
            <h2>Coffee Card Grid Layout</h2>
            <p>
              Create a set of cards and card layout component based on the
              following jsx.
            </p>
          </header>
          <div>
            {/* TODO: Create a responsive card grid here. use the following to template your card content and style with tailwind */}
            <article>
              <header>
                <div>{/* IMG Goes Here */}</div>
                <div>
                  <h3>Card Title</h3>
                  <p>
                    <strong>Card subheading</strong>
                  </p>
                </div>
              </header>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet, temporibus.
                </p>
                <div>
                  {/* The Link will follow up to a separate dynamic route that we'll make in a later lab */}
                  <Link href="#">Secondary Action</Link>
                  <button>Primary Action</button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 GROUP NAME</p>
      </footer>
    </div>
  );
}
