const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export function getArticleHref(slug) {
  return {
    pathname: "/article",
    query: { slug },
  };
}

export async function fetchJson(path) {
  const response = await fetch(`${API_BASE}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchContent(resource) {
  return fetchJson(`/api/content/${resource}`);
}

export async function fetchPrograms() {
  return fetchJson("/api/content/programs");
}

export async function fetchArticles() {
  return fetchJson("/api/articles");
}

export async function fetchArticle(slug) {
  return fetchJson(`/api/articles/${slug}`);
}

export async function createOrder(payload) {
  const response = await fetch(`${API_BASE}/api/orders`, {
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
