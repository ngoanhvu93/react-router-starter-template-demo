import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <Button variant="contained" onClick={() => navigate("/about")}>
        Test React Router V7 + Vite + SSR + MUI Material Design + Cloudflare
        Deploy
      </Button>
    </div>
  );
}
