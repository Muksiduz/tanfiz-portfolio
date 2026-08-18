import { useEffect, useRef } from "react";

export default function DrawingCanvas() {
  const canvasRef = useRef(null);

  const isDrawing = useRef(false);
  const currentStroke = useRef(null);
  const strokes = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      redraw();
    };

    const redraw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 1.5;

      strokes.current.forEach((stroke) => {
        if (stroke.points.length < 2) return;

        ctx.beginPath();

        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);

        for (let i = 1; i < stroke.points.length; i++) {
          ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }

        ctx.strokeStyle = `rgba(
          35,
          35,
          35,
          ${stroke.opacity}
        )`;

        ctx.stroke();
      });
    };

    /*
      Elements where drawing should NOT happen.
    */
    const isBlocked = (target) => {
      if (!(target instanceof Element)) {
        return true;
      }

      return Boolean(
        target.closest(`
          a,
          button,
          input,
          textarea,
          select,
          option,
          img,
          video,
          iframe,
          canvas,
          [role="button"],
          [role="link"],
          [data-no-draw]
        `),
      );
    };

    /*
      Finish the current stroke.
    */
    const stopDrawing = () => {
      if (!isDrawing.current) return;

      isDrawing.current = false;

      const stroke = currentStroke.current;
      currentStroke.current = null;

      if (!stroke) return;

      /*
        Keep the line visible for 0.3 seconds.
      */
      setTimeout(() => {
        const fadeDuration = 120;
        const start = performance.now();

        const fade = (time) => {
          const progress = (time - start) / fadeDuration;

          stroke.opacity = Math.max(0, 0.65 * (1 - progress));

          redraw();

          if (progress < 1) {
            requestAnimationFrame(fade);
          } else {
            strokes.current = strokes.current.filter((item) => item !== stroke);

            redraw();
          }
        };

        requestAnimationFrame(fade);
      }, 300);
    };

    const handleMouseDown = (event) => {
      if (event.button !== 0) return;

      if (isBlocked(event.target)) {
        return;
      }

      isDrawing.current = true;

      currentStroke.current = {
        points: [
          {
            x: event.clientX,
            y: event.clientY,
          },
        ],
        opacity: 0.65,
      };

      strokes.current.push(currentStroke.current);

      event.preventDefault();

      redraw();
    };

    const handleMouseMove = (event) => {
      if (!isDrawing.current) return;

      /*
        If the user drags onto a clickable element,
        stop drawing immediately.
      */
      if (isBlocked(event.target)) {
        stopDrawing();
        return;
      }

      if (!currentStroke.current) return;

      currentStroke.current.points.push({
        x: event.clientX,
        y: event.clientY,
      });

      redraw();
    };

    const handleMouseUp = () => {
      stopDrawing();
    };

    const handleMouseLeave = () => {
      stopDrawing();
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="drawing-canvas" />
  );
}
