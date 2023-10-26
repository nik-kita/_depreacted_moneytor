export function loadGoogleSignIn(
  options: {
    clientId: string;
    handleCb: (res: unknown) => void | Promise<void>;
    cssElementId: string;
  },
) {
  try {
    window.google.accounts.id.initialize({
      client_id: options.clientId,
      callback: options.handleCb,
    });
    window.google.accounts.id.renderButton(
      document.getElementById(options.cssElementId),
      {
        theme: "filled_black",
        size: "large",
        text: "continue_with",
        shape: "pill",
        context: "use",
        ux_mode: "popup",
      },
    );
    window.google.accounts.id.prompt();
  } catch (error) {
    console.error(error);
    console.warn("something happen during google auth integration...");
  }
}
