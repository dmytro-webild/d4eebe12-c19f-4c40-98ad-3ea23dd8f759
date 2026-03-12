"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function TeamPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="MaxDigital"
          navItems={[
            { name: "Work", id: "work" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Let's Create", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="team" data-section="team" className="pt-32">
        <TeamCardTwo
          members={[
            {
              id: "1",              name: "Alisa Hester",              role: "Founder & CEO",              description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit. Passionate about building world-class teams and creating products that change industries.",              imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",              imageAlt: "Alisa Hester",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",              name: "Marcus Chen",              role: "Head of Design",              description: "Creative director with 12+ years experience. Led design at multiple startups from seed to Series B. Believes great design is invisible—it just works.",              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-happy-be-back-work_23-2148727621.jpg",              imageAlt: "Marcus Chen",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",              name: "Jessica Rodriguez",              role: "Lead Developer",              description: "Full-stack engineer passionate about scalable architecture and clean code. Built systems that serve millions. Coffee enthusiast.",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-businessman-with-arms-crossed_23-2147708158.jpg",              imageAlt: "Jessica Rodriguez",              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",              name: "Amanda Foster",              role: "Strategy Director",              description: "Business strategist focused on aligning design with measurable outcomes. 10+ years helping companies scale through strategic thinking.",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businesswoman-holding-digital-tablet_1262-5758.jpg",              imageAlt: "Amanda Foster",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "5",              name: "David Kim",              role: "UX Researcher",              description: "User research specialist who believes every design decision should be backed by data. Makes people feel heard and understood.",              imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",              imageAlt: "David Kim",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "6",              name: "Sofia Mendez",              role: "Project Manager",              description: "Project manager keeping everything on track and teams aligned. Obsessed with clear communication and on-time delivery.",              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-happy-be-back-work_23-2148727621.jpg",              imageAlt: "Sofia Mendez",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          title="Meet the MaxDigital Team"
          description="We're a diverse team of talented professionals united by a passion for creating extraordinary digital experiences. Every member brings unique expertise and perspective."
          tag="Our Team"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Join Our Team", href: "#contact" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact" className="py-20">
        <ContactText
          text="Ready to work with our team? Let's create something amazing together."
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Get In Touch", href: "mailto:hello@maxdigital.com" },
            { text: "Schedule Call", href: "#" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="MaxDigital"
          copyrightText="© 2025 MaxDigital. All rights reserved. | Crafting digital excellence."
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
