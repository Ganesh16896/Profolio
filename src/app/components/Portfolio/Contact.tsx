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
      href: "mailto:ramkrishna18547@gmail.com", // Update with your email
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
      href: "https://instagram.com/yourprofile", // Update with your Instagram profile link
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscordFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discord.com/invite/yourserver", // Update with your Discord invite link
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/yourprofile", // Update with your Twitter profile link
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center text-4xl font-bold ">
        <p>Contact</p>
      </div>
      <div className="flex items-center justify-center mt-10 w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
}
