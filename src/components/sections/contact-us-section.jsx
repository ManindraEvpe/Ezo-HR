// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ContactUsForm from "@/components/forms/contact-us-form";

import { Button } from "@/components/ui/button";

export default function ContactUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 md:py-24"
      id="contact-us"
    >
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div variants={fadeUp} className="inline-block">
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">
                Watch How It Works
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-4xl font-secondary">
                See our platform in action
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Our short video walkthrough demonstrates how easy it is to get
                started and shows the key features that make our solution stand
                out.
              </p>
            </motion.div>

            <motion.ul variants={fadeUp} className="space-y-2">
              {[
                "Quick setup process",
                "Intuitive user interface",
                "Advanced features walkthrough",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-2"
                >
                  <CheckIcon />
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild>
                  <Link to="#">Try It Free</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild>
                  <Link to="#">Schedule Demo</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl border shadow-lg"
          >
            <ContactUsForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-primary"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
