const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const IMAGES_BUCKET = process.env.CLOUDFLARE_IMAGES_BUCKET;

if (!ACCOUNT_ID || !API_TOKEN || !IMAGES_BUCKET) {
  console.warn('Cloudflare environment variables are not fully configured.');
}

const BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`;

export async function uploadImage(file: File) {
  if (!ACCOUNT_ID || !API_TOKEN) throw new Error('Cloudflare is not configured');

  const formData = new FormData();
  formData.append('file', file);
  formData.append('requireSignedURLs', 'false');

  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: formData
  });

  if (!res.ok) {
    throw new Error('Failed to upload image to Cloudflare');
  }

  return res.json();
}

export async function deleteImage(id: string) {
  if (!ACCOUNT_ID || !API_TOKEN) throw new Error('Cloudflare is not configured');

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to delete Cloudflare image');
  }

  return res.json();
}

export function getImageUrl(id: string) {
  if (!ACCOUNT_ID || !IMAGES_BUCKET) return '';
  // Public delivery URL pattern; adjust to your Cloudflare Images config
  return `https://imagedelivery.net/${ACCOUNT_ID}/${id}/public`;
}
