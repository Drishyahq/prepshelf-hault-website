import Image from "next/image";

const details = [
  {
    label: "Status",
    title: "PrepShelf is offline for now",
    text:
      "Exams are over, so we are taking the website down while we improve the product for the next season.",
  },
  {
    label: "Premium",
    title: "Your remaining access is protected",
    text:
      "Anyone whose premium was active when we paused will have that subscription resumed when PrepShelf is live again.",
  },
  {
    label: "Support",
    title: "Questions can still reach us",
    text:
      "For account, premium, or support concerns, email prepshelf.work@gmail.com.",
  },
];

function StudyDeskScene() {
  return (
    <div className="study-desk" aria-hidden="true">
      <div className="desk-lamp">
        <span />
      </div>
      <div className="book-stack book-stack-one">
        <span />
        <span />
        <span />
      </div>
      <div className="book-stack book-stack-two">
        <span />
        <span />
      </div>
      <div className="paper-slip">
        <span>PYQ</span>
        <span>Notes</span>
        <span>Syllabus</span>
      </div>
      <div className="desk-line" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--paper-bg)] text-[var(--ink-strong)] lg:h-screen lg:overflow-hidden">
      <div className="ambient-grid" aria-hidden="true" />

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-rows-[auto_auto] px-5 py-5 sm:px-8 lg:h-screen lg:min-h-0 lg:grid-rows-[1fr_auto] lg:px-10 lg:py-6">
        <div className="grid items-center gap-5 pb-4 pt-1 lg:grid-cols-[minmax(0,0.98fr)_minmax(330px,0.64fr)] lg:gap-8 lg:py-2">
          <div className="max-w-4xl">
            <p className="notice-kicker">PrepShelf pause notice</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.05] text-balance text-[var(--ink-strong)] sm:text-5xl lg:text-6xl">
              This semester ends here,
              <span className="block text-[var(--amber-deep)]">
                PrepShelf will return sharper.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:mt-5 sm:text-lg">
              Thank you for studying with us. Since the exams are over, we are
              taking PrepShelf down for now. When we come back, it will be more
              refined, more reliable, and better built for the next round of
              preparation.
            </p>
           
          </div>

          <aside className="relative min-h-[210px] sm:min-h-[270px] lg:min-h-[390px]">
            <StudyDeskScene />
          </aside>
        </div>

        <footer className="grid gap-3 border-t border-[var(--line)] pt-3 md:grid-cols-3 lg:pt-3">
          {details.map((item) => (
            <section key={item.label} className="detail-block">
              <p className="text-[0.72rem] font-bold uppercase text-[var(--accent-blue)]">
                {item.label}
              </p>
              <h2 className="mt-1.5 text-base font-semibold leading-5 text-[var(--ink-strong)]">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm leading-5 text-[var(--ink-soft)]">
                {item.text}
              </p>
            </section>
          ))}
        </footer>
      </section>
    </main>
  );
}
