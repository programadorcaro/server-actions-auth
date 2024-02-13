"use client"

import { useEffect, useRef, useState } from "react";
import { Play, Repeat, Shuffle, SkipBack, SkipForward, Square } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";

type SongConfig = {
  progress: number
  length: number
  currentTime: number
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songConfig, setSongConfig] = useState<SongConfig>({ progress: 0, length: 0, currentTime: 0 });

  const audioElem = useRef<any>();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying])

  useEffect(() => {
    if (isPlaying && songConfig.progress === 100) {
      setIsPlaying(false);
    }
  }, [songConfig])

  useEffect(() => {
    const duration = audioElem.current.duration;
    setSongConfig((prev) => ({ ...prev, length: duration }))
  }, [])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setSongConfig({ progress: ct / duration * 100, length: duration, currentTime: ct })
  }


  return (
    <div className="rounded-2xl p-3 backdrop-blur-sm bg-zinc-200/90 flex items-center">
      <audio
        src="https://utfs.io/f/9ab7f83d-d266-48ad-b3e2-f1a9a810a013-ku6jlt.24.58.mp3"
        ref={audioElem}
        onTimeUpdate={onPlaying}
        className="sr-only"
      />
      <div
        className="aspect-square w-20 bg-white rounded-xl flex items-center justify-center"
      >
        {/* <Play className="w-6 h-6 fill-zinc-700" /> */}
      </div>
      <div className="flex-1 px-8 py-2">
        <Progress value={songConfig.progress} className='h-1 w-full bg-white' />
        <div className="flex justify-between mt-2">
          <span className="text-xs">{(songConfig.currentTime / 100).toFixed(2)}</span>
          <span className="text-xs">{(songConfig.length / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-evenly">
          <Button variant="ghost" disabled>
            <SkipBack className="w-6 h-6 fill-white" />
          </Button>

          <Button variant="ghost" onClick={() => setIsPlaying(true)}>
            {isPlaying ? (
              <Square className="w-6 h-6 fill-inherit" />
            ) : (
              <Play className="w-6 h-6 fill-inherit" />
            )}
          </Button>

          <Button variant="ghost" disabled>
            <SkipForward className="w-6 h-6 fill-white" />
          </Button>
        </div>
      </div>
    </div>
  )
}