import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  FileText,
  GitBranchPlus,
  IdCardLanyard,
  ReceiptText,
  SquareCheck,
  Users,
} from "lucide-react";
import translations from "@/lang/en.json";

export default function SolutionsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: translations.sections.solutions.features[0].title,
      description: translations.sections.solutions.features[0].description,
      icon: <GitBranchPlus className="size-5" />,
    },
    {
      title: translations.sections.solutions.features[1].title,
      description: translations.sections.solutions.features[1].description,
      icon: <IdCardLanyard className="size-5" />,
    },
    {
      title: translations.sections.solutions.features[2].title,
      description: translations.sections.solutions.features[2].description,
      icon: <Building2 className="size-5" />,
    },
    {
      title: translations.sections.solutions.features[3].title,
      description: translations.sections.solutions.features[3].description,
      icon: <Users className="size-5" />,
    },
    {
      title: translations.sections.solutions.features[4].title,
      description: translations.sections.solutions.features[4].description,
      icon: <SquareCheck className="size-5" />,
    },
    {
      title: translations.sections.solutions.features[5].title,
      description: translations.sections.solutions.features[5].description,
      icon: <Calendar className="size-5" />,
    },
    {
      title: translations.sections.solutions.features[6].title,
      description: translations.sections.solutions.features[6].description,
      icon: <ReceiptText className="size-5" />,
    },
    {
      title: translations.sections.solutions.features[7].title,
      description: translations.sections.solutions.features[7].description,
      icon: <FileText className="size-5" />,
    },
  ];

  return (
    <section id="solutions" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
{translations.sections.solutions.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-secondary">
{translations.sections.solutions.title}
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
{translations.sections.solutions.description}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
