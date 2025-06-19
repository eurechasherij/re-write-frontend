---
title: Building Saturday AutoTrade – From Manual Clicks to Autonomous Execution
date: 2025-06-19
readingTime: 4 min read
excerpt: Saturday AutoTrade is my response to the repetitive grind of manual crypto trading. Built in Go, it automates entries, logs decisions, and lays the groundwork for fully autonomous AI-powered strategies.
---

# Saturday AutoTrade 🧠💸

Trading manually is a drag — especially when your weekend plans are interrupted by market moves. **Saturday AutoTrade** is my way of reclaiming that time. It’s a Go-based backend system that automates my trading process: from reading signals to executing futures orders.

And more importantly, it’s built for *me* — with full transparency, modular logic, and future AI hooks.

---

## 🧠 Why I Built It

I've been in crypto long enough to know what works *for me* — and what doesn’t. Off-the-shelf bots? Opaque and rigid.

So I built something different:  
- A system I fully control  
- Something tailored to my own strategy  
- A launchpad for integrating AI that *actually does something useful*

This wasn’t about building another trading bot. It was about designing a framework that grows with how I trade — and eventually learns from it.

---

## ⚙️ Key Features

- 🔁 **Autonomous Position Tracking** – Opens, closes, logs, and explains every trade.
- 💡 **Pluggable Signal Layer** – Supports logic like MA crossovers or any condition you throw in.
- 📜 **Reasoning-Backed Logging** – Every position includes context, triggers, and PnL.
- 📉 **Backtest-Friendly Core** – Run dry-runs without risking live capital.
- 🪝 **Strategy Modules** – Hot-swappable strategies. AI models will plug into this soon.
- 🔒 **Clean REST API** – Minimalistic and robust endpoints for full control.

---

## 🖥️ Project Structure & Developer UX

Saturday AutoTrade isn’t just a backend script — it’s a full system with real-time features and a modular UI that I actually enjoy using.

### 🧩 App Layout Highlights

- **Left Panel – Controls**:  
  - Coin selector, mode toggle (auto/manual), confidence slider, timeframe checkboxes  
  - "Generate Signal" and "Execute Trade" buttons  
  - Generate Candles for manual data (or if I want to use other LLMs)
  - Manual JSON input for full control

- **Center – AI Signal Display**:  
  - Showcases AI-generated signals with confidence scores and parameters  
  - Ready for override or confirmation

- **Right Panel – Live Info Feed**:  
  - Market price tracking, position updates, and real-time logs  
  - Syncs with Binance Futures and local history

- **Bottom – Performance Panel**:  
  - Daily PnL, win/loss ratio, and a streak tracker  
  - Helps keep emotion out of trading decisions

### 🧰 Dev Stack Details

- **Frontend**: React + Vite + Tailwind (with `shadcn-ui`)  
  - Zustand for state  
  - SWR for live data  
  - Fully responsive, clean componentized layout

- **Backend**: Golang + Gin  
  - Handles Binance integration, signal routing, and trade execution  
  - Structured API for both internal use and UI fetches

- **Database**: MongoDB  
  - Stores all trade data, logs, strategies, and performance analytics

---

## 📚 Lessons Learned (So Far)

- The **OpenAI API burns money** fast. Local inference is the future.
- AI doesn’t *magically* make you profitable. Garbage in, garbage out.
- Building tools that match your *own process* is far more valuable than buying someone else’s.

---

## 🚀 What’s Next?

Another ongoing hobby projects:

- ✅ Autonomous trading agents (via PyTorch or Ollama)
- 🧠 Local AI assistant (codename **E.L.I.A.S.**) — to observe, reason, and evolve
- 📊 More refined trading strategy modules with feedback loops

Fully offline. Fully programmable. Fully mine.

## Link to Project
[saturday-autotrade](https://github.com/eurechasherij/saturday)

---

Built by [re](https://github.com/eurechasherij) — because sometimes the best fix isn’t in your code, it’s in your weekend.
