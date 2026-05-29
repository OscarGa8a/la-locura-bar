interface SocialNetwork {
  icon: string;
  label: string;
  href: string;
}

export const socialNetworks: SocialNetwork[] = [
  {
    icon: "instagram",
    label: "@lalocura.bar",
    href: "https://www.instagram.com/lalocura.bar/",
  },
  {
    icon: "tiktok",
    label: "@lalocura.bar",
    href: "https://www.tiktok.com/@lalocura.bar",
  },
  {
    icon: "facebook",
    label: "La Locura Bar",
    href: "https://www.facebook.com/profile.php?id=61590164383472",
  },
] as const;
