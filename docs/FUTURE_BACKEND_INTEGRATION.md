# THE AI JUNGLE — FUTURE BACKEND INTEGRATION BLUEPRINT

This blueprint outlines the migration strategy for transitioning The AI Jungle from its current high-performance client-side demonstration state into a full-stack, enterprise-grade production platform.

---

## 1. Database Schema & Models (PostgreSQL / Supabase)

### A. Users & Subscriptions
```sql
CREATE TYPE membership_tier AS ENUM ('free', 'executive', 'sovereign');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  organization VARCHAR(255),
  membership_tier membership_tier DEFAULT 'free',
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### B. Reading & Listening Progress
```sql
CREATE TABLE reading_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  comic_slug VARCHAR(120) NOT NULL,
  page_index INT DEFAULT 0,
  total_pages INT NOT NULL,
  percentage INT DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, comic_slug)
);

CREATE TABLE listening_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  episode_slug VARCHAR(120) NOT NULL,
  current_time_seconds INT DEFAULT 0,
  duration_seconds INT NOT NULL,
  percentage INT DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, episode_slug)
);
```

### C. Bookmarks & Favorites
```sql
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content_type VARCHAR(20) NOT NULL CHECK (content_type IN ('comic', 'podcast', 'safari', 'character')),
  content_slug VARCHAR(120) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, content_type, content_slug)
);
```

---

## 2. Authentication Integration (NextAuth.js v5 / Auth0 / Clerk)

- Replace mock user state in `useUserStore.ts` with NextAuth session hooks:
```typescript
import { useSession } from "next-auth/react";

export function useAuthUser() {
  const { data: session, status } = useSession();
  return {
    user: session?.user,
    isAuthenticated: status === "authenticated",
    tier: session?.user?.membershipTier || "free",
  };
}
```
- Provide enterprise SSO via SAML/Okta for Fortune 500 corporate clients subscribing under the **Enterprise Council Tier**.

---

## 3. Stripe Billing & Webhook Endpoints

- Route: `/api/billing/checkout`
  - Creates a Stripe Checkout Session for Executive Member ($29/mo or $290/yr) or Sovereign Retainer ($499/mo).
- Route: `/api/billing/webhook`
  - Handles `checkout.session.completed`, `customer.subscription.updated`, and `invoice.payment_failed`.
  - Automatically updates `users.membership_tier` in the database.

---

## 4. Media Streaming & CDN (Cloudflare R2 / AWS S3 + CloudFront)

- **Comic Pages:** High-resolution WebP/AVIF panels stored in private R2 buckets with signed URLs for Executive and Sovereign subscribers.
- **Podcast Audio:** HLS / AAC audio streaming with signed CloudFront cookies, preventing direct audio ripping while maintaining instant mobile buffering.

---

## 5. AI Vector Search (pgvector / Pinecone)

- Replace client-side search in `getAllSearchableContent()` with hybrid semantic vector search:
  - Generate OpenAI `text-embedding-3-small` vectors for all 28 podcast transcripts, 6 comic scripts, 13 safari chapters, and executive debriefs.
  - Query endpoint: `/api/search?q=vector+hygiene` executes cosine similarity searches against the knowledge base.

