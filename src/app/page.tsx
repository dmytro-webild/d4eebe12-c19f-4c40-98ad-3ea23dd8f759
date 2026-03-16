"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import { Award, BarChart3, Briefcase, Check, CheckCircle, Code, Database, Eye, Github, Instagram, Lightbulb, Linkedin, Palette, Rocket, Target, ThumbsUp, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function LandingPage() {
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

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="We Design Digital Experiences That Drive Results"
          description="Transform your vision into stunning digital products. Our award-winning team combines strategic thinking with creative excellence to deliver websites and applications that captivate, engage, and convert."
          background={{ variant: "plain" }}
          kpis={[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "2+", label: "Years Experience" }
          ]}
          enableKpiAnimation={true}
          imageSrc="http://img.b2bpic.net/free-photo/group-creative-people-analyzing-result-work_329181-15506.jpg"
          imageAlt="Creative web agency team collaboration"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[
            { text: "Start Your Project", href: "#contact" },
            { text: "View Portfolio", href: "#work" }
          ]}
          buttonAnimation="blur-reveal"
          tag="Award-Winning Creative Studio"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          title="We're a team of designers, developers, and strategists obsessed with creating digital magic that makes brands unforgettable."
          useInvertedBackground={false}
          buttons={[
            { text: "Learn More", href: "#services" }
          ]}
        />
      </div>

      <div id="work" data-section="work">
        <FeatureCardNineteen
          features={[
            {
              id: 1,
              tag: "E-Commerce",              title: "Global Fashion Brand",              subtitle: "Redesigned digital storefront",              description: "We transformed a struggling online presence into a high-converting platform that increased sales by 245%. Our redesign focused on user experience, mobile optimization, and seamless checkout.",              imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-landing-page-template_23-2149061052.jpg?_wi=1",              imageAlt: "E-commerce website redesign"
            },
            {
              id: 2,
              tag: "SaaS Platform",              title: "Analytics Dashboard",              subtitle: "Complex data visualization",              description: "Built a sophisticated analytics platform that empowers businesses to understand customer behavior. The intuitive interface transformed raw data into actionable insights for over 5,000 users.",              imageSrc: "http://img.b2bpic.net/free-vector/beauty-salon-booking-app_52683-40853.jpg?_wi=1",              imageAlt: "SaaS analytics dashboard"
            }
          ]}
          title="Our Portfolio"
          description="From concept to launch, we've helped brands across industries achieve their digital ambitions through thoughtful design and flawless execution."
          tag="Featured Work"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Explore All Work", href: "#" }
          ]}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardTen
          features={[
            {
              id: "1",              title: "Discovery & Strategy",              description: "We dive deep into understanding your brand, audience, and competitive landscape. Through workshops and research, we uncover insights that inform every design decision.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-planning-trip-together_23-2148925832.jpg",                imageAlt: "Design thinking strategy"
              },
              items: [
                { icon: Lightbulb, text: "Strategic planning sessions" },
                { icon: Users, text: "User research & personas" },
                { icon: Target, text: "Goal definition & KPIs" }
              ],
              reverse: false
            },
            {
              id: "2",              title: "Design & Prototyping",              description: "Our designers create compelling visual concepts and interactive prototypes. We iterate based on feedback to ensure the design perfectly captures your vision.",              media: {
                imageSrc: "http://img.b2bpic.net/free-vector/minimal-style-architect-landing-page-template_23-2149423810.jpg",                imageAlt: "UI UX design wireframe"
              },
              items: [
                { icon: Palette, text: "Visual design system" },
                { icon: Zap, text: "Interactive prototypes" },
                { icon: Eye, text: "User testing sessions" }
              ],
              reverse: true
            },
            {
              id: "3",              title: "Development & Build",              description: "Our expert developers bring designs to life using cutting-edge technologies. We build for performance, scalability, and beautiful interactions.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/html-css-collage-concept-with-person_23-2150062004.jpg",                imageAlt: "Web development coding"
              },
              items: [
                { icon: Code, text: "Full-stack development" },
                { icon: Zap, text: "Performance optimization" },
                { icon: Database, text: "Scalable architecture" }
              ],
              reverse: false
            },
            {
              id: "4",              title: "Testing & Launch",              description: "Rigorous quality assurance and testing ensures your product is bulletproof. We handle the launch and provide ongoing support for success.",              media: {
                imageSrc: "http://img.b2bpic.net/free-vector/inventory-checklist-template-design_742173-4287.jpg",                imageAlt: "Quality assurance testing"
              },
              items: [
                { icon: CheckCircle, text: "Comprehensive QA testing" },
                { icon: Rocket, text: "Seamless deployment" },
                { icon: BarChart3, text: "Performance monitoring" }
              ],
              reverse: true
            }
          ]}
          title="Our Creative Process"
          description="We follow a proven methodology that ensures every project aligns with your goals and exceeds expectations."
          tag="How We Work"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          buttons={[
            { text: "Start Your Journey", href: "#contact" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          metrics={[
            {
              id: "1",              value: "500",              title: "Projects",              description: "Successfully delivered across all industries",              icon: Briefcase
            },
            {
              id: "2",              value: "98",              title: "%",              description: "Client satisfaction and retention rate",              icon: ThumbsUp
            },
            {
              id: "3",              value: "245",              title: "%",              description: "Average increase in client conversions",              icon: TrendingUp
            },
            {
              id: "4",              value: "50",              title: "Awards",              description: "Industry recognition and accolades",              icon: Award
            }
          ]}
          title="Our Impact by Numbers"
          description="Real results that showcase the power of strategic creative design."
          tag="Why Choose Us"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          members={[
            {
              id: "1",              name: "Maximiliano Aguila ",              role: "Founder & CEO",              description: "Max founded MaxDigital to help small businesses build modern websites that attract customers and grow their brand online. Max leads the company’s strategy and client experience.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ApTXhqfncLkMcGI7sOP1tda8U1/uploaded-1773290443039-4rlee41p.png",              imageAlt: "Maximiliano Aguila ",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",              name: "Marcus Chen",              role: "Head of Design",              description: "Creative director with 12+ years experience. Led design at multiple startups.",              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-happy-be-back-work_23-2148727621.jpg?_wi=1",              imageAlt: "Marcus Chen",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",              name: "Jessica Rodriguez",              role: "Lead Developer",              description: "Full-stack engineer passionate about scalable architecture and clean code.",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-businessman-with-arms-crossed_23-2147708158.jpg?_wi=1",              imageAlt: "Jessica Rodriguez",              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",              name: "Amanda Foster",              role: "Strategy Director",              description: "Business strategist focused on aligning design with measurable outcomes.",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businesswoman-holding-digital-tablet_1262-5758.jpg?_wi=1",              imageAlt: "Amanda Foster",              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          title="Meet Our Team"
          description="The talented people behind our success."
          tag="Team"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Join Our Team", href: "#contact" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell, CEO at TechFlow",              date: "Date: 14 January 2025",              title: "They transformed our vision into reality",              quote: "Working with MaxDigital was a game-changer for our startup. From initial concept to launch, they understood our goals and delivered a product that exceeded our expectations. Their team is collaborative, responsive, and genuinely invested in our success.",              tag: "SaaS Startup",              avatarSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",              avatarAlt: "Sarah Mitchell CEO",              imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg?_wi=2",              imageAlt: "Sarah Mitchell CEO"
            },
            {
              id: "2",              name: "Marcus Chen, Director of Marketing at BrandCo",              date: "Date: 08 December 2024",              title: "Results that speak for themselves",              quote: "Our website redesign resulted in a 340% increase in qualified leads. The MaxDigital team combined stunning design with strategic thinking to create an experience that truly resonates with our audience. Highly recommended.",              tag: "E-Commerce",              avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-happy-be-back-work_23-2148727621.jpg",              avatarAlt: "Marcus Chen Director",              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-happy-be-back-work_23-2148727621.jpg?_wi=2",              imageAlt: "Marcus Chen Director"
            },
            {
              id: "3",              name: "Jessica Rodriguez, Founder at Creative Agency Group",              date: "Date: 22 November 2024",              title: "Partners who truly care",              quote: "From the first consultation to the final launch, MaxDigital demonstrated exceptional attention to detail and creative problem-solving. They became an extension of our team. The entire experience was seamless and the results were outstanding.",              tag: "Digital Agency",              avatarSrc: "http://img.b2bpic.net/free-photo/stylish-businessman-with-arms-crossed_23-2147708158.jpg",              avatarAlt: "Jessica Rodriguez Founder",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-businessman-with-arms-crossed_23-2147708158.jpg?_wi=2",              imageAlt: "Jessica Rodriguez Founder"
            },
            {
              id: "4",              name: "Amanda Foster, VP of Product at GlobalTech",              date: "Date: 15 October 2024",              title: "Innovation meets execution",              quote: "We needed a partner who could handle complexity while maintaining visual elegance. MaxDigital delivered exactly that. Their process is thorough, their team is talented, and their commitment to quality is unmatched. We're excited to continue working together.",              tag: "Enterprise",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-businesswoman-holding-digital-tablet_1262-5758.jpg",              avatarAlt: "Amanda Foster VP",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businesswoman-holding-digital-tablet_1262-5758.jpg?_wi=2",              imageAlt: "Amanda Foster VP"
            }
          ]}
          title="What Our Clients Say"
          description="Real feedback from brands we've partnered with."
          tag="Client Success Stories"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Read More Stories", href: "#" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          features={[
            {
              id: 1,
              tag: "Web Design",              title: "User Experience Design",              subtitle: "Digital experiences that delight",              description: "We create beautiful, intuitive interfaces that users love. Every pixel is purposeful, every interaction is smooth, and every design is rooted in user research and best practices.",              imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-landing-page-template_23-2149061052.jpg?_wi=2",              imageAlt: "Web design services"
            },
            {
              id: 2,
              tag: "Development",              title: "Full-Stack Development",              subtitle: "Powerful technology behind beautiful design",              description: "Our developers build scalable, performant applications using modern technologies. From responsive websites to complex web applications, we bring designs to life with clean, maintainable code.",              imageSrc: "http://img.b2bpic.net/free-vector/beauty-salon-booking-app_52683-40853.jpg?_wi=2",              imageAlt: "Development services"
            },
            {
              id: 3,
              tag: "Strategy",              title: "Digital Strategy",              subtitle: "Align design with business goals",              description: "We don't just create beautiful designs—we create strategic solutions. Our team conducts thorough research, defines clear KPIs, and ensures every project drives measurable business results.",              imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-landing-page-template_23-2149061052.jpg?_wi=3",              imageAlt: "Strategy services"
            }
          ]}
          title="Our Services"
          description="A complete suite of digital solutions tailored to your needs."
          tag="What We Offer"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Discuss Your Project", href: "#contact" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to create something extraordinary? Let's talk about your next project and explore how we can drive real results for your brand."
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
