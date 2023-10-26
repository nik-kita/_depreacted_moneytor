declare global {
  interface Window {
    google?: typeof import("npm:google-one-tap");
  }
}
