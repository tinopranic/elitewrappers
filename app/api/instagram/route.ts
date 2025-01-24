import { NextResponse } from "next/server"

export async function GET() {
  // For now, return mock data
  const mockData = [
    {
      id: "1",
      media_type: "IMAGE",
      media_url: "https://placekitten.com/800/800",
      permalink: "https://www.instagram.com/p/mock1/",
      caption: "Beautiful car wrap! #carwrap #elitewrappers",
      timestamp: "2023-06-01T12:00:00+0000",
    },
    {
      id: "2",
      media_type: "IMAGE",
      media_url: "https://placekitten.com/801/801",
      permalink: "https://www.instagram.com/p/mock2/",
      caption: "Another stunning transformation! #vehiclewrap",
      timestamp: "2023-06-02T14:30:00+0000",
    },
  ]

  return NextResponse.json(mockData)
}

