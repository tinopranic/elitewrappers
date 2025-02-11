import { useEffect, useState } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
}

interface InstagramFeedProps {
  accessToken: string;
  limit?: number;
}

export async function getInstagramPosts(accessToken: string, limit: number = 7): Promise<InstagramPost[]> {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink&access_token=${accessToken}&limit=${limit}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}

export function useInstagramFeed({ accessToken, limit = 7 }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getInstagramPosts(accessToken, limit);
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to fetch Instagram posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [accessToken, limit]);

  return { posts, loading, error };
} 