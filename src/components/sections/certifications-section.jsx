export default function CertificationsSection() {
  return (
    <section
      className="container pt-24 flex overflow-hidden flex-wrap lg:flex-nowrap"
      id="certifications"
    >
      <div className="p-20 border rounded-md rounded-b-none lg:rounded-bl-md lg:rounded-tr-none lg:border-r-0">
        <h4 className="text-3xl md:text-4xl font-bold tracking-tight">
          Our certifications say it all.
        </h4>
        <p className="text-muted-foreground md:text-lg">
          We are proud to be certified by leading organizations, ensuring the
          highest quality and standards.
        </p>
      </div>
      <div
        className="grid grid-cols-3 grid-rows-2 
      [&>div]:flex-center
      [&>div]:p-8
      [&>div>img]:grayscale
      [&>div>img]:dark:invert
      [&>div>img]:dark:hover:invert-0
      [&>div>img]:hover:grayscale-0
      [&>div>img]:cursor-pointer
      "
      >
        <div className="col-span-3 flex-center border border-t-0 lg:border-t lg:rounded-r-md lg:rounded-br-none">
          <img src="/dun-img.png" className="h-12" alt="" />
        </div>
        <div className="border border-t-0 border-r-0 rounded-bl-md lg:rounded-bl-none">
          <img src="/iso-img.png" className="h-24" alt="" />
        </div>
        <div className="border border-r-0 border-t-0">
          <img src="/iso-2-img.png" className="h-24" alt="" />
        </div>
        <div className="border border-t-0 rounded-br-md">
          <img src="/nqcab-img.png" className="h-24" alt="" />
        </div>
      </div>
    </section>
  );
}
