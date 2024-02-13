import prisma from "@/lib/prisma";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
  mp3Uploader: f({ "audio": { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.audios.create({
        data: {
          title: "sim como descobriu",
          authorId: "0dcb6b27-aff0-4b23-a187-161df438ebdc",
          url: file.url,
        }
      })
      return {};
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;