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

      return {};
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;