import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect, useCallback } from "react";
import { auth } from "~/firebase/firebase";

interface UserProfileProps {
  className?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ className = "" }) => {
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // If user just logged in and the auth modal is open, close it and show the profile
      if (currentUser && showAuthModal) {
        setShowAuthModal(false);
      }
    });

    return () => unsubscribe();
  }, [showAuthModal]);

  const handleCloseSidebar = useCallback(() => {
    setShowProfileSidebar(false);
  }, []);

  const handleUserClick = () => {
    setShowProfileSidebar(true);
  };

  return (
    <>
      <button
        onClick={handleUserClick}
        className={`flex cursor-pointer items-center justify-center relative ${className}`}
        aria-label={user ? "Tài khoản người dùng" : "Đăng nhập"}
        title={user ? "Tài khoản người dùng" : "Đăng nhập"}
      >
        {user ? (
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center overflow-hidden">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-500">
                {user.displayName
                  ? user.displayName.charAt(0).toUpperCase()
                  : "U"}
              </div>
            )}
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 14a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V7a4 4 0 10-8 0v7m8 0a4 4 0 01-8 0"
              />
            </svg>
          </div>
        )}

        {/* Add a pulsing indicator for non-logged in users */}
        {!user && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
        )}
      </button>

      {/* Login Modal - only shown for non-logged in users */}
      {/* <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title="Đăng nhập"
        description="Đăng nhập để truy cập các tính năng độc quyền và lưu trữ dữ liệu của bạn."
        onSuccess={() => {
          setShowAuthModal(false);
        }}
      /> */}

      {/* User Profile Sidebar - only shown for logged in users */}
      {/* TODO: Implement UserProfileSidebar component */}
    </>
  );
};
