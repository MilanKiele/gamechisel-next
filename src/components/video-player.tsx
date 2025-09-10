"use client"

import { useState } from 'react'
import { X, Play } from 'lucide-react'

interface VideoPlayerProps {
  videoId: string
  startTime?: number
  onClose: () => void
}

export default function VideoPlayer({ videoId, startTime = 0, onClose }: VideoPlayerProps) {

  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}&rel=0&modestbranding=1`

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl aspect-video">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </div>
  )
}

interface VideoCardProps {
  videoId: string
  startTime?: number
  title: string
  thumbnail?: string
}

export function VideoCard({ videoId, startTime = 0, title, thumbnail }: VideoCardProps) {
  const [showVideo, setShowVideo] = useState(false)

  const handlePlay = () => {
    setShowVideo(true)
  }

  const handleClose = () => {
    setShowVideo(false)
  }

  return (
    <>
      <div 
        className="relative w-full h-full cursor-pointer group"
        onClick={handlePlay}
      >
        {/* Background Image/Thumbnail */}
        <div className="absolute inset-0 bg-background rounded-lg overflow-hidden">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-foreground">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-lg text-muted-foreground">Click to watch tutorial</p>
              </div>
            </div>
          )}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 group-hover:bg-background/30 transition-colors">
          <div className="w-20 h-20 bg-foreground/90 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-foreground font-semibold text-lg bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border">
            {title}
          </h3>
        </div>
      </div>

      {/* Video Player Modal */}
      {showVideo && (
        <VideoPlayer
          videoId={videoId}
          startTime={startTime}
          onClose={handleClose}
        />
      )}
    </>
  )
}