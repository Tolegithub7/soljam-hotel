const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

async function strapiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const url = `${STRAPI_URL}${path}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {})
  };

  const res = await fetch(url, { ...init, headers, next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status}`);
  }
  return res.json();
}

export function getRooms() {
  return strapiFetch<any>('/api/rooms?populate=*');
}

export function getRoomBySlug(slug: string) {
  return strapiFetch<any>(`/api/rooms?filters[slug][$eq]=${slug}&populate=*`);
}

export function getBlogPosts() {
  return strapiFetch<any>('/api/blog-posts?populate=*');
}

export function getBlog(slug: string) {
  return strapiFetch<any>(`/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
}

export function getGallery() {
  return strapiFetch<any>('/api/gallery?populate=*');
}
