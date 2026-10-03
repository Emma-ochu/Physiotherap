import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const InteractiveCursor = () => {
  const [label, setLabel] = useState("View");
  const [visible, setVisible] = useState(false);
  const x = useSpring(useMotionValue(0), {
    stiffness: 300,
    damping: 28,
    mass: 0.5,
  });
  const y = useSpring(useMotionValue(0), {
    stiffness: 300,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX - 36);
      y.set(event.clientY - 36);
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      if (!cursorTarget) return;
      setLabel(cursorTarget.dataset.cursor || "View");
      setVisible(true);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest("[data-cursor]")) return;
      const nextTarget = event.relatedTarget;
      if (
        nextTarget instanceof Element &&
        nextTarget.closest("[data-cursor]")
      ) {
        return;
      }
      setVisible(false);
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden='true'
      data-interactive-cursor
      className='pointer-events-none fixed left-0 top-0 z-[100] hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_30px_rgba(15,23,42,0.25)] [@media(hover:hover)_and_(pointer:fine)]:flex'
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.65 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <span className='flex flex-col items-center gap-1'>
        {label}
        <ArrowRight className='h-4 w-4' />
      </span>
    </motion.div>
  );
};

export default InteractiveCursor;
