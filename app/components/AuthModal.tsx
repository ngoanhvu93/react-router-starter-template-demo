import React, { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { Google } from "@mui/icons-material";
import { auth } from "~/firebase/firebase";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  title?: string;
  description?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  title = "Đăng nhập",
  description = "Vui lòng đăng nhập để sử dụng tính năng này",
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && onSuccess) {
        onSuccess();
      }
    });

    return () => unsubscribe();
  }, [onSuccess]);

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setLoading(false);
      toast.success("Đăng nhập thành công", {
        position: "top-center",
        autoClose: 1000,
      });
    } catch (err: any) {
      setLoading(false);
      const errorCode = err?.code || "unknown";
      let errorMessage = "Đã có lỗi xảy ra khi đăng nhập với Google.";

      switch (errorCode) {
        case "auth/popup-closed-by-user":
          errorMessage = "Cửa sổ đăng nhập đã bị đóng.";
          break;
        case "auth/cancelled-popup-request":
          errorMessage = "Yêu cầu đăng nhập đã bị hủy.";
          break;
        case "auth/account-exists-with-different-credential":
          errorMessage =
            "Tài khoản này đã tồn tại với phương thức đăng nhập khác.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Lỗi kết nối mạng. Vui lòng kiểm tra kết nối của bạn.";
          break;
      }

      setError(errorMessage);
    }
  };

  return (
    <Dialog
      open={isOpen}
      closeAfterTransition
      aria-labelledby="score-sheet-title"
      aria-describedby="score-sheet-description"
    >
      <DialogTitle id="auth-modal-title">
        <Box>
          <Typography variant="h5" component="h2" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers={true}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box>
          {error && <Alert severity="error">{error}</Alert>}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleGoogleSignIn}
              disabled={loading}
              startIcon={
                loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <Google sx={{ fontSize: 20 }} />
                )
              }
            >
              {loading ? "Đang xử lý..." : "Đăng nhập với Google"}
            </Button>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Bằng cách đăng nhập, bạn đồng ý với{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "underline",
                cursor: "pointer",
                "&:hover": {
                  color: "primary.dark",
                },
              }}
            >
              điều khoản sử dụng
            </Typography>{" "}
            và{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "underline",
                cursor: "pointer",
                "&:hover": {
                  color: "primary.dark",
                },
              }}
            >
              chính sách bảo mật
            </Typography>{" "}
            của chúng tôi.
          </Typography>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
