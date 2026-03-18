export default function About() {
  return (
    <div className="page-container flex flex-col gap-8 items-center">
      <section>
        <h1 className="text-brand-primary font-bold uppercase">About</h1>
        <p className="text-brand-grey-700">
          BubbleCo is the number one soap bubble company in the world, and we
          are here to bring fun and amazement to everyone! Whether you are a
          backyard hobbyist or planning a massive event, we have got the bubbles
          for you. We are the go-to spot for bubble lovers, party planners,
          teachers, and anyone who just loves a good bubble!
        </p>
      </section>

      <section>
        <h1 className="text-brand-primary font-bold uppercase">History</h1>
        <p className="text-brand-grey-700">
          BubbleCo was started in 1998 by chemist Dr. Clara Foame, who was
          obsessed with making the perfect bubble! What kicked off as a small
          market stall turned into a full-on production facility by 2005. Today
          we are proud to supply theaters, toy stores, and science museums all
          across the country!
        </p>
      </section>

      <section>
        <h1 className="text-brand-primary font-bold uppercase">
          What We Offer
        </h1>
        <p className="text-brand-grey-700">
          We ave got it all — from classic wand-and-solution kits to giant
          outdoor sets, scented solutions, and bubble machine rentals for
          weddings and parties! We also run Bubble Science workshops for
          schools, because learning is way more fun with bubbles!
        </p>
      </section>

      <div className="bg-brand-primary p-4 rounded-2xl flex flex-col gap-3">
        <h3 className="text-brand-grey-100 font-bold">BubbleCo Headquarters</h3>
        <div className="text-brand-grey-100 flex flex-col">
          <span>14 Lather Lane</span>
          <span>Frothfield, TX 78201</span>
          <span> United States</span>
        </div>
      </div>
    </div>
  );
}
