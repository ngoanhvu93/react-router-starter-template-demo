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
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      setApiData(data);
      console.log("API Response:", data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const testWeatherApi = async () => {
    setLoading(true);
    try {
      // Sử dụng API miễn phí không cần key
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&timezone=Asia/Bangkok"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setApiData(data);
      console.log("Weather API Response:", data);
    } catch (error) {
      console.error("Weather API Error:", error);
      setApiData({
        error: "Không thể lấy dữ liệu thời tiết. Vui lòng thử lại sau.",
      });
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
        <Button variant="outlined" onClick={testWeatherApi} disabled={loading}>
          {loading ? "Đang lấy thời tiết..." : "Test API Thời Tiết"}
        </Button>

        {apiData && (
          <div className="mt-4 p-4 rounded">
            <h3 className="font-bold mb-2">API Response:</h3>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  );
}
