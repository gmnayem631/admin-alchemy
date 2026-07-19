"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import BackButton from "@/components/BackButton";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { use } from "react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  body: z.string().min(1, {
    message: "Body is required",
  }),
  author: z.string().min(1, {
    message: "Author is required",
  }),
  date: z.string().min(1, {
    message: "Date is required",
  }),
});

interface PostEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const { id } = use(params);
  const post = posts.find((post) => post.id === id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast("Post has been updated successfully", {
      description: `Updated by ${post?.author} on ${post?.date}`,
      position: "bottom-right",
    });
  };

  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
      <h3 className="text-2xl mb-4">Edit Post</h3>

      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FieldGroup>
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="uppercase text-xs font-bold text-zinc-500 dark:text-white"
                >
                  Title
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                  placeholder="Enter Title"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="body"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="uppercase text-xs font-bold text-zinc-500 dark:text-white"
                >
                  Body
                </FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                  placeholder="Enter Body"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="author"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="uppercase text-xs font-bold text-zinc-500 dark:text-white"
                >
                  Author
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                  placeholder="Enter Author"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="date"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="uppercase text-xs font-bold text-zinc-500 dark:text-white"
                >
                  Date
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                  placeholder="Enter Date"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button className="w-full dark:bg-slate-800 dark:text-white">
          Update Post
        </Button>
      </form>
    </>
  );
};

export default PostEditPage;
