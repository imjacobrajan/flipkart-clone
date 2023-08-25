import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dngirkaipxsvytqwzaii.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZ2lya2FpcHhzdnl0cXd6YWlpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mjg1NDQ2NywiZXhwIjoyMDA4NDMwNDY3fQ.cKL--anYhAKMAlGz10eRB6jmi31K7vf9Sm9pNJsVq-Q"
);

export default supabase;
