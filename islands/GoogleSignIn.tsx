import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import CssHead from "../components/CssHead.tsx";
import { useToggleValue } from "../src/toggle-value.hook.ts";
import { handleCredentialResponse } from "./GoogleSignIn/handle-credential-response.fn.ts";
import { loadGoogleSignIn } from "./GoogleSignIn/load-google-signin.fn.ts";

export default function GoogleSignIn(props: Props) {
  const gDiv = useRef(null);
  const isGoogleReady = useToggleValue(false);

  useEffect(() => {
    if (!gDiv.current || !window.google) {
      isGoogleReady.dispatch(false);

      return;
    }

    isGoogleReady.dispatch(true, "stop");

    loadGoogleSignIn({
      clientId: props.OAUTH_2_CLIENT_ID_WEB_1,
      cssElementId: GDIV_ID,
      handleCb: handleCredentialResponse,
    });
  }, [isGoogleReady.toggle]);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <title>
          Sign IN / UP / OUT
        </title>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div id="rainbow" class="blockSizeFullV parentFlexRowCenter">
        <div
          id={GDIV_ID}
          ref={gDiv}
          class={"parentFlexRowCenter blockSizeFullV"}
        >
        </div>
      </div>
    </>
  );
}

type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

const GDIV_ID = "gDiv" as const;
