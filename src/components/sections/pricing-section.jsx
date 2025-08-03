/* eslint-disable no-unused-vars */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { AppStoreIcon, PlaystoreIcon } from "../common/icons";

export default function PricingSection() {
  const plans = useMemo(
    () => [
      {
        name: "Web Portal (Admin • HR • Employee)",
        price: "₹999",
        description:
          "One portal. Three roles. Role-based access for Admin, HR, and Employees",
        features: [
          "Admin/HR: Attendance control center regularize & approve, shifts/weekly off/holidays",
          "Admin/HR: Payroll automation PF/ESI/TDS, payslips, statutory reports & exports",
          "Admin/HR: Masters branches, departments, grades, policies; audits & logs",
          "Employee (ESS Web): View attendance, apply leave/OD/WFH, see shifts/holiday calendar, download payslips, update profile/KYC",
        ],
        buttons: [
          {
            label: "Explore Web Portal",
            action: "https://web.ezohr.com/login",
            icon: <></>,
          },
        ],
      },
      {
        name: "Employee App (Mobile ESS)",
        price: "₹1499",
        description: "Self-service and real-time updates for every employee.",
        features: [
          "Attendance view: My punches, shift & holiday calendar, monthly summary",
          "Requests: Leave / OD / WFH / attendance regularization",
          "Payroll: Download payslips, view CTC & YTD breakdown",
          "Comms: Announcements and approval notifications",
          "Optional: Mobile punch-in/out if enabled; otherwise attendance via EZO Lens",
          "Secure: OTP/email login, role-based access, device binding, instant sync with Web Portal",
        ],
        buttons: [
          {
            label: "Download for Android",
            action:
              "https://play.google.com/store/apps/details?id=com.efs.ezohr&pcampaignid=web_share",
            icon: <PlaystoreIcon />,
          },
          {
            label: "Download for iOS (coming soon)",
            action: "",
            icon: <AppStoreIcon />,
          },
        ],
        popular: true,
      },
      {
        name: "Lens App (Face Liveness Attendance)",
        price: "₹1999",
        description:
          "AI-powered, spoof-resistant check-ins for branches, sites, and field teams.",
        features: [
          "Authenticity: Face liveness + match at check-in; selfie evidence; optional PIN as 2FA",
          "Modes:Kiosk (shared device), Supervisor verify, or Personal device (policy-controlled)",
          "Controls: Geofence, Wi-Fi/QR/device binding, single-device lock, shift auto-detection, break capture",
          "Tamper safety: Offline queue with encrypted storage → auto-sync; root/jailbreak checks; spoof flags",
          "Audit trail: Geo/time stamp, device ID, photo trail; real-time push to Web Portal & Employee App",
          "Integrations: Webhooks/APIs for payroll/ERP; instant regularization workflow",
          "Privacy: Consent screen + purpose notice; configurable retention (DPDP-ready)",
        ],
        buttons: [
          {
            label: "See How Lens Works",
            action:
              "https://play.google.com/store/apps/details?id=com.efs.ezolens&pcampaignid=web_share",
            icon: <></>,
          },
          { label: "Book a Live Demo", action: "/contact-us", icon: <></> },
        ],
      },
    ],
    []
  );

  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 w-screen h-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      ></div>
      <div className="container px-4 md:px-6 relative">
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
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-secondary">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Choose the plan that's right for your business. All plans include a
            14-day free trial.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="annually" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="rounded-full p-1">
                <TabsTrigger value="annually" className="rounded-full px-6">
                  Annually (Save 20%)
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="annually">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {plans.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${
                        plan.popular
                          ? "border-primary shadow-lg"
                          : "border-border/40 shadow-md"
                      } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground ml-1">
                            per employee
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-2">
                          {plan.description}
                        </p>
                        <ul className="space-y-3 text-xs my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-start">
                              <Check className="mr-2 size-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col gap-2">
                          {plan.buttons &&
                            plan.buttons.map((button, btnIndex) => (
                              <Link
                                key={btnIndex}
                                to={button.action}
                                className="cursor-pointer"
                              >
                                <Button
                                  disabled={!button.action}
                                  className={`w-full mt-auto rounded-full ${
                                    plan.popular
                                      ? "bg-primary hover:bg-primary/90"
                                      : "bg-muted hover:bg-muted/80"
                                  }`}
                                  variant={plan.popular ? "default" : "outline"}
                                >
                                  {button.icon}
                                  {button.label}
                                </Button>
                              </Link>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
