import { createClient } from '@supabase/supabase-js';

// Use environment variables
const SUPABASE_URL = "https://vzfcckfivdrtdgyebdwi.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_GWHg3RO54jZ4MduNwhulfA_AXO5a1aU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
