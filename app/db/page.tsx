import AudioPlayer from '@/components/audio-player';
import prisma from '@/lib/prisma';

export default async function Db() {
  const data = await prisma.audios.findMany({
    include: {
      author: true
    }
  })

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <AudioPlayer />
    </>
  )
}