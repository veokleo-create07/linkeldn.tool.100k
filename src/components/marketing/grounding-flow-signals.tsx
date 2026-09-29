"use client";

import { useEffect } from "react";

const PARTICLE_RADIUS = 1.7;
const LOOP_DURATION = 6200;
const SOURCE_STAGGER = 520;
const OUTPUT_DELAY = 1900;

export function GroundingFlowSignals() {
  useEffect(() => {
    const svg = document.querySelector<SVGSVGElement>("#grounding-flow-svg");
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const visibleGroup = Array.from(svg.querySelectorAll<SVGGElement>(".grounding-flow-group")).find(
      (group) => getComputedStyle(group).display !== "none",
    );
    if (!visibleGroup) return;

    const paths = Array.from(visibleGroup.querySelectorAll<SVGPathElement>("path"));
    const sourcePaths = paths.slice(0, 6);
    const outputPath = paths[7];
    const centerCard = document.querySelector<HTMLElement>("#grounding-clonao-card");
    const outputCard = document.querySelector<HTMLElement>("#grounding-brand-graph-card");
    if (sourcePaths.length !== 6 || !outputPath) return;

    const particles = sourcePaths.map((path, index) => {
      const particle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      particle.setAttribute("r", String(PARTICLE_RADIUS));
      particle.setAttribute("class", "grounding-signal-particle");
      particle.style.animationDelay = `${index * 0.08}s`;
      svg.appendChild(particle);
      return { particle, path, length: path.getTotalLength(), delay: index * SOURCE_STAGGER };
    });

    const outputParticle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outputParticle.setAttribute("r", String(PARTICLE_RADIUS));
    outputParticle.setAttribute("class", "grounding-signal-particle grounding-signal-output");
    svg.appendChild(outputParticle);

    let frame = 0;
    let active = true;
    let previousCenterPulse = false;
    let previousOutputPulse = false;
    const startedAt = performance.now();

    const pulse = (element: HTMLElement | null) => {
      if (!element) return;
      element.classList.remove("grounding-card-pulse");
      void element.offsetWidth;
      element.classList.add("grounding-card-pulse");
    };

    const tick = (now: number) => {
      if (!active) return;
      const elapsed = now - startedAt;

      particles.forEach(({ particle, path, length, delay }, index) => {
        const phase = (elapsed - delay) / LOOP_DURATION;
        const progress = phase - Math.floor(phase);
        const point = path.getPointAtLength(progress * length);
        particle.setAttribute("cx", String(point.x));
        particle.setAttribute("cy", String(point.y));
        particle.style.opacity = progress < 0.04 ? "0" : "0.9";

        if (index === 0) {
          const centerPulse = progress > 0.965;
          if (centerPulse && !previousCenterPulse) pulse(centerCard);
          previousCenterPulse = centerPulse;
        }
      });

      const outputPhase = (elapsed - OUTPUT_DELAY) / LOOP_DURATION;
      const outputProgress = outputPhase - Math.floor(outputPhase);
      const outputPoint = outputPath.getPointAtLength(outputProgress * outputPath.getTotalLength());
      outputParticle.setAttribute("cx", String(outputPoint.x));
      outputParticle.setAttribute("cy", String(outputPoint.y));
      outputParticle.style.opacity = outputProgress < 0.04 ? "0" : "0.9";
      const outputPulse = outputProgress > 0.965;
      if (outputPulse && !previousOutputPulse) pulse(outputCard);
      previousOutputPulse = outputPulse;

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active && !frame) frame = requestAnimationFrame(tick);
      if (!active && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }, { threshold: 0.05 });

    observer.observe(svg);
    frame = requestAnimationFrame(tick);

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      particles.forEach(({ particle }) => particle.remove());
      outputParticle.remove();
      centerCard?.classList.remove("grounding-card-pulse");
      outputCard?.classList.remove("grounding-card-pulse");
    };
  }, []);

  return null;
}
