export const cookieName = "pokemon-token-cookie";

export const deleteCookieByName = (cookieName: string): void => {
  document.cookie =
    cookieName + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export const getCookie = (cookieName: string): string | null => {
  const match = document.cookie.match(
    RegExp("(?:^|;\\s*)" + cookieName + "=([^;]*)")
  );

  return match ? match[1] : null;
};
