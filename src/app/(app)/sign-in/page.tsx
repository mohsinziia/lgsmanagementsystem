"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  const formSchema = z.object({
    email: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {};

  const loginUser = async (provider: string) => {
    const response = await signIn(provider, {
      redirect: true,
      callbackUrl: "/dashboard",
    });
    console.log(`Response is ${response}`);
  };

  return (
    <div className="grid h-screen place-content-center">
      <Card className="w-[350px] relative">
        <CardHeader>
          <CardTitle>Sign In Form</CardTitle>
          <CardDescription>
            Signin to get access to your student portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                          className="w-4/5"
                          type="email"
                          placeholder="Email"
                          {...field}
                        />
                        <Button className="w-1/5" type="submit">
                          Sign in
                        </Button>
                      </div>
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <Separator className="w-4/5 mx-auto" />
        <p className="text-sm text-muted-foreground text-center p-2 bg-card absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          OR
        </p>
        <CardFooter className="flex justify-between pt-6">
          <Button
            onClick={() => loginUser("google")}
            className="w-full white border border-gray-400 py-2 px-4"
          >
            Sign in with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
