import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./PortfolioCard.css";

import { useLightbox } from "@/components/portfolio/Lightbox";
import { ExternalLink, Volume2, VolumeX } from "lucide-react";

export interface WorkCarouselCardData {
  id: string;
  title: string;
  description?: string;
  url: string;
  category?: string;
  price?: string;
  type?: "Image" | "Video";
}

interface WorkCarouselCardProps {
  project: WorkCarouselCardData;
  active?: boolean;
  index: number;
  lightbox: ReturnType<typeof useLightbox>;
}

export function WorkCarouselCard({
  project,
  active = false,
  index,
  lightbox
}: WorkCarouselCardProps & { index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  
  /*
   * Keep every video muted by default.
   */
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.muted = true;
    setIsMuted(true);
  }, []);

  /*
   * Play the active video.
   * Pause every inactive video.
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video || project.type !== "Video") {
      return;
    }

    if (!active) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [active, project.type]);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <article className="portfolio-card rounded-none!">
      {/* Media */}
      <div
        className="portfolio-card-media"
        onClick={
          project.type === "Video"
            ? togglePlayback
            : undefined
        }
      >
        {project.type === "Video" ? (
          <video
            ref={videoRef}
            src={project.url}
            aria-label={project?.title}
            draggable={false}
            muted
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleVideoEnded}
          />
        ) : (
          <img
            src={project.url}
            alt={project?.title}
            draggable={false}
          />
        )}
      </div>

      {/* Overlay */}
      <div className="portfolio-card-overlay p-0!">

        {/* Top controls */}
        <div className="portfolio-card-top">

          {project.type === "Video" ? (
            <button
              type="button"
              className="portfolio-card-icon"
              aria-label={
                isMuted
                  ? `Unmute ${project?.title}`
                  : `Mute ${project?.title}`
              }
              onClick={(event) => {
                event.stopPropagation();
                toggleMute();
              }}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          ) : (
            <div></div>
          )}

          {project.price && (
            <div className="portfolio-card-price">
              {project.price}
            </div>
          )}

          <button
            type="button"
            className="portfolio-card-icon"
            onClick={() => lightbox.open(index)}
            aria-label={`View ${project?.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Play / pause indicator */}
        {project.type === "Video" && (
          <button
            type="button"
            className={`portfolio-card-play ${
              isPlaying ? "playing" : "paused"
            }`}
            aria-label={
              isPlaying
                ? `Pause ${project?.title}`
                : `Play ${project?.title}`
            }
            onClick={(event) => {
              event.stopPropagation();
              togglePlayback();
            }}
          >
            {isPlaying ? "Ⅱ" : "▶"}
          </button>
        )}
      </div>
      
    </article>
  );
}