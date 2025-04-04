import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // เพิ่ม useNavigate
import './Login.css';
import logo from '../assets/logo.png';  // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (emailOrPhone === '' || password === '') {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // ✅ ไม่ตรวจสอบอีเมลหรือเบอร์โทร และให้ไปหน้ากรอกข้อมูลส่วนตัวได้เลย
    navigate('/profile'); // เปลี่ยนเส้นทางไปหน้ากรอกข้อมูลส่วนตัว
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>เข้าสู่ระบบ</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="emailOrPhone">อีเมล หรือ เบอร์โทรศัพท์ : </label>
          <input
            type="text"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="กรอกอีเมลหรือเบอร์โทรศัพท์ของคุณ "
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">รหัสผ่าน : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="กรอกรหัสผ่าน"
          />
        </div>
        <button type="submit">เข้าสู่ระบบ</button>
      </form>
    </div>
  );
}

export default Login;
