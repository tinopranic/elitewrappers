"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface InstagramPost {
  id: string
  media_type: string
  media_url: string
  permalink: string
  caption: string
  timestamp: string
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/instagram")
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts")
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError("Failed to load Instagram posts. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-teal-500" />
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-lg group"
        >
          <Image
            src={post.media_url || "/placeholder.svg"}
            alt={post.caption}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-sm text-center p-4">{post.caption}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

