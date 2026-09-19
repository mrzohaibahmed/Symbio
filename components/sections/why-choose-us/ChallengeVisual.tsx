"use client";

import { motion } from "framer-motion";
import type { VisualType } from "./types";

interface ChallengeVisualProps {
  type: VisualType;
}

export function ChallengeVisual({ type }: ChallengeVisualProps) {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1A1A1A]/80 via-[#111111] to-[#000000] border border-white/10 shadow-2xl flex items-center justify-center group">
      {/* Soft Ambient Radial Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-accent-light/10 blur-2xl" />
      </div>

      {/* Blueprint Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60" />

      {/* Technical Blueprint Corner Reticles */}
      <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[10px] text-white/30 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>SYS.VISUAL // {type.toUpperCase()}</span>
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-white/30 tracking-widest">
        [34°03&apos;N 118°14&apos;W]
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/30 tracking-widest">
        SYMBIO ADVISORY ARCHITECTURE
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span className="w-1 h-1 rounded-full bg-accent" />
      </div>

      {/* Dynamic Visual Content according to visualType */}
      <motion.div
        key={type}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full h-full p-8 flex items-center justify-center"
      >
        {type === "architectural-grid" && <ArchitecturalGridVisual />}
        {type === "workflow-network" && <WorkflowNetworkVisual />}
        {type === "security-mesh" && <SecurityMeshVisual />}
        {type === "regulatory-lines" && <RegulatoryLinesVisual />}
        {type === "strategic-roadmap" && <StrategicRoadmapVisual />}
        {type === "financial-matrix" && <FinancialMatrixVisual />}
      </motion.div>

      {/* Glassmorphism Outer Border Highlight */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Per-Challenge Abstract Visual Subcomponents                                */
/* -------------------------------------------------------------------------- */

function ArchitecturalGridVisual() {
  return (
    <svg className="w-full h-full max-w-[360px] max-h-[300px]" viewBox="0 0 400 320" fill="none">
      {/* Concentric Structural Frames */}
      <motion.rect
        x="60" y="40" width="280" height="240" rx="12"
        stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.rect
        x="100" y="70" width="200" height="180" rx="8"
        stroke="rgba(227,6,19,0.3)" strokeWidth="1.5"
      />

      {/* Perspective Architectural Lines */}
      <line x1="60" y1="40" x2="100" y2="70" stroke="rgba(237,28,36,0.4)" strokeWidth="1.5" />
      <line x1="340" y1="40" x2="300" y2="70" stroke="rgba(237,28,36,0.4)" strokeWidth="1.5" />
      <line x1="60" y1="280" x2="100" y2="250" stroke="rgba(237,28,36,0.4)" strokeWidth="1.5" />
      <line x1="340" y1="280" x2="300" y2="250" stroke="rgba(237,28,36,0.4)" strokeWidth="1.5" />

      {/* Crosshairs & Center Node */}
      <line x1="200" y1="40" x2="200" y2="280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="60" y1="160" x2="340" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Floating Node Spheres */}
      <motion.circle
        cx="200" cy="160" r="8" fill="#E30613"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <circle cx="200" cy="160" r="16" stroke="rgba(237,28,36,0.5)" strokeWidth="1" />

      <circle cx="100" cy="70" r="4" fill="#ED1C24" />
      <circle cx="300" cy="70" r="4" fill="#ED1C24" />
      <circle cx="100" cy="250" r="4" fill="#ED1C24" />
      <circle cx="300" cy="250" r="4" fill="#ED1C24" />

      {/* Floating Horizontal Accent Bar */}
      <motion.rect
        x="130" y="158" width="140" height="4" rx="2" fill="url(#grad-arch)"
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <defs>
        <linearGradient id="grad-arch" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E30613" stopOpacity="0" />
          <stop offset="50%" stopColor="#ED1C24" stopOpacity="1" />
          <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function WorkflowNetworkVisual() {
  return (
    <svg className="w-full h-full max-w-[360px] max-h-[300px]" viewBox="0 0 400 320" fill="none">
      {/* Connecting Network Paths */}
      <path d="M 60 160 Q 140 60 200 160 T 340 160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
      <path d="M 60 160 Q 140 260 200 160 T 340 160" stroke="rgba(227,6,19,0.3)" strokeWidth="1.5" fill="none" />

      {/* Animated Data Pulses */}
      <motion.circle
        cx="130" cy="110" r="4" fill="#ED1C24"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <motion.circle
        cx="270" cy="210" r="4" fill="#ED1C24"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
      />

      {/* Central Hub & Satellite Nodes */}
      <circle cx="200" cy="160" r="28" fill="rgba(227,6,19,0.15)" stroke="#E30613" strokeWidth="1.5" />
      <circle cx="200" cy="160" r="12" fill="#ED1C24" />

      <circle cx="70" cy="160" r="10" fill="rgba(30,41,59,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <circle cx="330" cy="160" r="10" fill="rgba(30,41,59,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

      <circle cx="140" cy="70" r="8" fill="rgba(30,41,59,0.8)" stroke="#E30613" strokeWidth="1.5" />
      <circle cx="260" cy="70" r="8" fill="rgba(30,41,59,0.8)" stroke="#E30613" strokeWidth="1.5" />

      <circle cx="140" cy="250" r="8" fill="rgba(30,41,59,0.8)" stroke="#E30613" strokeWidth="1.5" />
      <circle cx="260" cy="250" r="8" fill="rgba(30,41,59,0.8)" stroke="#E30613" strokeWidth="1.5" />

      {/* Orbit Ring */}
      <motion.circle
        cx="200" cy="160" r="60" stroke="rgba(237,28,36,0.25)" strokeWidth="1" strokeDasharray="6 6" fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 160px" }}
      />
    </svg>
  );
}

function SecurityMeshVisual() {
  return (
    <svg className="w-full h-full max-w-[360px] max-h-[300px]" viewBox="0 0 400 320" fill="none">
      {/* Outer Hexagon Shield Mesh */}
      <polygon
        points="200,30 320,90 320,230 200,290 80,230 80,90"
        stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none"
      />
      <polygon
        points="200,60 290,105 290,215 200,260 110,215 110,105"
        stroke="rgba(227,6,19,0.3)" strokeWidth="1.5" fill="rgba(227,6,19,0.05)"
      />

      {/* Internal Security Control Node */}
      <motion.polygon
        points="200,90 260,120 260,200 200,230 140,200 140,120"
        stroke="#ED1C24" strokeWidth="2" fill="rgba(237,28,36,0.15)"
        animate={{ scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 160px" }}
      />

      {/* Central Lock Emblem Node */}
      <circle cx="200" cy="160" r="16" fill="#E30613" />
      <path d="M 194 160 L 206 160 L 200 150 Z" fill="#ffffff" />
      <rect x="194" y="160" width="12" height="10" rx="2" fill="#ffffff" />

      {/* Control Scan Beam */}
      <motion.line
        x1="110" y1="160" x2="290" y2="160"
        stroke="rgba(237,28,36,0.7)" strokeWidth="2"
        animate={{ y1: [80, 240, 80], y2: [80, 240, 80] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function RegulatoryLinesVisual() {
  return (
    <svg className="w-full h-full max-w-[360px] max-h-[300px]" viewBox="0 0 400 320" fill="none">
      {/* Regulatory Matrix Bar Charts */}
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 70 + i * 32;
        const heights = [120, 180, 140, 220, 160, 240, 190, 130, 210];
        const h = heights[i];
        const y = 260 - h;
        const isAccent = i === 3 || i === 5;

        return (
          <g key={i}>
            <rect
              x={x} y={y} width="16" height={h} rx="4"
              fill={isAccent ? "rgba(237,28,36,0.35)" : "rgba(255,255,255,0.08)"}
              stroke={isAccent ? "#ED1C24" : "rgba(255,255,255,0.15)"}
              strokeWidth="1"
            />
            {isAccent && (
              <motion.circle
                cx={x + 8} cy={y - 8} r="3" fill="#ED1C24"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
          </g>
        );
      })}

      {/* Compliance Threshold Line */}
      <motion.line
        x1="50" y1="120" x2="350" y2="120"
        stroke="#E30613" strokeWidth="2" strokeDasharray="6 4"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Regulatory Baseline */}
      <line x1="50" y1="260" x2="350" y2="260" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    </svg>
  );
}

function StrategicRoadmapVisual() {
  return (
    <svg className="w-full h-full max-w-[360px] max-h-[300px]" viewBox="0 0 400 320" fill="none">
      {/* Horizon Vector Curves */}
      <path
        d="M 50 240 C 120 200, 180 120, 350 70"
        stroke="#E30613" strokeWidth="2.5" fill="none"
      />
      <path
        d="M 50 260 C 140 230, 220 180, 350 140"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none"
      />

      {/* Milestone Nodes */}
      {[
        { cx: 50, cy: 240, label: "Q1" },
        { cx: 130, cy: 185, label: "Q2" },
        { cx: 220, cy: 125, label: "Q3" },
        { cx: 350, cy: 70, label: "GOAL" },
      ].map((node, index) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="10" fill="#111111" stroke="#ED1C24" strokeWidth="2" />
          <circle cx={node.cx} cy={node.cy} r="4" fill="#ED1C24" />
          {index === 3 && (
            <motion.circle
              cx={node.cx} cy={node.cy} r="18" stroke="rgba(237,28,36,0.4)" strokeWidth="1.5" fill="none"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </g>
      ))}

      {/* Target Arrow Vector */}
      <motion.path
        d="M 330 80 L 350 70 L 340 90"
        stroke="#ED1C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
    </svg>
  );
}

function FinancialMatrixVisual() {
  return (
    <svg className="w-full h-full max-w-[360px] max-h-[300px]" viewBox="0 0 400 320" fill="none">
      {/* Financial Matrix Ledger Cards */}
      <rect x="60" y="50" width="280" height="220" rx="10" fill="rgba(17,17,17,0.7)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* Ledger Header Line */}
      <line x1="60" y1="95" x2="340" y2="95" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Ledger Row Indicators */}
      {[125, 160, 195, 230].map((y, idx) => (
        <g key={y}>
          <line x1="80" y1={y} x2="180" y2={y} stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
          <line x1="200" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
          <rect
            x="280" y={y - 6} width="40" height="12" rx="3"
            fill={idx === 1 ? "rgba(237,28,36,0.25)" : "rgba(255,255,255,0.06)"}
            stroke={idx === 1 ? "#ED1C24" : "none"}
          />
        </g>
      ))}

      {/* Ledger Audit Checkmark Marker */}
      <motion.circle
        cx="300" cy="160" r="10" fill="#E30613"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <path d="M 296 160 L 299 163 L 304 157" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
