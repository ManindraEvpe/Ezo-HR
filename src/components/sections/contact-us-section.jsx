// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MailCheck, Headset } from "lucide-react";

import ContactUsForm from "@/components/forms/contact-us-form";
import { Badge } from "@/components/ui/badge";

export default function ContactUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 md:py-16"
      // id="contact-us"
    >
      <div className="flex flex-col items-center mb-6">
        <Badge
          className="p-2 rounded-full bg-background text-sm px-4"
          variant="outline"
        >
          Contact Us
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-secondary mt-4">
          Get in Touch with Our Team
        </h2>
        <p className="max-w-4xl text-muted-foreground md:text-lg text-center mt-2">
          Whether you need product guidance, sales assistance, or customer
          support we’re ready to help. Connect with the right team and expect a
          response within 1–2 business days.
        </p>
      </div>

      <div className="relative text-primary h-px w-full my-12 max-w-2xl mx-auto">
        <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#3b82f6_4px,#3b82f6_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 2xl:max-w-[1100px]">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Contact Cards */}
          <div className="flex flex-col gap-6 h-full">
            <Card className="flex flex-col flex-grow h-full shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Support Team</CardTitle>
                <CardDescription>
                  Need help with your account, services, or have technical
                  questions? Our support team is here to assist.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm mt-auto">
                <div className="flex items-center gap-2">
                  <MailCheck className="size-5 text-muted-foreground" />
                  <a
                    href="mailto:support@ezohr.com"
                    className="hover:underline"
                  >
                    support@ezohr.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailCheck className="size-5 text-muted-foreground" />
                  <a
                    href="mailto:contact@ezohr.com"
                    className="hover:underline"
                  >
                    contact@ezohr.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Headset className="size-5 text-muted-foreground" />
                  <a href="tel:+91-9652009244" className="hover:underline">
                    +91-9652009244
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col flex-grow h-full shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Sales Team</CardTitle>
                <CardDescription>
                  Interested in learning more about our solutions or requesting
                  a demo? Get in touch with our sales experts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm mt-auto">
                <div className="flex items-center gap-2">
                  <MailCheck className="size-5 text-muted-foreground" />
                  <a href="mailto:sales@ezohr.com" className="hover:underline">
                    sales@ezohr.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Headset className="size-5 text-muted-foreground" />
                  <a href="tel:+91-9030505922" className="hover:underline">
                    +91-9030505922
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] rounded-xl border shadow-lg flex items-center"
          >
            <ContactUsForm />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 mt-6 h-full">
          {/* Address Cards - Responsive Layout */}
          <div className="flex flex-col md:flex-row gap-6 h-full items-stretch">
            <Card className="flex flex-col h-36 flex-1 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">
                  Registers Office Address
                </CardTitle>
                <CardDescription>
                  H.No- 2-1-349/31/1, Plot No-31 Green Field Colony, Road No-3
                  Mamta Nagar, Hyderabad – 500068 Telangana, India
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col h-36 flex-1 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">
                  Operational Office Address
                </CardTitle>
                <CardDescription>
                  H.No. 4-7-18/5/1 THE SURABHIMAHAS Raghavendra Nagar Colony
                  Nacharam, Medchal-Malkajigiri Dist HYDERABAD, TELANGANA,
                  Pin:500076.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
