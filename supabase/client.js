/****** Supabase Client ******/

const SUPABASE_URL = "https://azloqhecczprdnboydbj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_fpnvzVNpecj5NxWR37UUUg_e__LFsUh";

window.supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);