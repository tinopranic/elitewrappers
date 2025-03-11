"use client"

import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Instagram, ExternalLink, RefreshCcw } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Script from "next/script"

// Add type definition for Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

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
  const [retryCount, setRetryCount] = useState(0)
  const [instagramScriptLoaded, setInstagramScriptLoaded] = useState(false)
  const [selectedPost, setSelectedPost] = useState<string | null>(null)

  // Function to process embeds when Instagram script is loaded
  const processInstagramEmbeds = () => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  };

  // Effect to load Instagram script and process embeds
  useEffect(() => {
    if (instagramScriptLoaded) {
      processInstagramEmbeds();
    }
  }, [instagramScriptLoaded, posts]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const response = await fetch('/api/instagram')
        const data = await response.json()

        if (!response.ok) {
          console.error('Instagram API response error:', {
            status: response.status,
            statusText: response.statusText,
            data
          });
          throw new Error(data.error || 'Failed to fetch Instagram posts')
        }

        if (!data.success) {
          console.error('Instagram API success false:', data);
          throw new Error(data.error || 'Failed to fetch Instagram posts')
        }

        // Filter valid posts
        const validPosts = data.data.filter((post: InstagramPost) => {
          return post.permalink;
        });

        setPosts(validPosts)
        setError(null)
        setRetryCount(0)
      } catch (err) {
        console.error('Error in InstagramFeed:', err);
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

  // Extract post ID from permalink
  const getPostIdFromPermalink = (permalink: string): string => {
    // Example: https://www.instagram.com/p/C3-abcdefg/
    const match = permalink.match(/\/p\/([^\/]+)/);
    return match ? match[1] : "";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
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
        <p>No posts found</p>
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
    <div className="relative">
      {/* Instagram embed script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => setInstagramScriptLoaded(true)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        {posts.map((post, index) => {
          // Determine if this post should be featured (larger)
          const isFeatured = index % 5 === 0;
          const gridClass = isFeatured ? 
            'md:col-span-2' : '';

          const postId = getPostIdFromPermalink(post.permalink);

          return (
            <motion.div
              key={post.id}
              layoutId={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl h-[450px] ${gridClass}`}
            >
              <div className="instagram-embed-container h-full">
                <blockquote
                  className="instagram-media w-full h-full"
                  data-instgrm-permalink={post.permalink}
                  data-instgrm-version="14"
                  style={{
                    background: '#121212',
                    border: '0',
                    borderRadius: '12px',
                    boxShadow: 'none',
                    margin: '0',
                    padding: '0',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  {/* Fallback before embed loads */}
                  <Link 
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-full h-full bg-gray-900 text-white"
                  >
                    <div className="p-8 text-center">
                      <Instagram className="w-16 h-16 text-gray-500 mb-4 mx-auto" />
                      <p className="text-sm text-gray-400 mb-2">
                        {post.caption?.substring(0, 100)}
                        {post.caption && post.caption.length > 100 ? '...' : ''}
                      </p>
                      <span className="inline-flex items-center gap-2 text-teal-400 text-sm">
                        <ExternalLink className="w-4 h-4" />
                        View on Instagram
                      </span>
                    </div>
                  </Link>
                </blockquote>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Instagram branding */}
      <div className="flex justify-center my-8">
        <Link
          href="https://www.instagram.com/elitewrapperssydney/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-teal-500/20 to-pink-500/20 px-6 py-3 rounded-full hover:from-teal-500/30 hover:to-pink-500/30 transition-all duration-300 backdrop-blur-sm border border-white/10"
        >
          <Instagram className="w-5 h-5" />
          <span>View More on Instagram</span>
        </Link>
      </div>

      {/* Style for Instagram embeds */}
      <style jsx global>{`
        .instagram-embed-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
        
        .instagram-media {
          transition: all 0.3s ease !important;
        }
        
        .instagram-media:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
} 