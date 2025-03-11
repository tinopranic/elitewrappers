"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, ExternalLink, RefreshCcw } from "lucide-react"
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
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 max-w-7xl mx-auto px-4">
        {posts.map((post, index) => {
          // Determine if this post should be featured (larger)
          const isFeatured = index % 7 === 0;
          const gridClass = isFeatured ? 
            'col-span-2 row-span-2' : 
            index % 5 === 0 ? 'col-span-2' : '';

          const imageFailed = failedImages[post.id] && failedImages[post.id] >= 3;

          return (
            <motion.div
              key={post.id}
              layoutId={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${gridClass}`}
              onClick={() => setSelectedPost(post.id)}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                {imageFailed ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                    <Instagram className="w-16 h-16 text-gray-500 mb-2" />
                    <p className="text-xs text-gray-400">Image unavailable</p>
                    <Link
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-xs text-teal-400 hover:text-teal-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on Instagram
                    </Link>
                  </div>
                ) : (
                  <>
                    <Image
                      src={getMediaUrl(post)}
                      alt={post.caption || 'Instagram post'}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => handleImageError(post.id)}
                      priority={index < 8}
                    />
                    
                    {/* Retry button if image failed but can retry */}
                    {failedImages[post.id] && failedImages[post.id] > 0 && canRetryImage(post.id) && (
                      <button 
                        onClick={(e) => retryImage(post.id, e)}
                        className="absolute top-2 right-2 bg-black/70 p-2 rounded-full hover:bg-black/90 z-10"
                      >
                        <RefreshCcw className="w-4 h-4 text-white" />
                      </button>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                      <p className="text-white text-sm line-clamp-3 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        {post.caption || 'View on Instagram'}
                      </p>
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <time className="text-gray-300 text-xs">
                          {new Date(post.timestamp).toLocaleDateString()}
                        </time>
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              layoutId={selectedPost}
              className="relative w-full max-w-4xl aspect-square rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {posts.find(p => p.id === selectedPost) && (
                <>
                  {posts.find(p => p.id === selectedPost)!.media_type === 'VIDEO' ? (
                    <video
                      src={posts.find(p => p.id === selectedPost)!.media_url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      {failedImages[selectedPost] && failedImages[selectedPost] >= 3 ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                          <Instagram className="w-24 h-24 text-gray-500 mb-4" />
                          <p className="text-gray-400">Image unavailable</p>
                        </div>
                      ) : (
                        <Image
                          src={getMediaUrl(posts.find(p => p.id === selectedPost)!)}
                          alt="Instagram post"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          onError={() => handleImageError(selectedPost)}
                        />
                      )}
                    </div>
                  )}
                  <Link
                    href={posts.find(p => p.id === selectedPost)!.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    View on Instagram
                  </Link>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  )
} 