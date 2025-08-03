import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import translations from "@/lang/en.json";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const products = [
  {
    title: translations.sections.products.items[0].title,
    icon: <MonitorIcon className="size-6" aria-hidden />,
    desc: translations.sections.products.items[0].description,
  },
  {
    title: translations.sections.products.items[1].title,
    icon: <MobileIcon className="size-6" aria-hidden />,
    desc: translations.sections.products.items[1].description,
  },
  {
    title: translations.sections.products.items[2].title,
    icon: <LensIcon className="size-6" aria-hidden />,
    desc: translations.sections.products.items[2].description,
  },
];

export default function ProductsSection() {
  return (
    <section className="container" id="products">
      <div className="@container mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center flex-col text-center gap-y-3"
        >
          <motion.div custom={0} variants={fadeUp}>
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
{translations.sections.products.badge}
            </Badge>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold tracking-tight font-secondary"
          >
{translations.sections.products.title}
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-2xl text-muted-foreground md:text-lg"
          >
{translations.sections.products.description}
          </motion.p>
        </motion.div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 md:mt-16">
          {products.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="group border shadow-none h-full hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardDecorator>{card.icon}</CardDecorator>
                  <h3 className="mt-6 font-medium font-secondary text-center">
                    {card.title}
                  </h3>
                </CardHeader>
                <CardContent className="-mt-6">
                  <p className="text-sm text-center">{card.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">
      {children}
    </div>
  </div>
);

export function MonitorIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M7.142 18.97c-1.957-.07-3.142-.313-3.97-1.142C2 16.657 2 14.771 2 11s0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11s0 5.657-1.172 6.828c-.808.809-1.956 1.06-3.828 1.137"
          opacity=".5"
        />
        <path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427q.08-.003.159 0c.574.03 1.04.496 1.971 1.427c2.026 2.026 3.039 3.039 2.755 3.913a1.5 1.5 0 0 1-.09.218C16.297 21 14.865 21 12 21s-4.298 0-4.715-.819a1.5 1.5 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z" />
      </g>
    </svg>
  );
}

export function MobileIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" />
        <path
          strokeLinecap="round"
          d="M15 19H9m7.748-16.622l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"
          opacity=".5"
        />
      </g>
    </svg>
  );
}

export function LensIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"
        />
        <path
          d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
          opacity=".5"
        />
      </g>
    </svg>
  );
}
