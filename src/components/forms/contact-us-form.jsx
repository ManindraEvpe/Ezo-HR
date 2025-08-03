import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import translations from "@/lang/en.json";

export default function ContactUsForm() {
  const formRef = useRef(null);
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  useEffect(() => {
    if (formMessage) {
      const timer = setTimeout(() => {
        setFormMessage("");
        setMessageType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      await emailjs.send(
        "service_ftyws0c", // Your EmailJS service ID
        "template_s9slv3q", // Your EmailJS template ID
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          phone: phone,
          message: message,
          to_name: "Support Team",
          to_email: "tester7077test@gmail.com",
        },
        "NmsMQZqMGGvCyJbBN" // Your EmailJS public key
      );
      setFormMessage(
translations.pages.contactUs.form.messages.success
      );
      setMessageType("success");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
setFormMessage(translations.pages.contactUs.form.messages.error);
      setMessageType("error");
    }
  };

  return (
    <Card className="border-0 max-w-xl w-full mx-auto">
      <CardContent className="p-4 sm:p-6">
<h2 className="mb-8 text-xl font-semibold">{translations.pages.contactUs.form.title}</h2>
        <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
          <div className="grid gap-4 lg:gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              <div>
                <Label htmlFor="firstname" className="mb-2">
{translations.pages.contactUs.form.fields.firstName}
                </Label>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
placeholder={translations.pages.contactUs.form.fields.firstNamePlaceholder}
                />
              </div>
              <div>
                <Label htmlFor="lastname" className="mb-2">
{translations.pages.contactUs.form.fields.lastName}
                </Label>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
placeholder={translations.pages.contactUs.form.fields.lastNamePlaceholder}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              <div>
                <Label htmlFor="email" className="mb-2">
{translations.pages.contactUs.form.fields.email}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
placeholder={translations.pages.contactUs.form.fields.emailPlaceholder}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2">
{translations.pages.contactUs.form.fields.phone}
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
placeholder={translations.pages.contactUs.form.fields.phonePlaceholder}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="mb-2">
{translations.pages.contactUs.form.fields.details}
              </Label>
              <Textarea
                id="message"
                name="message"
placeholder={translations.pages.contactUs.form.fields.detailsPlaceholder}
                className="h-[8rem]"
              />
            </div>
          </div>
          <div className="mt-6 grid">
            <Button type="submit" size="lg">
{translations.pages.contactUs.form.submitButton}
            </Button>
          </div>
          {formMessage && (
            <div
              className={`mt-3 text-center text-sm font-medium ${
                messageType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {formMessage}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
