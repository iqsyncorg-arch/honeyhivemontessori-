import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://pkbbhkwfctqtgsatmzqy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrYmJoa3dmY3RxdGdzYXRtenF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MDEyNDUsImV4cCI6MjA4NDA3NzI0NX0.oi7gSgs4EMIft7S26rgPdd0RjaCTJzAuvQS_NGdYU7c"
);
