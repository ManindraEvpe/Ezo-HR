import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CertificationsSection() {
  return (
    <section
      className="container pt-24 flex overflow-hidden flex-wrap lg:flex-nowrap"
      id="certifications"
    >
      <div className="w-full lg:w-auto p-20 border rounded-md rounded-b-none lg:rounded-bl-md lg:rounded-tr-none lg:border-r-0 bg-background">
        <h4 className="text-3xl md:text-4xl font-bold tracking-tight font-secondary">
          Certified for Security & Compliance
        </h4>
        <p className="text-muted-foreground md:text-lg">
          We are proud to be certified by leading organizations, ensuring the
          highest quality and standards.
        </p>
      </div>
      <div
        className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-3 
      [&>div]:flex-center
      [&>div]:p-8
      [&>div>img]:grayscale
      [&>div>img]:dark:invert
      [&>div>img]:dark:hover:invert-0
      [&>div>img]:hover:grayscale-0
      [&>div>img]:cursor-pointer
      "
      >
        {/* <div className="col-span-3 flex-center border border-t-0 lg:border-t lg:rounded-r-md lg:rounded-br-none bg-background">
          <Dialog>
            <DialogTrigger>
              <img src="/dun-img.png" className="h-12" alt="" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dun & Bradstreet</DialogTitle>
                <DialogDescription>
                  Scan this QR code to view the certificate
                </DialogDescription>
              </DialogHeader>
              <img src="/dun-cert.png" alt="" />
            </DialogContent>
          </Dialog>
        </div> */}
        <div className="border border-t-0 border-l-0 border-r-0 lg:border-l lg:border-r-0 lg:border-t lg:rounded-tl-none bg-background flex-center">
          <Dialog>
            <DialogTrigger>
              <img src="/iso-img.png" className="h-28" alt="" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>ISO 27701</DialogTitle>
              </DialogHeader>
              <img src="/iso-cert.png" alt="" />
            </DialogContent>
          </Dialog>
        </div>
        <div className="border border-t-0 border-l-0 border-r-0 lg:border-l lg:border-r-0 lg:border-t bg-background flex-center">
          <Dialog>
            <DialogTrigger>
              <img src="/iso-2-img.png" className="h-28" alt="" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>ISO 27701</DialogTitle>
              </DialogHeader>
              <img src="/iso-cert.png" alt="" />
            </DialogContent>
          </Dialog>
        </div>
        <div className="border border-t-0 border-l-0 border-r-0 lg:border-l lg:border-r lg:border-t rounded-b-md lg:rounded-bl-none lg:rounded-r-md bg-background flex-center">
          <Dialog>
            <DialogTrigger>
              <img src="/nqcab-img.png" className="h-28" alt="" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  NQCAB (National Quality Conformity Assessment Body)
                </DialogTitle>
              </DialogHeader>
              <img src="/nqcab-cert.png" alt="" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
