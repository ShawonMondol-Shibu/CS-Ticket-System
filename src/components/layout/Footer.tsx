import type React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const footerData = {
  company: {
    name: "CS — Ticket System",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  sections: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Mission", href: "#" },
        { label: "Contact Sales", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Products & Services", href: "#" },
        { label: "Customer Stories", href: "#" },
        { label: "Download Apps", href: "#" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Join Us", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { icon: FaSquareXTwitter, label: "@CS — Ticket System", href: "#" },
    { icon: FaLinkedin, label: "@CS — Ticket System", href: "#" },
    { icon: FaFacebook, label: "@CS — Ticket System", href: "#" },
    {
      icon: IoIosMail,
      label: "support@cst.com",
      href: "mailto:support@cst.com",
    },
  ],
};

interface FooterSectionProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SocialLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

function SocialLink({ icon: Icon, label, href }: SocialLinkProps) {
  return (
    <li className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <a href={href} className="hover:text-white transition-colors">
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              {footerData.company.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerData.company.description}
            </p>
          </div>

          {/* Dynamic Footer Sections */}
          {footerData.sections.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Social Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerData.socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  icon={social.icon}
                  label={social.label}
                  href={social.href}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          © 2025 {footerData.company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
