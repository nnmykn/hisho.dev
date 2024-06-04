"use client";
import {
  FormControl,
  FormErrorMessage,
  FormField,
  FormItem,
  FormLabel,
  FormProvider,
} from "@/component/from/form/form";
import { Input } from "@/component/from/input/input";
import { Textarea } from "@/component/from/textarea/textarea";
import {
  CreateContactError,
  createContact,
} from "@/feature/contact/create-contact/create-contact";
import { useForm } from "@/lib/form/use-form/use-form";
import { useState, useTransition } from "react";
import { z } from "zod";

const schema = z.object({
  email: z.string(),
  message: z.string(),
  name: z.string(),
});

type Props = Partial<{
  onError: () => void;
  onSuccess: () => void;
}>;
export const CreateContactForm = ({ onError, onSuccess }: Props = {}) => {
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    schema,
  });
  const [errors, setErrors] = useState<CreateContactError | undefined>(
    undefined
  );

  const handleFormSubmit = async (input: z.output<typeof schema>) => {
    try {
      const result = await createContact(input);
      if (result.success) {
        onSuccess?.();
        form.reset();
        setErrors(undefined);
      } else {
        console.log(result.error);
        setErrors(result.error);
        onError?.();
      }
    } catch (error) {
      console.log(error);
      onError?.();
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className={"grid gap-y-2"}
        onSubmit={(error) =>
          startTransition(() =>
            form.handleSubmit((index) => handleFormSubmit(index))(error)
          )
        }
      >
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormErrorMessage>
                {errors?.name &&
                  errors.name.map((m) => <span key={`email_${m}`}>{m}</span>)}
              </FormErrorMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input {...field} type={"email"} />
              </FormControl>
              <FormErrorMessage>
                {errors?.email &&
                  errors.email.map((m) => <span key={`email_${m}`}>{m}</span>)}
              </FormErrorMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"message"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>メッセージ</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormErrorMessage>
                {errors?.message &&
                  errors.message.map((m) => (
                    <span key={`message_${m}`}>{m}</span>
                  ))}
              </FormErrorMessage>
            </FormItem>
          )}
        />
        <button disabled={isPending}>{isPending ? "送信中" : "送信"}</button>
      </form>
    </FormProvider>
  );
};
