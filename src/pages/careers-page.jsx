import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BriefcaseIcon,
  BuildingIcon,
  MapPinIcon,
  DollarSignIcon,
  StarIcon,
  BookmarkIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";

const jobPositions = [
  {
    id: "hr-technology-specialist",
    title: "HR Technology Specialist",
    department: "Human Resources",
    companyName: "Ezo HR",
    companyLogo: "/logo-png.png",
    location: "New York, NY",
    locationType: "hybrid",
    employmentType: "full-time",
    experienceLevel: "senior",
    postedDate: "2025-01-25",
    salary: "₹12,00,000 - ₹18,00,000",
    description:
      "Drive digital transformation in our HR processes. Implement and optimize HRIS systems, automate workflows, and provide data-driven insights to enhance employee experience.",
    featured: true,
    highlight: "urgent",
    perks: [
      "Flexible work arrangements",
      "Professional certifications",
      "Health & dental coverage",
      "401(k) matching",
      "Continuous learning budget",
    ],
  },
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    department: "Engineering",
    companyName: "Ezo HR",
    companyLogo: "/logo-png.png",
    location: "San Francisco, CA",
    locationType: "remote",
    employmentType: "full-time",
    experienceLevel: "senior",
    postedDate: "2025-01-26",
    salary: "₹25,00,000 - ₹35,00,000",
    description:
      "Build cutting-edge HR solutions using React, TypeScript, and modern web technologies. Create intuitive interfaces that simplify complex HR workflows for thousands of users.",
    featured: true,
    highlight: "remote",
    perks: [
      "100% Remote work",
      "Unlimited PTO",
      "Top-tier health insurance",
      "Stock options",
      "Home office stipend",
    ],
  },
  {
    id: "people-analytics-manager",
    title: "People Analytics Manager",
    department: "Data & Analytics",
    companyName: "Ezo HR",
    companyLogo: "/logo-png.png",
    location: "Chicago, IL",
    locationType: "hybrid",
    employmentType: "full-time",
    experienceLevel: "lead",
    postedDate: "2025-01-24",
    salary: "₹20,00,000 - ₹28,00,000",
    description:
      "Lead our people analytics initiatives to drive strategic HR decisions. Transform workforce data into actionable insights that improve employee engagement and organizational performance.",
    featured: true,
    highlight: "featured",
    perks: [
      "Data visualization tools",
      "Leadership development",
      "Comprehensive benefits",
      "Performance bonuses",
      "Conference attendance",
    ],
  },
  {
    id: "talent-acquisition-specialist",
    title: "Talent Acquisition Specialist",
    department: "Recruitment",
    companyName: "Ezo HR",
    companyLogo: "/logo-png.png",
    location: "Austin, TX",
    locationType: "onsite",
    employmentType: "full-time",
    experienceLevel: "mid",
    postedDate: "2025-01-27",
    salary: "₹8,00,000 - ₹12,00,000",
    description:
      "Join our dynamic recruitment team to attract top talent. Develop innovative sourcing strategies, enhance candidate experience, and build strong talent pipelines for our growing organization.",
    featured: true,
    highlight: "freshers",
    perks: [
      "Recruitment tools access",
      "Flexible scheduling",
      "Health benefits",
      "Team building events",
      "Career growth opportunities",
    ],
  },
];

export default function CareersPage() {
  // Calculate days ago from date
  const getDaysAgo = (dateString) => {
    const postDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return `${diffDays} days ago`;
    }
  };

  // Format location type for display
  const formatLocationType = (type) => {
    switch (type) {
      case "remote":
        return "Remote";
      case "hybrid":
        return "Hybrid";
      case "onsite":
        return "On-site";
      default:
        return type;
    }
  };

  // Format employment type for display
  const formatEmploymentType = (type) => {
    switch (type) {
      case "full-time":
        return "Full-time";
      case "part-time":
        return "Part-time";
      case "contract":
        return "Contract";
      case "internship":
        return "Internship";
      default:
        return type;
    }
  };

  // Get appropriate highlight icon and color
  const getHighlightDetails = (highlight) => {
    switch (highlight) {
      case "urgent":
        return {
          icon: <CalendarIcon className="h-4 w-4" />,
          label: "Urgent Hiring",
          color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        };
      case "remote":
        return {
          icon: <MapPinIcon className="h-4 w-4" />,
          label: "Remote",
          color:
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        };
      case "featured":
        return {
          icon: <StarIcon className="h-4 w-4" />,
          label: "Featured",
          color:
            "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        };
      case "freshers":
        return {
          icon: <UsersIcon className="h-4 w-4" />,
          label: "Freshers Welcome",
          color:
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        };
      default:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container mx-auto px-12 py-12" id="careers">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center mb-6">
          <Badge
            className="p-2 rounded-full bg-background text-sm px-4"
            variant="outline"
          >
            Careers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-secondary mt-4">
            Work at the heart of change
          </h2>
          <p className="max-w-4xl text-muted-foreground md:text-lg text-center mt-2">
            We believe in creating a culture of innovation, which is reflected
            in everything we do. Empower yourself with possibilities that will
            take you to new heights and exciting places.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {jobPositions.map((job) => {
              const highlightDetails = job.highlight
                ? getHighlightDetails(job.highlight)
                : null;

              return (
                <CarouselItem
                  key={job.id}
                  className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <Card className="flex h-full flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="bg-card relative flex h-12 w-12 items-center justify-center rounded-md border">
                          <div className="absolute flex h-full w-full items-center justify-center">
                            {job.companyLogo ? (
                              <img
                                src={job.companyLogo}
                                alt={job.companyName}
                                width={48}
                                height={48}
                                className="h-12 w-12 object-contain"
                              />
                            ) : (
                              <BuildingIcon className="text-muted-foreground h-6 w-6" />
                            )}
                          </div>
                        </div>
                        {highlightDetails && (
                          <Badge
                            variant="secondary"
                            className={`flex items-center gap-1 ${highlightDetails.color}`}
                          >
                            {highlightDetails.icon}
                            {highlightDetails.label}
                          </Badge>
                        )}
                      </div>
                      <div className="mt-3">
                        <CardTitle>{job.title}</CardTitle>
                        <div className="mt-1 flex items-center gap-1">
                          <BuildingIcon className="text-muted-foreground h-3.5 w-3.5" />
                          <CardDescription className="!mt-0">
                            {job.companyName}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col gap-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="text-muted-foreground h-4 w-4" />
                          <span className="text-sm">{job.location}</span>
                          <Badge variant="outline" className="ml-auto text-xs">
                            {formatLocationType(job.locationType)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <BriefcaseIcon className="text-muted-foreground h-4 w-4" />
                          <span className="text-sm">{job.department}</span>
                          <Badge variant="outline" className="ml-auto text-xs">
                            {formatEmploymentType(job.employmentType)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSignIcon className="text-muted-foreground h-4 w-4" />
                          <span className="text-sm">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="text-muted-foreground h-4 w-4" />
                          <span className="text-sm">
                            Posted {getDaysAgo(job.postedDate)}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mt-2 text-sm">
                        {job.description}
                      </p>

                      <div className="mt-auto">
                        <p className="text-muted-foreground mb-1.5 text-xs font-medium">
                          Perks & Benefits:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {job.perks.slice(0, 3).map((perk, index) => (
                            <Badge
                              variant="secondary"
                              key={index}
                              className="text-xs"
                            >
                              {perk}
                            </Badge>
                          ))}
                          {job.perks.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.perks.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="w-1/2">
                        <BriefcaseIcon className="mr-1 h-4 w-4" />
                        View Details
                      </Button>
                      <Button size="sm" className="w-1/2">
                        Apply Now
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="mt-8 flex justify-center">
            <CarouselPrevious className="relative static mr-2 lg:absolute" />
            <CarouselNext className="relative static ml-2 lg:absolute" />
          </div>
        </Carousel>
      </motion.section>
    </main>
  );
}
