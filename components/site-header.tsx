import { createClient } from '@/utils/supabase/server'
import SiteHeaderWithDropdowns from './site-header-with-dropdowns'

export default async function SiteHeader() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <SiteHeaderWithDropdowns user={user} />
}
