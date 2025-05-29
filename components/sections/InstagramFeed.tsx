"use client"

import React, { useEffect, useState } from "react"
import { Instagram, Loader2, ExternalLink } from "lucide-react"
import Link from "next/link"

interface InstagramPost {
  id: string
  permalink: string
  caption?: string
  media_type?: string
}

interface InstagramEmbed {
  html: string
  thumbnail_url: string
  title: string
  author_name: string
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [embeds, setEmbeds] = useState<Record<string, InstagramEmbed>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log('🔍 Fetching Instagram posts...')
        setLoading(true)
        const response = await fetch('/api/instagram', { cache: 'no-store' })
        const data = await response.json()

        console.log('📊 API Response:', { success: data.success, dataLength: data.data?.length })

        if (!response.ok || !data.success) {
          console.error('❌ API Error:', data.error)
          throw new Error(data.error || 'Failed to fetch Instagram posts')
        }

        // Only take the first 8 posts
        const validPosts = data.data.slice(0, 8).map((post: any) => ({
          id: post.id,
          permalink: post.permalink,
          caption: post.caption,
          media_type: post.media_type
        }))

        console.log('✅ Valid posts:', validPosts.length)
        setPosts(validPosts)

        // Fetch embeds for each post using oEmbed API
        await fetchEmbeds(validPosts)

        setError(null)
        setRetryCount(0)

      } catch (err) {
        console.error('💥 Error in InstagramFeed:', err)
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

    async function fetchEmbeds(posts: InstagramPost[]) {
      console.log('🎬 Fetching embeds for', posts.length, 'posts')
      const embedPromises = posts.map(async (post) => {
        try {
          // Use Instagram's oEmbed API
          const embedUrl = `https://graph.instagram.com/instagram_oembed?url=${encodeURIComponent(post.permalink)}&omitscript=true`
          const response = await fetch(embedUrl)
          
          if (response.ok) {
            const embedData = await response.json()
            return { id: post.id, embed: embedData }
          }
        } catch (error) {
          console.warn('Failed to fetch embed for post:', post.id, error)
        }
        return null
      })

      const embedResults = await Promise.all(embedPromises)
      const embedsMap: Record<string, InstagramEmbed> = {}
      
      embedResults.forEach((result) => {
        if (result) {
          embedsMap[result.id] = result.embed
        }
      })

      console.log('📱 Embeds fetched:', Object.keys(embedsMap).length)
      setEmbeds(embedsMap)
    }

    fetchPosts()
  }, [retryCount])

  // Load Instagram embed script
  useEffect(() => {
    if (Object.keys(embeds).length > 0) {
      const script = document.getElementById('instagram-embed-script')
      if (!script) {
        const newScript = document.createElement('script')
        newScript.id = 'instagram-embed-script'
        newScript.src = 'https://www.instagram.com/embed.js'
        newScript.async = true
        newScript.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }
        document.body.appendChild(newScript)
      } else if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }
  }, [embeds])

  console.log('🎬 Component render:', { loading, error, postsCount: posts.length, embedsCount: Object.keys(embeds).length })

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

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500 min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-red-500 mb-2">No posts found</p>
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
        const embed = embeds[post.id]
        
        if (embed) {
          // Use Instagram's native embed
          return (
            <div 
              key={post.id} 
              className="instagram-embed-container"
              dangerouslySetInnerHTML={{ __html: embed.html }}
            />
          )
        } else {
          // Fallback to link if embed fails
          return (
            <div key={post.id} className="relative group bg-gray-900 rounded-lg overflow-hidden aspect-square border border-gray-800 min-h-[400px]">
              <Link
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-12 h-12 mb-4 text-pink-500" />
                <p className="text-sm font-medium mb-2">View on Instagram</p>
                {post.caption && (
                  <p className="text-xs text-center px-4 opacity-75 line-clamp-3">
                    {post.caption.slice(0, 100)}...
                  </p>
                )}
                <ExternalLink className="w-4 h-4 mt-2 opacity-50" />
              </Link>
            </div>
          )
        }
      })}
    </div>
  )
}

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