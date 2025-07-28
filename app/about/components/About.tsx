import { useNavigate } from "react-router";
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  Fab,
} from "@mui/material";
import {
  Security,
  Speed,
  People,
  ContactSupport,
  ShoppingCart,
  School,
  HealthAndSafety,
  AttachMoney,
  Flight,
  SportsSoccer,
  Work,
  Games,
  ArrowUpward,
  ArrowForward,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { TopAppBar } from "~/components/TopAppBar";

export default function About() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      icon: <Security sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Bảo mật tuyệt đối",
      description:
        "Tất cả ứng dụng đều được kiểm duyệt nghiêm ngặt, đảm bảo an toàn cho người dùng Việt Nam.",
      color: "primary",
    },
    {
      icon: <Speed sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Tốc độ nhanh",
      description:
        "Hạ tầng server hàng đầu thế giới, áp dụng công nghệ mới nhất giúp tốc độ tải nhanh nhất có thể.",
      color: "success",
    },
    {
      icon: <People sx={{ fontSize: { xs: 28, md: 32 } }} />,
      title: "Cộng đồng lớn",
      description:
        "Hàng triệu người dùng Việt Nam tin tưởng và sử dụng nền tảng của chúng tôi.",
      color: "secondary",
    },
  ];

  const stats = [
    { value: "10M+", label: "Người dùng", color: "primary" },
    { value: "100M+", label: "Lượt sử dụng", color: "secondary" },
    { value: "500+", label: "Ứng dụng", color: "info" },
    { value: "4.8★", label: "Đánh giá", color: "warning" },
  ];

  const categories = [
    { name: "Giải trí", icon: <Games />, color: "error" },
    { name: "Công việc", icon: <Work />, color: "primary" },
    { name: "Giáo dục", icon: <School />, color: "success" },
    { name: "Sức khỏe", icon: <HealthAndSafety />, color: "secondary" },
    { name: "Tài chính", icon: <AttachMoney />, color: "warning" },
    { name: "Du lịch", icon: <Flight />, color: "info" },
    { name: "Mua sắm", icon: <ShoppingCart />, color: "error" },
    { name: "Thể thao", icon: <SportsSoccer />, color: "warning" },
  ];

  return (
    <div className="w-full">
      <TopAppBar onBack={() => navigate("/")} title="Giới thiệu" />
      {/* Hero Section */}
      <div className="py-6 md:py-10 px-2 md:px-3 flex flex-col items-center justify-center w-full">
        <div className="text-center w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">
            Khám phá thế giới ứng dụng Việt Nam
          </h1>
          <p>
            Nền tảng phân phối ứng dụng hàng đầu Việt Nam, kết nối người dùng
            với những ứng dụng chất lượng cao, phù hợp với văn hóa và nhu cầu
            của người Việt.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/")}
            startIcon={<ArrowForward />}
          >
            Khám phá ngay
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Tại sao chọn App Việt?
            </h2>
            <p className="text-gray-500">
              Chúng tôi cung cấp trải nghiệm tải ứng dụng tốt nhất với những
              tính năng độc đáo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {features.map((feature, index) => (
              <div className="col-span-1" key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <div className="text-center mb-4 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {stats.map((stat, index) => (
          <Card className="col-span-1" key={index}>
            <div className="text-center p-4">
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div>{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Categories Section */}
      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Danh mục ứng dụng phổ biến
            </h2>
            <p>Khám phá những ứng dụng được yêu thích nhất tại Việt Nam</p>
          </Box>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div className="col-span-1" key={index}>
                <Card className="text-center transition-all duration-300 cursor-pointer rounded-lg hover:shadow-lg hover:translate-y-[-8px]">
                  <CardContent className="p-4">
                    <Box
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                        mx: "auto",
                        bgcolor: `${category.color}.main`,
                        color: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="semibold"
                      sx={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                      }}
                    >
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h2"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
              }}
            >
              Sẵn sàng khám phá?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: { xs: 4, md: 6 },
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              Tham gia cùng hàng triệu người dùng Việt Nam và khám phá những ứng
              dụng tuyệt vời
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, md: 3 }}
              justifyContent="center"
              sx={{ maxWidth: 500, mx: "auto" }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<ArrowForward />}
                className="px-4 py-2 text-lg"
              >
                Khám phá ngay
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ContactSupport />}
                className="px-4 py-2 text-lg"
              >
                Liên hệ hỗ trợ
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ bgcolor: "grey.900", color: "white", py: { xs: 4, md: 6 } }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 4 }}>
            <div className="col-span-1">
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Box
                  sx={{
                    width: { xs: 28, md: 32 },
                    height: { xs: 28, md: 32 },
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                  >
                    VN
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  App Store Việt Nam
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="grey.400"
                sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
              >
                Nền tảng phân phối ứng dụng hàng đầu Việt Nam
              </Typography>
            </div>

            {[
              {
                title: "Sản phẩm",
                links: ["Ứng dụng", "Trò chơi", "Công cụ"],
                to: ["/", "/games", "/tools"],
              },
              {
                title: "Hỗ trợ",
                links: ["Trung tâm trợ giúp", "Liên hệ", "Bảo mật"],
                to: ["/support", "/contact", "/security"],
              },
              {
                title: "Công ty",
                links: ["Về chúng tôi", "Tuyển dụng", "Tin tức"],
                to: ["/about", "/jobs", "/news"],
              },
            ].map((section, index) => (
              <div className="col-span-1" key={index}>
                <Typography
                  variant="h6"
                  fontWeight="semibold"
                  gutterBottom
                  sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={1}>
                  {section.links.map((link, linkIndex) => (
                    <Button
                      onClick={() => navigate(section.to[linkIndex])}
                      key={linkIndex}
                      color="inherit"
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        color: "grey.400",
                        fontSize: { xs: "0.75rem", md: "0.875rem" },
                        "&:hover": { color: "white" },
                        p: 0,
                        minHeight: "auto",
                      }}
                    >
                      {link}
                    </Button>
                  ))}
                </Stack>
              </div>
            ))}
          </Grid>

          <Box
            sx={{
              borderTop: 1,
              borderColor: "grey.800",
              mt: { xs: 3, md: 4 },
              pt: { xs: 3, md: 4 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              color="grey.400"
              sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
            >
              &copy; 2024 App Store Việt Nam. Tất cả quyền được bảo lưu.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            zIndex: 1000,
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
              transform: "scale(1.1)",
            },
          }}
        >
          <ArrowUpward />
        </Fab>
      )}
    </div>
  );
}
