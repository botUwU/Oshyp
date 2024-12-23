import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lsyasikadqhmiudfirrr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzeWFzaWthZHFobWl1ZGZpcnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MjI1MTksImV4cCI6MjA1MDM5ODUxOX0.urksdISLd-Q7xEd45bEDAD27efrOaqwFmcPElqyna7g";
export const supabase = createClient(supabaseUrl, supabaseKey);
