import { useEffect, useRef } from 'react';

/**
 * Signature visual: a mouse-reactive constellation of nodes and synapses
 * rendered on a canvas, evoking a neural network / knowledge graph.
 * Pure Canvas2D — no 3D engine dependency, so it stays lightweight and
 * predictable across devices.
 */
export default function NeuralField({ density = 60, className = '' }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, nodes, raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const colors = ['45, 212, 232', '167, 139, 250', '245, 166, 35'];

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((width * height) / 14000) + 10;
      nodes = Array.from({ length: Math.min(count, density) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = n.x - mouse.current.x;
        const dy = n.y - mouse.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          n.x += dx * 0.004;
          n.y += dy * 0.004;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(${a.color}, ${0.14 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${n.color}, 0.85)`;
        ctx.shadowColor = `rgba(${n.color}, 0.8)`;
        ctx.shadowBlur = 6;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    resize();
    step();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
