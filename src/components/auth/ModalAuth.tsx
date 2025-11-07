'use client';

import type React from 'react';
import { useMemo, useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Loader2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  setShowAuthModal: (value: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ setShowAuthModal }) => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [loginTouched, setLoginTouched] = useState({
    email: false,
    password: false,
  });

  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registerErrors, setRegisterErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [registerTouched, setRegisterTouched] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const emailRegex = useMemo(
    () => /^[\w.!#$%&'*+/=?^_`{|}~-]+@[\w-]+(\.[\w-]+)*\.[A-Za-z]{2,}$/,
    []
  );

  const validateLogin = (form = loginForm) => {
    const errors: { email?: string; password?: string } = {};
    if (!form.email.trim()) {
      errors.email = 'Vui lòng nhập email của bạn.';
    } else if (!emailRegex.test(form.email)) {
      errors.email = 'Email không hợp lệ.';
    }

    if (!form.password.trim()) {
      errors.password = 'Vui lòng nhập mật khẩu.';
    } else if (form.password.length < 6) {
      errors.password = 'Mật khẩu phải có tối thiểu 6 ký tự.';
    }

    return errors;
  };

  const validateRegister = (form = registerForm) => {
    const errors: {
      username?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!form.username.trim()) {
      errors.username = 'Vui lòng nhập tên hiển thị.';
    } else if (form.username.trim().length < 3) {
      errors.username = 'Tên phải có ít nhất 3 ký tự.';
    }

    if (!form.email.trim()) {
      errors.email = 'Vui lòng nhập email.';
    } else if (!emailRegex.test(form.email)) {
      errors.email = 'Email không hợp lệ.';
    }

    if (!form.password) {
      errors.password = 'Vui lòng tạo mật khẩu.';
    } else if (form.password.length < 8) {
      errors.password = 'Mật khẩu phải có ít nhất 8 ký tự.';
    }

    if (!form.confirmPassword) {
      errors.confirmPassword = 'Vui lòng xác nhận mật khẩu.';
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Mật khẩu xác nhận chưa khớp.';
    }

    return errors;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateLogin();
    setLoginErrors(errors);
    setLoginTouched({ email: true, password: true });

    if (Object.keys(errors).length) {
      setFeedback({
        type: 'error',
        message: 'Vui lòng kiểm tra lại thông tin đăng nhập.',
      });
      return;
    }

    setFeedback(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({
        type: 'success',
        message: 'Đăng nhập thành công! Chào mừng bạn trở lại.',
      });
      setLoginForm({ email: '', password: '' });
      setLoginErrors({});
      setLoginTouched({ email: false, password: false });
      setTimeout(() => setShowAuthModal(false), 800);
    }, 900);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateRegister();
    setRegisterErrors(errors);
    setRegisterTouched({
      username: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(errors).length) {
      setFeedback({
        type: 'error',
        message: 'Thông tin chưa hợp lệ, vui lòng kiểm tra lại.',
      });
      return;
    }

    setFeedback(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({
        type: 'success',
        message: 'Tạo tài khoản thành công! Hãy đăng nhập để tiếp tục.',
      });
      setRegisterForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setRegisterErrors({});
      setRegisterTouched({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
      });
      setAuthMode('login');
    }, 1200);
  };

  const switchAuthMode = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowPassword(false);
    setShowConfirmPassword(false);
    setFeedback(null);
    setIsSubmitting(false);
    setLoginErrors({});
    setRegisterErrors({});
    setLoginTouched({ email: false, password: false });
    setRegisterTouched({
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isSubmitting) {
        setShowAuthModal(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isSubmitting, setShowAuthModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowAuthModal(false);
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl flex rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-center"
            style={{
              backgroundImage:
                'url(https://www.rophim.li/images/rophim-login.jpg)',
            }}
          />
          {/* Dark blue overlay on top of background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/60 to-slate-900/70" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 bg-slate-900 p-8 lg:p-12 relative">
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAuthModal(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Form Content */}
          <div className="max-w-sm">
            <AnimatePresence mode="wait">
              {authMode === 'login' ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Đăng nhập
                  </h2>
                  <p className="text-gray-300 text-sm mb-6">
                    Nếu bạn chưa có tài khoản,{' '}
                    <button
                      onClick={() => switchAuthMode('register')}
                      className="text-yellow-400 hover:text-yellow-300 font-semibold"
                    >
                      đăng ký ngay
                    </button>
                  </p>

                  {/* Feedback Message */}
                  <AnimatePresence>
                    {feedback && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mb-6 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
                          feedback.type === 'success'
                            ? 'border-emerald-600/40 bg-emerald-950/50 text-emerald-200'
                            : feedback.type === 'error'
                            ? 'border-red-600/40 bg-red-950/50 text-red-200'
                            : 'border-sky-600/40 bg-sky-950/50 text-sky-200'
                        }`}
                      >
                        {feedback.type === 'success' ? (
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        )}
                        <span>{feedback.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Email"
                          value={loginForm.email}
                          onChange={(e) => {
                            const value = e.target.value;
                            const updated = { ...loginForm, email: value };
                            setLoginForm(updated);
                            if (loginTouched.email) {
                              setLoginErrors(validateLogin(updated));
                            }
                          }}
                          onBlur={() => {
                            const errors = validateLogin();
                            setLoginTouched((prev) => ({
                              ...prev,
                              email: true,
                            }));
                            setLoginErrors((prev) => ({
                              ...prev,
                              email: errors.email,
                            }));
                          }}
                          className={`w-full bg-slate-800/50 border rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${
                            loginTouched.email && loginErrors.email
                              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                              : 'border-slate-700/50 focus:ring-yellow-400/50 focus:border-yellow-400/50'
                          }`}
                        />
                      </div>
                      {loginTouched.email && loginErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm flex items-center gap-1.5 px-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {loginErrors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1.5">
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Mật khẩu"
                          value={loginForm.password}
                          onChange={(e) => {
                            const value = e.target.value;
                            const updated = { ...loginForm, password: value };
                            setLoginForm(updated);
                            if (loginTouched.password) {
                              setLoginErrors(validateLogin(updated));
                            }
                          }}
                          onBlur={() => {
                            const errors = validateLogin();
                            setLoginTouched((prev) => ({
                              ...prev,
                              password: true,
                            }));
                            setLoginErrors((prev) => ({
                              ...prev,
                              password: errors.password,
                            }));
                          }}
                          className={`w-full bg-slate-800/50 border rounded-xl pl-11 pr-12 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${
                            loginTouched.password && loginErrors.password
                              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                              : 'border-slate-700/50 focus:ring-yellow-400/50 focus:border-yellow-400/50'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                          aria-label={
                            showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {loginTouched.password && loginErrors.password && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm flex items-center gap-1.5 px-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {loginErrors.password}
                        </motion.p>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting && (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      )}
                      {isSubmitting ? 'Đang xử lý…' : 'Đăng nhập'}
                    </motion.button>

                    <button
                      type="button"
                      className="w-full bg-white hover:bg-gray-100 text-slate-900 font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <text x="3" y="15" fontSize="10" fontWeight="bold">
                          G
                        </text>
                      </svg>
                      Đăng nhập bằng Google
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                        onClick={() =>
                          setFeedback({
                            type: 'info',
                            message: 'Tính năng quên mật khẩu sẽ sớm cập nhật.',
                          })
                        }
                      >
                        Quên mật khẩu?
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Đăng ký
                  </h2>
                  <p className="text-gray-300 text-sm mb-6">
                    Đã có tài khoản?{' '}
                    <button
                      onClick={() => switchAuthMode('login')}
                      className="text-yellow-400 hover:text-yellow-300 font-semibold"
                    >
                      đăng nhập ngay
                    </button>
                  </p>

                  <form onSubmit={handleRegister} className="space-y-5">
                    {/* Username Field */}
                    <div className="space-y-1.5">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Tên người dùng"
                          value={registerForm.username}
                          onChange={(e) => {
                            const value = e.target.value;
                            const updated = {
                              ...registerForm,
                              username: value,
                            };
                            setRegisterForm(updated);
                            if (registerTouched.username) {
                              setRegisterErrors(validateRegister(updated));
                            }
                          }}
                          onBlur={() => {
                            const errors = validateRegister();
                            setRegisterTouched((prev) => ({
                              ...prev,
                              username: true,
                            }));
                            setRegisterErrors((prev) => ({
                              ...prev,
                              username: errors.username,
                            }));
                          }}
                          className={`w-full bg-slate-800/50 border rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${
                            registerTouched.username && registerErrors.username
                              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                              : 'border-slate-700/50 focus:ring-yellow-400/50 focus:border-yellow-400/50'
                          }`}
                        />
                      </div>
                      {registerTouched.username && registerErrors.username && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm flex items-center gap-1.5 px-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {registerErrors.username}
                        </motion.p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Email"
                          value={registerForm.email}
                          onChange={(e) => {
                            const value = e.target.value;
                            const updated = { ...registerForm, email: value };
                            setRegisterForm(updated);
                            if (registerTouched.email) {
                              setRegisterErrors(validateRegister(updated));
                            }
                          }}
                          onBlur={() => {
                            const errors = validateRegister();
                            setRegisterTouched((prev) => ({
                              ...prev,
                              email: true,
                            }));
                            setRegisterErrors((prev) => ({
                              ...prev,
                              email: errors.email,
                            }));
                          }}
                          className={`w-full bg-slate-800/50 border rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${
                            registerTouched.email && registerErrors.email
                              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                              : 'border-slate-700/50 focus:ring-yellow-400/50 focus:border-yellow-400/50'
                          }`}
                        />
                      </div>
                      {registerTouched.email && registerErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm flex items-center gap-1.5 px-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {registerErrors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1.5">
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Mật khẩu"
                          value={registerForm.password}
                          onChange={(e) => {
                            const value = e.target.value;
                            const updated = {
                              ...registerForm,
                              password: value,
                            };
                            setRegisterForm(updated);
                            if (registerTouched.password) {
                              setRegisterErrors(validateRegister(updated));
                            }
                            // Also validate confirmPassword if it's been touched
                            if (registerTouched.confirmPassword) {
                              const confirmErrors = validateRegister(updated);
                              setRegisterErrors((prev) => ({
                                ...prev,
                                confirmPassword: confirmErrors.confirmPassword,
                              }));
                            }
                          }}
                          onBlur={() => {
                            const errors = validateRegister();
                            setRegisterTouched((prev) => ({
                              ...prev,
                              password: true,
                            }));
                            setRegisterErrors((prev) => ({
                              ...prev,
                              password: errors.password,
                            }));
                          }}
                          className={`w-full bg-slate-800/50 border rounded-xl pl-11 pr-12 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${
                            registerTouched.password && registerErrors.password
                              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                              : 'border-slate-700/50 focus:ring-yellow-400/50 focus:border-yellow-400/50'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                          aria-label={
                            showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {registerTouched.password && registerErrors.password && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm flex items-center gap-1.5 px-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {registerErrors.password}
                        </motion.p>
                      )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-1.5">
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Xác nhận mật khẩu"
                          value={registerForm.confirmPassword}
                          onChange={(e) => {
                            const value = e.target.value;
                            const updated = {
                              ...registerForm,
                              confirmPassword: value,
                            };
                            setRegisterForm(updated);
                            if (registerTouched.confirmPassword) {
                              setRegisterErrors(validateRegister(updated));
                            }
                          }}
                          onBlur={() => {
                            const errors = validateRegister();
                            setRegisterTouched((prev) => ({
                              ...prev,
                              confirmPassword: true,
                            }));
                            setRegisterErrors((prev) => ({
                              ...prev,
                              confirmPassword: errors.confirmPassword,
                            }));
                          }}
                          className={`w-full bg-slate-800/50 border rounded-xl pl-11 pr-12 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${
                            registerTouched.confirmPassword &&
                            registerErrors.confirmPassword
                              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                              : 'border-slate-700/50 focus:ring-yellow-400/50 focus:border-yellow-400/50'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                          aria-label={
                            showConfirmPassword
                              ? 'Ẩn mật khẩu xác nhận'
                              : 'Hiện mật khẩu xác nhận'
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {registerTouched.confirmPassword &&
                        registerErrors.confirmPassword && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm flex items-center gap-1.5 px-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {registerErrors.confirmPassword}
                          </motion.p>
                        )}
                    </div>

                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting && (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      )}
                      {isSubmitting ? 'Đang tạo tài khoản…' : 'Đăng ký'}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
