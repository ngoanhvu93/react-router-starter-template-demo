import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TopAppBar } from "~/components/TopAppBar";

export function Welcome() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <TopAppBar title="Welcome" />
      <Button variant="contained" onClick={() => navigate("/about")}>
        Test React Router V7 + Vite + SSR + MUI Material Design + Cloudflare
        Deploy
      </Button>
    </>
  );
}
