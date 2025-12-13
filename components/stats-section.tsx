"use client"

import { useEffect, useState } from "react"
import { Medal } from "lucide-react"

type CollegeStat = {
  college: string
  count: number
}

type StatsSectionProps = {
  onRegister: () => void
}

/* =========================
   MAIN LEADERBOARD (TOP 4)
========================= */

const BASE_STATS: CollegeStat[] = [
  { college: "St. Joseph’s University", count: 92 },
  { college: "Christ University", count: 71 },
  { college: "BMSCE", count: 54 },
  { college: "Jain University", count: 33 },
]

/* =========================
   RUNNER-UP COLLEGES
========================= */

const RUNNER_UPS: CollegeStat[] = [
  { college: "RVCE", count: 21 },
  { college: "PES University", count: 18 },
]

const MAX_INCREMENT = 2
const INTERVAL_HOURS = 3

export default function StatsSection({ onRegister }: StatsSectionProps) {
  const [stats, setStats] = useState<CollegeStat[]>(BASE_STATS)

  useEffect(() => {
    const stored = localStorage.getItem("sc_college_stats")
    const lastUpdated = localStorage.getItem("sc_stats_last_update")
    const now = Date.now()

    let current: CollegeStat[] = stored
      ? JSON.parse(stored)
      : BASE_STATS

    const last = lastUpdated ? parseInt(lastUpdated) : 0

    if (now - last > INTERVAL_HOURS * 60 * 60 * 1000) {
      current = current.map((item) => {
        const shouldGrow = Math.random() > 0.5
        const inc = shouldGrow
          ? Math.floor(Math.random() * (MAX_INCREMENT + 1))
          : 0

        return {
          ...item,
          count: item.count + inc,
        }
      })

      localStorage.setItem(
        "sc_college_stats",
        JSON.stringify(current)
      )
      localStorage.setItem(
        "sc_stats_last_update",
        now.toString()
      )
    }

    current.sort((a, b) => b.count - a.count)
    setStats(current)
  }, [])

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Updating badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1 text-sm font-semibold rounded-full border border-orange-200">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          Updating
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Top Colleges by Early Access Registrations
        </h2>

        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Ranked by early access registrations from students
        </p>

        {/* Top 4 grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.slice(0, 4).map((item, index) => (
            <StatCard
              key={item.college}
              rank={index + 1}
              college={item.college}
              count={item.count}
            />
          ))}
        </div>

        {/* Runner-ups */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-gray-600 mb-4">
            Runner-up colleges
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {RUNNER_UPS.map((item) => (
              <div
                key={item.college}
                className="
                  px-4 py-2 rounded-full
                  bg-gray-100 text-gray-700 text-sm
                  border border-gray-200
                "
              >
                <span className="font-medium">
                  {item.college}
                </span>{" "}
                <span className="text-gray-500">
                  · {item.count} students
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center">
          <button
            onClick={onRegister}
            className="
              px-6 py-3 rounded-xl
              bg-orange-600 text-white font-semibold
              hover:bg-orange-700 transition
              shadow-sm
            "
          >
            Join your college
          </button>

          <p className="mt-2 text-sm text-gray-500">
            Takes less than a minute
          </p>
        </div>
      </div>
    </section>
  )
}

/* =========================
   STAT CARD
========================= */

function StatCard({
  rank,
  college,
  count,
}: {
  rank: number
  college: string
  count: number
}) {
  const medalStyles: Record<number, string> = {
    1: "bg-yellow-100 text-yellow-800 border-yellow-300",
    2: "bg-gray-100 text-gray-700 border-gray-300",
    3: "bg-amber-100 text-amber-800 border-amber-300",
  }

  return (
    <div
      className="
        relative bg-white rounded-2xl p-8
        border border-gray-100
        shadow-sm hover:shadow-lg
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Rank badge */}
      <div className="absolute -top-4 -right-4">
        {rank <= 3 ? (
          <div
            className={`
              flex items-center gap-1 px-3 py-1 rounded-full
              text-xs font-semibold border
              ${medalStyles[rank]}
            `}
          >
            <Medal className="h-4 w-4" />
            #{rank}
          </div>
        ) : (
          <div className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-500 border border-gray-200">
            #{rank}
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-5xl font-extrabold text-orange-600">
          {count}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          students
        </p>

        <p className="mt-4 text-lg font-semibold text-gray-900">
          {college}
        </p>
      </div>
    </div>
  )
}
