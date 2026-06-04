interface SocialNetwork {
  icon: string;
  name: string;
  label: string;
  href: string;
}

export const socialNetworks: SocialNetwork[] = [
  {
    icon: "instagram",
    name: "Instagram",
    label: "@lalocura.bar",
    href: "https://www.instagram.com/lalocura.bar/",
  },
  {
    icon: "tiktok",
    name: "TikTok",
    label: "@lalocura.bar",
    href: "https://www.tiktok.com/@lalocura.bar",
  },
  {
    icon: "facebook",
    name: "Facebook",
    label: "La Locura Bar",
    href: "https://www.facebook.com/profile.php?id=61590164383472",
  },
] as const;
