"use client"

import Dropzone from "react-dropzone";

const UploadDropzone = () => {
  return <Dropzone multiple={false}>
    {({ getRootProps, getInputProps, acceptedFiles }) => (
      <div {...getRootProps()} className="border h-64 m-4 border-dashed border-gray-300 rounded-lg">
        <div className="flex item-center justify-center w-full h-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5"
          </label>
        </div>
      </div>
    )}
  </Dropzone>
}

export default function UploadFile() {
  return <UploadDropzone />
}