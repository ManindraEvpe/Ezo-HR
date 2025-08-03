/* eslint-disable no-unused-vars */
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import translations from "@/lang/en.json";

export default function HeroSection() {
  return (
    <section id="hero-section">
      <div className="container px-4 md:px-6 relative">
        <div className="w-full py-20 md:py-24 lg:py-24 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-5xl mx-auto mb-12"
          >
            <a href="https://ezohr.com/login">
              <Button
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
                variant="shadowed"
              >
{translations.sections.hero.tryNow}
                <ArrowUpRight />
              </Button>
            </a>
            <SparklesText>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 font-secondary">
{translations.sections.hero.mainHeading} <br />
                <AuroraText>{translations.sections.hero.subHeading}</AuroraText>
              </h1>
            </SparklesText>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
{translations.sections.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://ezohr.com/login">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
{translations.sections.hero.buttons.startFreeTrial}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base"
                >
{translations.sections.hero.buttons.bookDemo}
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
<span>{translations.sections.hero.features.noCreditCard}</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
<span>{translations.sections.hero.features.freeTrial}</span>
              </div>
              {/* <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
                <span>Cancel anytime</span>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
              <img
                src="/site-demo.png"
                width={1280}
                height={720}
alt={translations.sections.hero.imageAlt}
                className="w-full h-auto"
                priority={"true"}
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
            <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
