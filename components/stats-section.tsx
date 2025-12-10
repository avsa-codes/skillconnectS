"use client"

import { useEffect, useState } from "react"

const BASE_STATS = {
  christ: 150,
  josephs: 120,
  jain: 180,
  carmel: 90,
}

const INCREMENT = 5          // increase per hour
const INTERVAL_HOURS = 1     // every 1 hour

export default function StatsSection() {
  const [stats, setStats] = useState(BASE_STATS)

  useEffect(() => {
    const stored = localStorage.getItem("skillconnect_stats")
    const lastUpdated = localStorage.getItem("skillconnect_last_update")

    let currentStats = stored ? JSON.parse(stored) : BASE_STATS
    let last = lastUpdated ? parseInt(lastUpdated) : 0
    const now = Date.now()

    if (now - last > INTERVAL_HOURS * 60 * 60 * 1000) {
      currentStats = {
        christ: currentStats.christ + INCREMENT,
        josephs: currentStats.josephs + INCREMENT,
        jain: currentStats.jain + INCREMENT,
        carmel: currentStats.carmel + INCREMENT,
      }

      localStorage.setItem("skillconnect_stats", JSON.stringify(currentStats))
      localStorage.setItem("skillconnect_last_update", now.toString())
    }

    setStats(currentStats)
  }, [])

  const entries = [
    { label: "Christites", value: stats.christ },
    { label: "Josephites", value: stats.josephs },
    { label: "Jains", value: stats.jain },
    { label: "Carmelites", value: stats.carmel },
  ]

  const sorted = [...entries].sort((a, b) => b.value - a.value)

  return (
    <section className="w-full py-20 bg-gray-50 relative">

      {/* LIVE badge */}
      <div
        className="
          absolute -top-3 left-1/2 -translate-x-1/2
          bg-orange-500 text-white px-4 py-1 text-sm font-semibold 
          rounded-full shadow-md animate-pulse
        "
      >
        LIVE
      </div>

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-900">
        Thousands Are Signing Up. Where Does Your College Stand?
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {sorted.map((item, index) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            rank={index + 1}
          />
        ))}
      </div>
    </section>
  )
}

const badgeStyles: Record<number, string> = {
  1: "bg-yellow-400 text-white",
  2: "bg-gray-300 text-gray-800",
  3: "bg-amber-700 text-white",
  4: "bg-gray-200 text-gray-600",
}

function StatCard({
  label,
  value,
  rank,
}: {
  label: string
  value: number
  rank: number
}) {
  return (
    <div
      className="
        relative bg-white p-8 rounded-2xl shadow-md 
        hover:shadow-[0_0_20px_rgba(255,115,40,0.35)]
        hover:scale-105 transition-all duration-300 
        cursor-pointer
      "
    >
      {/* Rank Badge */}
      <div
        className={`
          absolute -top-3 -right-3 px-3 py-1 text-sm font-bold rounded-full
          ${badgeStyles[rank]}
        `}
      >
        #{rank}
      </div>

      <p className="text-4xl font-extrabold text-orange-600">{value}+</p>
      <p className="mt-2 text-gray-800 font-semibold text-lg">{label}</p>
    </div>
  )
}

