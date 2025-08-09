import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://roczugmoovjxwokwhvez.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvY3p1Z21vb3ZqeHdva3dodmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NTA4MzEsImV4cCI6MjA3MDMyNjgzMX0.QYoLdo2Ybo092YzvV8sqe7_GRxdT-1m_opwv6641RwY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
