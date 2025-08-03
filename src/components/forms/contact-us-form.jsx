import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import mailLottie from "@/assets/mail-lottie.json";

export default function ContactUsForm() {
  const formRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    setIsLoading(true);
    try {
      await emailjs.send(
        "service_ftyws0c",
        "template_s9slv3q",
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          phone: phone,
          message: message,
          to_name: "Support Team",
          to_email: "tester7077test@gmail.com",
        },
        "NmsMQZqMGGvCyJbBN"
      );
      setIsSuccess(true);
      setShowDialog(true);
      form.reset();
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsSuccess(false);
      setShowDialog(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="border-0 max-w-xl w-full mx-auto">
        <CardContent className="p-4 sm:p-6">
          <h2 className="mb-8 text-xl font-semibold">Fill in the form</h2>
          <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="grid gap-4 lg:gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                <div>
                  <Label htmlFor="firstname" className="mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter your first name"
                    required
                    minLength={2}
                    maxLength={50}
                  />
                </div>
                <div>
                  <Label htmlFor="lastname" className="mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter your last name"
                    required
                    minLength={2}
                    maxLength={50}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                <div>
                  <Label htmlFor="email" className="mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone"
                    required
                    pattern="[0-9+\-\s()]+"
                    minLength={10}
                    title="Please enter a valid phone number"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="mb-2">
                  Details
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project"
                  className="h-[8rem]"
                  required
                  minLength={10}
                  maxLength={500}
                />
              </div>
            </div>
            <div className="mt-6 grid">
              <Button type="submit" size="lg" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send inquiry"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogDescription className="pt-4">
              <h3 className={`text-center text-xl font-semibold mb-4`}>
                {isSuccess ? (
                  <>Message Sent Successfully!</>
                ) : (
                  <>Failed to Send Message</>
                )}
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32">
                  <Lottie
                    animationData={mailLottie}
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="text-center text-muted-foreground">
                  {isSuccess ? (
                    <>
                      Thank you for contacting us. <br />
                      We will get back to you soon.
                    </>
                  ) : (
                    "Something went wrong. Please try again later or contact us directly."
                  )}
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
