import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Button variant="contained" onClick={() => navigate("/about")}>
            Test React Router V7 + Vite + SSR + MUI Material Design + Cloudflare
            Deploy
          </Button>
        </div>
      )}
    </div>
  );
}
