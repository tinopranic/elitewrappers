"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

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
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  useEffect(() => {
    async function fetchPosts() {
      try {
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

        // Filter out posts with invalid media_url or missing required fields
        const validPosts = data.data.filter((post: InstagramPost) => {
          // Log each post for debugging
          console.log('Processing post:', {
            id: post.id,
            type: post.media_type,
            hasMediaUrl: !!post.media_url,
            hasThumbnail: !!post.thumbnail_url
          });

          // For VIDEO posts, ensure we have a thumbnail
          if (post.media_type === 'VIDEO' && !post.thumbnail_url) {
            console.log('Skipping video without thumbnail:', post.id);
            return false;
          }

          // For CAROUSEL_ALBUM, ensure we have either media_url or thumbnail_url
          if (post.media_type === 'CAROUSEL_ALBUM' && !post.media_url && !post.thumbnail_url) {
            console.log('Skipping carousel without media:', post.id);
            return false;
          }

          // Ensure we have a valid URL to display
          const hasValidUrl = post.media_url || post.thumbnail_url;
          if (!hasValidUrl) {
            console.log('Skipping post without valid URL:', post.id);
            return false;
          }

          return true;
        });

        console.log(`Filtered ${data.data.length} posts to ${validPosts.length} valid posts`);
        setPosts(validPosts)
        setError(null)
        setRetryCount(0)
      } catch (err) {
        console.error('Error in InstagramFeed:', err);
        setError(err instanceof Error ? err.message : 'Failed to load Instagram posts')
        
        if (retryCount < 3) {
          console.log(`Retrying fetch (attempt ${retryCount + 1}/3)...`);
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

  const handleImageError = (postId: string) => {
    console.log('Image load failed for post:', postId);
    setFailedImages(prev => new Set(prev).add(postId))
  }

  const getMediaUrl = (post: InstagramPost) => {
    // If this image previously failed, try the alternate URL
    if (failedImages.has(post.id)) {
      const alternateUrl = post.thumbnail_url || post.media_url || '';
      console.log('Using alternate URL for failed image:', post.id, alternateUrl);
      return alternateUrl;
    }
    
    // For videos, always use thumbnail
    if (post.media_type === 'VIDEO') {
      return post.thumbnail_url || post.media_url || '';
    }

    // For carousels, prefer media_url but fall back to thumbnail
    if (post.media_type === 'CAROUSEL_ALBUM') {
      return post.media_url || post.thumbnail_url || '';
    }

    // For regular images, use media_url
    return post.media_url || '';
  }

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative aspect-square group"
        >
          <Link href={post.permalink} target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src={getMediaUrl(post)}
                alt={post.caption || 'Instagram post'}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => handleImageError(post.id)}
                priority={index < 6}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-4 text-center">
                  <p className="text-white text-sm line-clamp-4 mb-2">
                    {post.caption || 'View on Instagram'}
                  </p>
                  <time className="text-gray-300 text-xs">
                    {new Date(post.timestamp).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
} 