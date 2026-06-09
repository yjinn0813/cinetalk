/* eslint-env node (supabase ping) */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function pingDatabase() {
  // review 테이블에서 id 1개만 조회
  const { data, error } = await supabase.from('reviews').select('id').limit(1);

  if (error) {
    console.error('Supabase ping failed:', error.message);
    process.exit(1);
  } else {
    console.log('Supabase ping successful! Connection is alive.');
  }
}

pingDatabase();