import gsap from "gsap";

export const bottomToTop = ({
  targets,
  y = 80,
  duration = 0.6,
  stagger = 0.15,
  ease = "power3.out",
}) => {
  const tl = gsap.timeline({
    defaults: { duration, ease },
  });

  tl.fromTo(
    targets,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger,
      clearProps: "transform,opacity",
    }
  );
  return tl;
};
