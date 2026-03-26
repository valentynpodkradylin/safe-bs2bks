import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface PhotoBannerProps {
  src: string;
  alt: string;
  overlay?: boolean;
  parallax?: boolean;
  parallaxDirection?: "vertical" | "diagonal";
}

export const PhotoBanner = ({
  src,
  alt,
  overlay = true,
  parallax = false,
  parallaxDirection = "vertical",
}: PhotoBannerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parallax) return;

    const media = window.matchMedia("(min-width: 62em)");
    let rafId: number | null = null;

    const update = () => {
      const container = containerRef.current;
      const bg = bgRef.current;
      if (!container || !bg) return;

      if (media.matches && parallaxDirection !== "diagonal") {
        bg.style.transform = "none";
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const bannerCenter = rect.top + rect.height / 2;

      if (parallaxDirection === "diagonal") {
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
        );
        const shift = (progress - 0.5) * 44;
        bg.style.transform = `translate3d(${shift}px, ${shift}px, 0) scale(1.18)`;
        return;
      }

      const translateY = (viewportCenter - bannerCenter) * 0.18;
      bg.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.16)`;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    media.addEventListener("change", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      media.removeEventListener("change", update);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [parallax, parallaxDirection]);

  return (
    <Box
      ref={containerRef}
      position="relative"
      h={{ base: "180px", sm: "230px", md: "280px" }}
      w={{ base: "100vw", lg: "auto" }}
      left={{ base: "50%", lg: "auto" }}
      right={{ base: "50%", lg: "auto" }}
      ml={{ base: "-50vw", lg: 0 }}
      mr={{ base: "-50vw", lg: 0 }}
      borderRadius={{ base: 0, lg: "2xl" }}
      overflow="hidden"
      mb={{ base: 10, md: 24 }}
      role="img"
      aria-label={alt}
    >
      <Box
        ref={bgRef}
        position="absolute"
        inset={parallax ? { base: "-12%", lg: 0 } : 0}
        backgroundImage={`url('${src}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment={
          parallax
            ? parallaxDirection === "diagonal"
              ? "scroll"
              : { base: "scroll", lg: "fixed" }
            : "scroll"
        }
        className={parallax ? "parallax-bg" : undefined}
        willChange={parallax ? "transform" : undefined}
      />
      {overlay && (
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, ocean.900/70, transparent)"
        />
      )}
    </Box>
  );
};
