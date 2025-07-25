// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="w-full py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 w-screen h-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" style={{left: '50%', transform: 'translateX(-50%)'}}></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-secondary">
            Discover Our Suite of Powerful Products
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our products are designed to work seamlessly together, providing a
            comprehensive solution for your HR needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

          {[
            {
              step: "01",
              title: "Web Portal",
              description:
                "Manage all HR tasks online. Easy, fast, and secure. Perfect for HR admins.",
            },
            {
              step: "02",
              title: "Employee App",
              description:
                "Mobile app for employees. Track attendance and requests. Stay connected anywhere.",
            },
            {
              step: "03",
              title: "Lens App",
              description:
                "AI-powered face recognition for attendance. Syncs instantly with EZO HR for secure, real-time tracking.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                {step.step}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
