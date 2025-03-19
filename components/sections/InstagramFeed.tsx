"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, ExternalLink, RefreshCcw, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
  const [failedImages, setFailedImages] = useState<Record<string, number>>({})
  const [selectedPost, setSelectedPost] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setDebugInfo("Fetching posts...")
        const response = await fetch('/api/instagram')
        const data = await response.json()
        setDebugInfo(`Response status: ${response.status}`)

        if (!response.ok) {
          console.error('Instagram API response error:', {
            status: response.status,
            statusText: response.statusText,
            data
          });
          setDebugInfo(`Error: ${response.status} ${response.statusText} - ${data.error || 'Unknown error'}`)
          throw new Error(data.error || 'Failed to fetch Instagram posts')
        }

        if (!data.success) {
          console.error('Instagram API success false:', data);
          setDebugInfo(`API reported failure: ${data.error || 'Unknown error'}`)
          throw new Error(data.error || 'Failed to fetch Instagram posts')
        }

        const validPosts = data.data.filter((post: InstagramPost) => {
          if (post.media_type === 'VIDEO' && !post.thumbnail_url) return false;
          if (post.media_type === 'CAROUSEL_ALBUM' && !post.media_url && !post.thumbnail_url) return false;
          return post.media_url || post.thumbnail_url;
        });

        setDebugInfo(`Fetched ${validPosts.length} valid posts`)
        if (validPosts.length > 0) {
          console.log("Sample post:", validPosts[0]);
          setDebugInfo(`First post media URL: ${validPosts[0].media_url?.substring(0, 30)}...`)
        }

        setPosts(validPosts)
        setError(null)
        setRetryCount(0)
      } catch (err) {
        console.error('Error in InstagramFeed:', err);
        setDebugInfo(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
        setError(err instanceof Error ? err.message : 'Failed to load Instagram posts')
        
        // Add fallback to local images
        setDebugInfo(`Using fallback images...`)
        setPosts([
          {
            id: 'fallback1',
            media_type: 'IMAGE',
            media_url: '/custom1.jpg',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Premium vehicle wrap by Elite Wrappers Sydney',
            timestamp: new Date().toISOString()
          },
          {
            id: 'fallback2',
            media_type: 'IMAGE',
            media_url: '/custom2.jpg',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Commercial vehicle branding',
            timestamp: new Date().toISOString()
          },
          {
            id: 'fallback3',
            media_type: 'IMAGE',
            media_url: '/custom3.jpg',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Custom luxury vehicle wrap',
            timestamp: new Date().toISOString()
          },
          {
            id: 'fallback4',
            media_type: 'IMAGE',
            media_url: '/custom4.png',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Premium vehicle transformation',
            timestamp: new Date().toISOString()
          },
          {
            id: 'fallback5',
            media_type: 'IMAGE',
            media_url: '/custom5.png',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Professional vehicle wrap by Elite Wrappers',
            timestamp: new Date().toISOString()
          },
          {
            id: 'fallback6',
            media_type: 'IMAGE',
            media_url: '/commercial1.jpg',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Commercial fleet branding',
            timestamp: new Date().toISOString()
          },
          {
            id: 'fallback7',
            media_type: 'IMAGE',
            media_url: '/commercial2.jpg',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Commercial vehicle wrap',
            timestamp: new Date().toISOString()
          },
          {
            id: 'fallback8',
            media_type: 'IMAGE',
            media_url: '/commercial3.jpg',
            permalink: 'https://www.instagram.com/elitewrapperssydney/',
            caption: 'Branded fleet vehicle',
            timestamp: new Date().toISOString()
          }
        ]);
        setError(null);
        
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

  const handleImageError = (postId: string) => {
    setFailedImages(prev => {
      const retries = (prev[postId] || 0) + 1;
      return { ...prev, [postId]: retries };
    });
  }

  const canRetryImage = (postId: string) => {
    return (failedImages[postId] || 0) < 3;
  }

  const retryImage = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFailedImages(prev => {
      const newFailedImages = { ...prev };
      delete newFailedImages[postId];
      return newFailedImages;
    });
  }

  const getMediaUrl = (post: InstagramPost) => {
    // If we've already tried the primary media and it failed, try the thumbnail
    if (failedImages[post.id] && failedImages[post.id] > 0) {
      if (post.thumbnail_url) return post.thumbnail_url;
      // If no thumbnail, maybe try media_url again as last resort
      return post.media_url;
    }
    
    // Otherwise use the standard priority
    if (post.media_type === 'VIDEO') {
      return post.thumbnail_url || post.media_url || '';
    }
    if (post.media_type === 'CAROUSEL_ALBUM') {
      return post.media_url || post.thumbnail_url || '';
    }
    return post.media_url || '';
  }

  const renderMedia = (post: InstagramPost, inModal: boolean = false) => {
    if (failedImages[post.id]) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-gray-500">
          <p className="text-sm text-center mb-2">Failed to load media</p>
          {canRetryImage(post.id) && (
            <button
              onClick={(e) => retryImage(post.id, e)}
              className="text-teal-500 hover:text-teal-600 inline-flex items-center gap-1"
            >
              <RefreshCcw className="w-4 h-4" />
              Retry
            </button>
          )}
        </div>
      )
    }

    if (post.media_type === 'VIDEO') {
      if (inModal) {
        return (
          <video
            src={post.media_url}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
            onError={() => handleImageError(post.id)}
          />
        )
      } else {
        // In grid view, show thumbnail with play button
        return (
          <>
            <Image
              src={post.thumbnail_url || post.media_url}
              alt={post.caption || 'Instagram video'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              onError={() => handleImageError(post.id)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={posts.indexOf(post) < 4}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
          </>
        )
      }
    }

    return (
      <Image
        src={getMediaUrl(post)}
        alt={post.caption || 'Instagram post'}
        fill
        className={`object-${inModal ? 'contain' : 'cover'} ${!inModal ? 'transition-transform duration-300 group-hover:scale-110' : ''}`}
        onError={() => handleImageError(post.id)}
        sizes={inModal ? "(max-width: 1024px) 100vw, 75vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
        priority={!inModal && posts.indexOf(post) < 4}
      />
    )
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mb-4"></div>
        {debugInfo && (
          <p className="text-sm text-gray-400">{debugInfo}</p>
        )}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-gray-500 min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-red-500 mb-2">{error}</p>
        {debugInfo && (
          <p className="text-sm text-gray-400 mb-3">{debugInfo}</p>
        )}
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="relative aspect-square">
          <div
            onClick={() => setSelectedPost(post.id)}
            className="cursor-pointer group relative w-full h-full overflow-hidden bg-gray-100 rounded-lg"
          >
            {renderMedia(post)}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
          </div>
        </div>
      ))}

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                {posts.find(p => p.id === selectedPost) && renderMedia(posts.find(p => p.id === selectedPost)!, true)}
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 mb-2">
                  {posts.find(p => p.id === selectedPost)?.caption}
                </p>
                <Link
                  href={posts.find(p => p.id === selectedPost)?.permalink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-600 inline-flex items-center gap-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Instagram
                </Link>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 