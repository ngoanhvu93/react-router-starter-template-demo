import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { TopAppBar } from "~/components/TopAppBar";
import { useState } from "react";

export function Welcome() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopAppBar title="Welcome" />
      <div className="flex flex-col gap-4">
        <Button variant="contained" onClick={() => navigate("/about")}>
          Test React Router V7 + Vite + SSR + MUI Material Design + Cloudflare
          Deploy
        </Button>
        <Button variant="outlined" onClick={testApi} disabled={loading}>
          {loading ? "Testing API..." : "Test API Call"}
        </Button>

        {apiData && (
          <div>
            <h3>100 Posts:</h3>
            {Array.isArray(apiData) ? (
              <div className="space-y-2">
                {apiData.map((post: any, index: number) => (
                  <div key={post.id} className="border p-2 rounded">
                    <strong>Post {index + 1}:</strong> {post.title}
                  </div>
                ))}
              </div>
            ) : (
              <div>{JSON.stringify(apiData, null, 2)}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
