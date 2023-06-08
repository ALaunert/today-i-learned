import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ocbognrsnvmpruifbdct.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jYm9nbnJzbnZtcHJ1aWZiZGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNTA1NTAsImV4cCI6MjAwMTYyNjU1MH0.EtgcsAQzOZaKi6ydlbfn07fVZ8Gtfj1SpZTyGrr_IX8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
