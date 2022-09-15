export function getCredentials(
  req: Request,
): Record<string, string | null> {
  const url = new URL(req.url);
  return {
    "email": url.searchParams.get("email"),
    "password": url.searchParams.get("password"),
  };
}
