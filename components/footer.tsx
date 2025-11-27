"use client"

export default function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-12 bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-sm font-medium">
          InstaTask <span className="text-orange-500">| SkillConnect</span>
        </div>
        <div className="flex items-center gap-8 flex-wrap justify-center md:justify-end">
          <a href="#" className="text-sm hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-sm hover:text-white transition-colors">
            Contact
          </a>
          <a href="#" className="text-sm hover:text-white transition-colors">
            Privacy Policy
          </a>
          <div className="flex gap-4">
            <button className="w-8 h-8 rounded-full border border-gray-600 hover:border-white transition-colors flex items-center justify-center text-xs">
              f
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-600 hover:border-white transition-colors flex items-center justify-center text-xs">
              𝕏
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-600 hover:border-white transition-colors flex items-center justify-center text-xs">
              in
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
