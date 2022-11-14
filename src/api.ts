import { DETAIL_URL, LIST_URL, MAX_IMAGES } from "./constants";

function getSubdomain(subdomain?: string): string {
  if (subdomain) {
    return subdomain + '/';
  }
  
  return '';
}

async function fetchResponse(url: string): Promise<string[]> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.message)
    .catch(console.log);
}

export async function fetchBreeds(): Promise<string[]> {
  const url = `${LIST_URL}list`;

  return await fetchResponse(url);
}

export async function fetchSubBreeds(breed: string): Promise<string[]> {
  const url = `${DETAIL_URL}${getSubdomain(breed)}list`;

  return await fetchResponse(url);
}

export async function fetchImages(breed: string, subBreed?: string): Promise<string[]> {
  const url = `${DETAIL_URL}${getSubdomain(breed)}${getSubdomain(subBreed)}images/random/${MAX_IMAGES}`;

  return await fetchResponse(url);
}
