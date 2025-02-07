import { NextResponse } from 'next/server';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID; // Elite Wrappers' Google Place ID

export async function GET() {
  try {
    // First, fetch the place details to get reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      return NextResponse.json({ 
        success: false, 
        error: 'No reviews found' 
      });
    }

    // Transform the reviews into our testimonial format
    const testimonials = data.result.reviews.map((review: any) => ({
      quote: review.text,
      name: review.author_name,
      designation: `${review.rating} ★`, // Show the rating
      src: review.profile_photo_url,
      rating: review.rating,
      time: review.time // Unix timestamp of when this review was submitted
    }));

    // Sort by rating (highest first) and recency
    testimonials.sort((a: any, b: any) => {
      if (b.rating === a.rating) {
        return b.time - a.time;
      }
      return b.rating - a.rating;
    });

    return NextResponse.json({ 
      success: true, 
      data: testimonials 
    });
    
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch reviews',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 