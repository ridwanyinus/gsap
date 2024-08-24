import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const getBanners = () => [document.getElementById("banner-1"), document.getElementById("banner-2"), document.getElementById("banner-3"), document.getElementById("banner-4")];

export const animatePageIn = () => {
  const banners = getBanners();

  if (banners.every(Boolean)) {
    gsap
      .timeline()
      .set(banners, { yPercent: 0 })
      .to(banners, {
        yPercent: 100,
        stagger: { amount: 0.6, from: "start" }, // Stagger more complexly
        duration: 0.8, // Adjust duration for smoothness
        ease: "power3.out", // Smooth easing
      });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banners = getBanners();

  if (banners.every(Boolean)) {
    gsap
      .timeline()
      .set(banners, { yPercent: -100 })
      .to(banners, {
        yPercent: 0,
        stagger: { amount: 0.6, from: "end" }, // Different stagger effect
        duration: 0.8, // Smooth duration
        ease: "power3.in", // Smooth easing in reverse
        onComplete: () => router.push(href),
      });
  }
};
