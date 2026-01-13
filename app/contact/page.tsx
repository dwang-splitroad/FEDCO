"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Facebook, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Connect to your preferred form service (Formspree, Netlify Forms, etc.)
    // For now, the form data can be accessed via FormData
    console.log("Form submitted - connect to your form service")
    alert("Form service not yet configured. Please email us directly at director@fultondevelopment.org")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}

      {/* Contact Form and Info Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Ready to connect to any form service */}
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your company" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject <span className="text-destructive">*</span></Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your project or question..." 
                      rows={5}
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>

                  {formStatus === "success" && (
                    <p className="text-secondary text-center font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="text-destructive text-center font-medium">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground">822 Main Street</p>
                      <p className="text-muted-foreground">Rochester, Indiana 46975</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href="tel:574-223-0701" className="text-muted-foreground hover:text-foreground transition-colors">
                        574 223 0701
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:director@fultondevelopment.org" className="text-muted-foreground hover:text-foreground transition-colors">
                        director@fultondevelopment.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 4:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Facebook className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Follow Us</h3>
                      <a 
                        href="https://www.facebook.com/fedco46975" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.2614392481257!2d-86.21681702434987!3d41.06508187134531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816adee0631f02d%3A0x5c58c70eb2d5cf5b!2s822%20Main%20St%2C%20Rochester%2C%20IN%2046975!5e0!3m2!1sen!2sus!4v1697838167045!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FEDCO Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Whether you're starting a new business, expanding an existing one, or relocating to Fulton County, 
            our team is ready to help you succeed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:574-223-0701">
              <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-white">
                Call Us: 574 223 0701
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

