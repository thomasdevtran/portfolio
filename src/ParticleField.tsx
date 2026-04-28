import { useEffect, useRef } from "react";

type Point = {
  bx: number;
  by: number;
  x: number;
  y: number;
  phase: number;
  speed: number;
};

const SIZE = 520;
const COLS = 14;
const ROWS = 14;

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    let context: CanvasRenderingContext2D | null = null;

    try {
      context = canvas.getContext("2d");
    } catch (error) {
      return undefined;
    }

    if (!context) {
      return undefined;
    }

    const ctx = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return undefined;
    }

    const points: Point[] = [];
    const cellWidth = SIZE / COLS;
    const cellHeight = SIZE / ROWS;
    const mouse = { x: SIZE / 2, y: SIZE / 2 };
    let time = 0;
    let frameId = 0;

    for (let row = 0; row < ROWS; row += 1) {
      for (let column = 0; column < COLS; column += 1) {
        const baseX = (column + 0.5) * cellWidth;
        const baseY = (row + 0.5) * cellHeight;

        points.push({
          bx: baseX,
          by: baseY,
          x: baseX,
          y: baseY,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.6,
        });
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = SIZE / rect.width;
      const scaleY = SIZE / rect.height;

      mouse.x = (event.clientX - rect.left) * scaleX;
      mouse.y = (event.clientY - rect.top) * scaleY;
    };

    const handlePointerLeave = () => {
      mouse.x = SIZE / 2;
      mouse.y = SIZE / 2;
    };

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      time += 0.016;

      points.forEach((point) => {
        const dx = mouse.x - point.bx;
        const dy = mouse.y - point.by;
        const distance = Math.hypot(dx, dy);
        const pull = Math.max(0, 1 - distance / 220);
        const wave = Math.sin(time * point.speed + point.phase) * 7;
        const targetX = point.bx + dx * pull * 0.45 + wave;
        const targetY = point.by + dy * pull * 0.45 + wave;
        const proximity = Math.max(0, 1 - distance / 180);
        const radius = 2.4 + proximity * 4.8;

        point.x = lerp(point.x, targetX, 0.08);
        point.y = lerp(point.y, targetY, 0.08);

        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle =
          proximity > 0.1
            ? `rgba(240, 109, 47, ${0.24 + proximity * 0.76})`
            : "rgba(244, 239, 230, 0.14)";
        ctx.fill();
      });

      for (let index = 0; index < points.length; index += 1) {
        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const start = points[index];
          const end = points[nextIndex];
          const dx = start.x - end.x;
          const dy = start.y - end.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 84) {
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.strokeStyle = `rgba(244, 239, 230, ${(1 - distance / 84) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      frameId = window.requestAnimationFrame(draw);
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    draw();

    return () => {
      window.cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="particle-card" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        width={SIZE}
        height={SIZE}
      />
    </div>
  );
}
