import { Link } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Paper,
  Stack,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Fab,
} from "@mui/material";
import {
  Security,
  Speed,
  People,
  Download,
  ContactSupport,
  ShoppingCart,
  School,
  HealthAndSafety,
  AttachMoney,
  Flight,
  SportsSoccer,
  Work,
  Games,
  Menu,
  Close,
  ArrowUpward,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      title: "Tốc độ tải nhanh",
      description:
        "Hạ tầng server tại Việt Nam giúp tải ứng dụng với tốc độ cao nhất có thể.",
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
    { value: "50K+", label: "Ứng dụng", color: "success" },
    { value: "100M+", label: "Lượt tải", color: "secondary" },
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

  const navigationItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Giới thiệu", to: "/about" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header */}
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Container maxWidth="xl">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }}>
                <Box
                  sx={{
                    width: { xs: 36, md: 40 },
                    height: { xs: 36, md: 40 },
                    borderRadius: { xs: 1.5, md: 2 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant={isMobile ? "body1" : "h6"}
                    color="white"
                    fontWeight="bold"
                  >
                    VN
                  </Typography>
                </Box>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  fontWeight="bold"
                  color="text.primary"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  App Store Việt Nam
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="text.primary"
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  App Store VN
                </Typography>
              </Box>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.to}
                    color={item.to === "/about" ? "primary" : "inherit"}
                    sx={{
                      textTransform: "none",
                      fontWeight: item.to === "/about" ? "medium" : "normal",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "rgba(25, 118, 210, 0.08)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setMobileMenuOpen(true)}
                color="primary"
              >
                <Menu />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Menu
          </Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  py: 2,
                  "&:hover": {
                    bgcolor: "rgba(25, 118, 210, 0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: item.to === "/about" ? "medium" : "normal",
                    color:
                      item.to === "/about" ? "primary.main" : "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box
        py={{ xs: 6, md: 10 }}
        px={{ xs: 2, md: 3 }}
        sx={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box textAlign="center">
            <Typography
              variant="h1"
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "4rem",
                  lg: "4.5rem",
                },
                lineHeight: { xs: 1.2, md: 1.1 },
                "& .highlight": {
                  color: "primary.main",
                  display: "block",
                },
              }}
            >
              Khám phá thế giới ứng dụng
              <span className="highlight">Việt Nam</span>
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: "auto",
                mb: { xs: 4, md: 6 },
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
              }}
            >
              Nền tảng phân phối ứng dụng hàng đầu Việt Nam, kết nối người dùng
              với những ứng dụng chất lượng cao, phù hợp với văn hóa và nhu cầu
              của người Việt.
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
                startIcon={<Download />}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  borderRadius: 3,
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Tải ứng dụng ngay
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  borderRadius: 3,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={{ xs: 8, md: 10 }} sx={{ bgcolor: "grey.50" }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
              }}
            >
              Tại sao chọn App Store Việt Nam?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              Chúng tôi cung cấp trải nghiệm tải ứng dụng tốt nhất với những
              tính năng độc đáo
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {features.map((feature, index) => (
              <Grid component="div" xs={12} md={4} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    borderRadius: 3,
                    "&:hover": {
                      elevation: 8,
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: "center",
                      p: { xs: 3, md: 4 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 56, md: 64 },
                        height: { xs: 56, md: 64 },
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        mx: "auto",
                        bgcolor: `${feature.color}.50`,
                        color: `${feature.color}.main`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                          bgcolor: `${feature.color}.100`,
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      fontWeight="semibold"
                      gutterBottom
                      sx={{
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 4 }} textAlign="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    boxShadow: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    component="div"
                    fontWeight="bold"
                    color={`${stat.color}.main`}
                    gutterBottom
                    sx={{
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box py={{ xs: 8, md: 10 }} sx={{ bgcolor: "grey.50" }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
              }}
            >
              Danh mục ứng dụng phổ biến
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              Khám phá những ứng dụng được yêu thích nhất tại Việt Nam
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {categories.map((category, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    borderRadius: 3,
                    "&:hover": {
                      elevation: 8,
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2, md: 3 },
                      "&:last-child": { pb: { xs: 2, md: 3 } },
                    }}
                  >
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
              </Grid>
            ))}
          </Grid>
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
                startIcon={<Download />}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  borderRadius: 3,
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Tải App Store Việt Nam
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ContactSupport />}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  borderRadius: 3,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                  },
                }}
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
            <Grid item xs={12} md={3}>
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
            </Grid>

            {[
              {
                title: "Sản phẩm",
                links: ["Ứng dụng", "Trò chơi", "Công cụ"],
              },
              {
                title: "Hỗ trợ",
                links: ["Trung tâm trợ giúp", "Liên hệ", "Bảo mật"],
              },
              {
                title: "Công ty",
                links: ["Về chúng tôi", "Tuyển dụng", "Tin tức"],
              },
            ].map((section, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
              </Grid>
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
    </Box>
  );
}
