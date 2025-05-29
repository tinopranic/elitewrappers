"use client"

import React, { useEffect, useState } from "react"
import { Instagram, Loader2 } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

// Add type declaration for Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void
      }
    }
  }
}

interface InstagramPost {
  id: string
  permalink: string
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const response = await fetch('/api/instagram')
        const data = await response.json()

        if (!response.ok || !data.success) {
          throw new Error(data.error || 'Failed to fetch Instagram posts')
        }

        // Only take the first 8 posts
        const validPosts = data.data.slice(0, 8).map((post: any) => ({
          id: post.id,
          permalink: post.permalink
        }))

        setPosts(validPosts)
        setError(null)
        setRetryCount(0)

        // Trigger Instagram embed after posts are loaded
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      } catch (err) {
        console.error('Error in InstagramFeed:', err)
        setError(err instanceof Error ? err.message : 'Failed to load Instagram posts')
        
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1)
          }, 2000 * (retryCount + 1))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [retryCount])

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        <p className="mt-4 text-gray-500">Loading Instagram feed...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-gray-500 min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-red-500 mb-2">{error}</p>
        {retryCount < 3 && (
          <button
            onClick={() => setRetryCount(prev => prev + 1)}
            className="text-teal-500 hover:text-teal-600 mb-4 inline-flex items-center gap-2"
          >
            Try Again
          </button>
        )}
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
    <>
      <Script 
        src="https://www.instagram.com/embed.js" 
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="instagram-embed-container aspect-square">
            <blockquote
              className="instagram-media w-full h-full"
              data-instgrm-permalink={post.permalink}
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                padding: '0',
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
          </div>
        ))}
      </div>
    </>
  )
} 