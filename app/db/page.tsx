import prisma from '@/lib/prisma';

export default async function Db() {
  const data = await prisma.audios.findMany({
    include: {
      author: true
    }
  })

  return <h1 className='text-lg'>ola mundo</h1>
  // <pre>{JSON.stringify(data, null, 2)}</pre>
}