import { createClient } from '@supabase/supabase-js'

// Replace these with your own values
const supabaseUrl = 'https://sqfgekxuohgovozhnwdb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZmdla3h1b2hnb3Zvemhud2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzA4MzgsImV4cCI6MjA3OTgwNjgzOH0.30QDs02si2O7zShBYN4B1EcZONmixsGTS7LXzHTtZ7I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

