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
      title: "Branch Management",
      description:
        "Easily manage multiple branches with centralized control and visibility.",
      icon: <GitBranchPlus className="size-5" />,
    },
    {
      title: "Employee Management",
      description:
        "Streamline employee onboarding, attendance, and performance tracking.",
      icon: <IdCardLanyard className="size-5" />,
    },
    {
      title: "Organization Policies",
      description:
        "Create and enforce organization policies to maintain compliance and consistency.",
      icon: <Building2 className="size-5" />,
    },
    {
      title: "Role Management",
      description:
        "Define and manage roles and permissions for secure access control.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Attendance Management",
      description:
        "Track employee attendance effortlessly with real-time updates.",
      icon: <SquareCheck className="size-5" />,
    },
    {
      title: "Leave & Holiday Management",
      description:
        "Simplify leave requests and holiday management with automated workflows.",
      icon: <Calendar className="size-5" />,
    },
    {
      title: "Payroll Management",
      description:
        "Automate payroll calculations and ensure compliance with tax regulations.",
      icon: <ReceiptText className="size-5" />,
    },
    {
      title: "Reports",
      description:
        "Generate insightful reports to analyze employee performance and business metrics.",
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
            Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-secondary">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our comprehensive platform provides all the tools you need to
            streamline your workflow, boost productivity, and achieve your
            goals.
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
