import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  setShowAuthModal: (value: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ setShowAuthModal }) => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginForm);
    alert('Đăng nhập thành công');
    setShowAuthModal(false);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', registerForm);
  };

  const switchAuthMode = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 w-full max-w-md rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden"
      >
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowAuthModal(false)}
          className="absolute right-5 top-5 z-10 text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-full"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Header */}
        <div className="relative p-8 border-b border-gray-700/50">
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-500/30">
                R
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </motion.div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl tracking-wide bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            >
              RoPhim
            </motion.span>
          </div>

          <div className="flex gap-2 bg-gray-800/50 p-1.5 rounded-xl backdrop-blur-sm">
            {['login', 'register'].map((mode) => (
              <motion.button
                key={mode}
                onClick={() => switchAuthMode(mode as 'login' | 'register')}
                whileHover={{ scale: authMode !== mode ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex-1 py-3 text-center font-semibold rounded-lg transition-all duration-300 ${
                  authMode === mode
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {authMode === mode && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg shadow-orange-500/30"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="relative p-8">
          <AnimatePresence mode="wait">
            {authMode === 'login' ? (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleLogin}
                className="space-y-6"
              >
                <InputField
                  icon={<Mail />}
                  label="Email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                  placeholder="example@email.com"
                />

                <PasswordField
                  label="Mật khẩu"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  placeholder="••••••••"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                >
                  Đăng nhập
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="register"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleRegister}
                className="space-y-5"
              >
                <InputField
                  icon={<User />}
                  label="Tên người dùng"
                  type="text"
                  value={registerForm.username}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      username: e.target.value,
                    })
                  }
                  placeholder="johndoe"
                />

                <InputField
                  icon={<Mail />}
                  label="Email"
                  type="email"
                  value={registerForm.email}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      email: e.target.value,
                    })
                  }
                  placeholder="example@email.com"
                />

                <PasswordField
                  label="Mật khẩu"
                  value={registerForm.password}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      password: e.target.value,
                    })
                  }
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  placeholder="••••••••"
                />

                <PasswordField
                  label="Xác nhận mật khẩu"
                  value={registerForm.confirmPassword}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  showPassword={showConfirmPassword}
                  setShowPassword={setShowConfirmPassword}
                  placeholder="••••••••"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                >
                  Đăng ký
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

interface InputProps {
  icon: React.ReactNode;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputProps> = ({
  icon,
  label,
  type,
  value,
  onChange,
  placeholder,
}) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="block text-sm font-medium mb-2.5 text-gray-300 group-focus-within:text-orange-400 transition-colors duration-300">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300">
        {icon}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-gray-800 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
        required
      />
    </div>
  </motion.div>
);

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  placeholder?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  onChange,
  showPassword,
  setShowPassword,
  placeholder,
}) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="block text-sm font-medium mb-2.5 text-gray-300 group-focus-within:text-orange-400 transition-colors duration-300">
      {label}
    </label>
    <div className="relative">
      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-gray-800 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
        required
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5" />
        ) : (
          <Eye className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  </motion.div>
);

export default AuthModal;
