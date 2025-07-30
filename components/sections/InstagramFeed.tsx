"use client"

import React, { useEffect, useState } from "react"
import { Instagram, Loader2, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface InstagramPost {
  id: string
  media_type: string
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        console.log('🔍 Fetching recent Instagram posts...')
        setLoading(true)
        
        const response = await fetch('/api/instagram-recent')
        const data = await response.json()
        
        if (!response.ok || !data.success) {
          throw new Error(data.error || 'Failed to fetch Instagram posts')
        }
        
        console.log('✅ Fetched posts:', data.data.length)
        setPosts(data.data)
        setError(null)

      } catch (err) {
        console.error('💥 Error in InstagramFeed:', err)
        setError(err instanceof Error ? err.message : 'Failed to load Instagram posts')
      } finally {
        setLoading(false)
      }
    }

    fetchRecentPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        <p className="mt-4 text-gray-500">Loading recent Instagram posts...</p>
      </div>
    )
  }

  if (error || posts.length === 0) {
    return (
      <div className="text-center text-gray-500 min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-red-500 mb-2">{error || 'No posts found'}</p>
        <Link 
          href="https://www.instagram.com/elitewrapperssydney/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-600 mt-4 inline-flex items-center gap-2"
        >
          <Instagram className="w-5 h-5" />
          Visit our Instagram
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts.map((post) => {
        const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
        
        return (
          <div key={post.id} className="relative group bg-gray-900 rounded-lg overflow-hidden aspect-square border border-gray-800">
            <Link
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={post.caption || 'Instagram post'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <Instagram className="w-12 h-12 text-gray-600" />
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <Instagram className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">View on Instagram</p>
                  {post.caption && (
                    <p className="text-xs mt-2 opacity-75 line-clamp-2">
                      {post.caption.slice(0, 80)}...
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
} 