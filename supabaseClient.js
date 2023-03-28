import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://ndmepqcoazrhdeaiimjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbWVwcWNvYXpyaGRlYWlpbWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NTU0OTksImV4cCI6MTk5MzEzMTQ5OX0.uULbqkCaqecExdYEY_b_jCgMxvyyJrGQQ5mGFzcFVOk'
export const supabase = createClient(supabaseUrl, supabaseKey)

