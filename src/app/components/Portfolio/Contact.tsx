import React from "react";
import {
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";

export function Contact() {
  const links = [
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `mailto:ramkrishna18547@gmail.com`, // Update with your email
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/9063105896", // Update with your WhatsApp link
    },
    {
      title: "Phone number",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:+919063105896", // Update with your phone number
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/ganesh18547", // Update with your Instagram profile link
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/i/flow/login?redirect_after_login=%2FRamkris53156502 ", // Update with your Twitter profile link
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center  ">
        <p className="text-4xl font-bold">Contact Me</p>
        <p className="mt-5 px-5 lg:text-[14px] text-[12px]">
          Lets bring your vision to life! I m here to help. Reach out to discuss
          your project or inquire about my services. I m dedicated to turning
          your ideas into reality. Contact me today to get started!
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
      <div className="text-center mt-10 border-t-2 border-gray-800 py-5 text-slate-500">
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </div>
  );
}
