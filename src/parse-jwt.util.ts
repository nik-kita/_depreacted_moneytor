export function parseJwt(token?: unknown) {
  try {
    return JSON.parse(
      atob(
        (typeof token === "string"
          ? token
          : `{ "origin token was": "${token}" }`)
          .split(".")[1],
      ),
    );
  } catch (e) {
    return { error: e.toString() };
  }
}
