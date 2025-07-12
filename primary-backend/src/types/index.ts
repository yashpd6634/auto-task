import { z } from "zod";

export const SignupSchema = z.object({
  username: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 5 characters"),
});

export const SigninSchema = z.object({
  username: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const AutoTaskSchema = z.object({
  name: z.string().min(1, "Name is required"),
  trigger: z.object({
    availableTriggerId: z.string().min(1, "Trigger type is required"),
    triggerMetadata: z.any().optional(),
  }),
  description: z.string().optional(),
  actions: z.array(
    z.object({
      availableActionId: z.string().min(1, "Action type is required"),
      actionMetadata: z.any().optional(),
    })
  ),
});
