import React from "react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  )
}

