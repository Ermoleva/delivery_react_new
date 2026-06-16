function getApiBase() {
  if (typeof window === "undefined") {
    return (
      process.env.API_INTERNAL_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://localhost:4000"
    );
  }

  return process.env.NEXT_PUBLIC_API_URL || "";
}

export function getAssetUrl(value) {
  if (!value || typeof value !== "string") {
    return value;
  }

  if (/^https?:\/\//i.test(value) || !value.startsWith("/uploads/")) {
    return value;
  }

  return `${getApiBase()}${value}`;
}

function normalizeAssetUrls(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeAssetUrls);
  }

  if (!value || typeof value !== "object") {
    return getAssetUrl(value);
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [key, normalizeAssetUrls(entry)])
  );
}

export function getArticleHref(slug) {
  return {
    pathname: "/article",
    query: { slug },
  };
}

export async function fetchJson(path) {
  const response = await fetch(`${getApiBase()}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchContent(resource) {
  return normalizeAssetUrls(await fetchJson(`/api/content/${resource}`));
}

export async function fetchPrograms() {
  return fetchJson("/api/content/programs");
}

export async function fetchArticles() {
  return normalizeAssetUrls(await fetchJson("/api/articles"));
}

export async function fetchArticle(slug) {
  return normalizeAssetUrls(await fetchJson(`/api/articles/${slug}`));
}

export async function createOrder(payload) {
  const response = await fetch(`${getApiBase()}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `Request failed: ${response.status}`);
  }

  return response.json();
}

export function formatArticleDate(value) {
  if (!value) {
    return "";
  }

  if (/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
    return value;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("ru-RU").format(date);
}
