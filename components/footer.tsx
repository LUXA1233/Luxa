"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              className="mb-6 flex items-center gap-3"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/luxa-icon.png"
                alt="Luxa OS"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-foreground">Luxa OS</span>
            </motion.div>
            <p className="mb-6 text-sm text-muted-foreground">
              Premium digital solutions for modern businesses.
              Learn · Build · Grow with us.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-bold text-foreground">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Social Media Management",
                "SEO Optimization",
                "Brand Design",
                "Student Programs",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-bold text-foreground">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Work",
                "Testimonials",
                "Careers",
                "Blog",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  tryluxa@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Seattle, WA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:pt-8 md:flex-row">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Luxa OS. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-xs md:text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
