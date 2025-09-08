export const blogs = [
  {
    title: "Fixing a Wi-Fi Printer That Kept Disconnecting",
    date: "2025-08-15",
    tags: ["networking", "printer", "windows"],
    content:
      "This issue occurred on a small office network where the printer would vanish from Windows every few hours. The fix involved setting a static IP on the router, disabling IPv6, and reinstalling drivers. Since then, the printer has stayed stable.",
  },
  {
    title: "Building My First Homelab",
    date: "2025-07-02",
    tags: ["homelab", "virtualization", "linux"],
    content:
      "I built a small homelab with an old desktop running Proxmox. Deployed a Linux VM for Docker containers and experimented with Pi-hole. Learned about virtualization, networking, and resource allocation.",
  },
  {
    title: "Windows Laptop Boot Loop Recovery",
    date: "2025-06-12",
    tags: ["windows", "troubleshooting"],
    content:
      "Troubleshooted a laptop stuck in a boot loop after a failed update. Resolved using Windows Recovery Environment, sfc /scannow, and DISM repair commands. Saved the client from a reinstall.",
  },
];
