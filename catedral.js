
function desenharCatedral(svg) {
  const NS = "http://www.w3.org/2000/svg";
  const N = 16, BASE = 520, H = 400;
  const rw = 110, k = 314, t0 = 0.75;
  const r = (t) => Math.sqrt(rw * rw + k * k * (t - t0) * (t - t0));
  const passos = 24;

  const el = (tag, attrs, pai = svg) => {
    const e = document.createElementNS(NS, tag);
    for (const a in attrs) e.setAttribute(a, attrs[a]);
    pai.appendChild(e);
    return e;
  };

  const defs = el("defs", {});
  const gF = el("linearGradient", { id: "gFrente", x1: 0, y1: 1, x2: 0, y2: 0 }, defs);
  el("stop", { offset: "0", "stop-color": "#a9adb5" }, gF);
  el("stop", { offset: "1", "stop-color": "#eceef1" }, gF);
  const gT = el("linearGradient", { id: "gTras", x1: 0, y1: 1, x2: 0, y2: 0 }, defs);
  el("stop", { offset: "0", "stop-color": "#6d717a" }, gT);
  el("stop", { offset: "1", "stop-color": "#a3a7af" }, gT);

  const esq = [], dir = [];
  for (let i = 0; i <= passos; i++) {
    const t = i / passos, y = BASE - H * t, rr = r(t) * 0.97;
    esq.push(`${-rr},${y}`); dir.unshift(`${rr},${y}`);
  }
  el("polygon", { points: [...esq, ...dir].join(" "), fill: "#4b4e57" });
  el("ellipse", { cx: 0, cy: BASE - H, rx: r(1) * 0.97, ry: 14, fill: "#3a3d45" });

  const costelas = [];
  for (let i = 0; i < N; i++) {
    const th = (i * 2 * Math.PI) / N;
    costelas.push({ th, prof: Math.cos(th) });
  }
  costelas.sort((a, b) => a.prof - b.prof);

  for (const { th, prof } of costelas) {
    const frente = prof >= 0;
    const esqP = [], dirP = [];
    for (let i = 0; i <= passos; i++) {
      const t = i / passos, y = BASE - H * t;
      const d = (Math.PI / N) * (0.78 - 0.5 * t);
      esqP.push(`${(r(t) * Math.sin(th - d)).toFixed(1)},${y.toFixed(1)}`);
      dirP.unshift(`${(r(t) * Math.sin(th + d)).toFixed(1)},${y.toFixed(1)}`);
    }
    const ponta = `${(r(1) * 1.1 * Math.sin(th)).toFixed(1)},${(BASE - H - 42).toFixed(1)}`;
    el("polygon", {
      points: [...esqP, ponta, ...dirP].join(" "),
      fill: frente ? "url(#gFrente)" : "url(#gTras)",
      stroke: frente ? "#7b7f88" : "#585c65",
      "stroke-width": 1,
      "stroke-linejoin": "round",
    });
  }

  el("rect", { x: -290, y: BASE, width: 580, height: 10, fill: "#8d919a" });
  el("rect", { x: -290, y: BASE + 10, width: 580, height: 5, fill: "#c9ccd2" });
  const topo = BASE - H - 42;
  el("rect", { x: -3, y: topo - 78, width: 6, height: 74, fill: "#2b2f3a" });
  el("rect", { x: -26, y: topo - 58, width: 52, height: 6, fill: "#2b2f3a" });
}
