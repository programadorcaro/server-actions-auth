"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import UploadFile from "@/components/upload-file";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Upload() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({ data, name })
  }

  const name = form.watch('name');

  return <UploadFile />
  // return (
  //   <Form {...form}>
  //     <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
  //       <FormField
  //         control={form.control}
  //         name="name"
  //         render={({ field }) => (
  //           <FormItem className="px-4">
  //             <FormLabel>Title</FormLabel>
  //             <FormControl>
  //               <Input placeholder="shadcn" {...field} />
  //             </FormControl>
  //             <FormDescription>
  //               This is your public display name.
  //             </FormDescription>
  //             <FormMessage />
  //           </FormItem>
  //         )}
  //       />

  //       <UploadFile />
  //       <div className="px-4">
  //         <Button type="submit">Submit</Button>
  //       </div>
  //     </form>
  //   </Form>
  // )
}