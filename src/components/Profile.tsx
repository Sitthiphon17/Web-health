import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';

function ProfileForm() {
  const [fullName, setFullName] = useState('');
  const [idCard, setIdCard] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [drugAllergy, setDrugAllergy] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !idCard || !birthDate) {
      setError('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน');
      return;
    }

    if (!/^\d{13}$/.test(idCard)) {
      setError('กรุณากรอกรหัสบัตรประชาชนให้ถูกต้อง (13 หลัก)');
      return;
    }

    // ส่งข้อมูลและไปหน้าถัดไป
    navigate('/symptom');  // เปลี่ยนเส้นทางไปหน้า SympyomChecker 
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>ข้อมูลส่วนตัว</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullName">ชื่อ-นามสกุล :</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="กรอกชื่อ-นามสกุลของคุณ"
          />
        </div>
        <div className="input-group">
          <label htmlFor="idCard">รหัสบัตรประชาชน :</label>
          <input
            type="text"
            id="idCard"
            value={idCard}
            onChange={(e) => setIdCard(e.target.value)}
            placeholder="กรอกรหัสบัตรประชาชน 13 หลัก"
          />
        </div>
        <div className="input-group">
          <label htmlFor="birthDate">วันเกิด :</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="drugAllergy">แพ้ยา :</label>
          <input
            type="text"
            id="drugAllergy"
            value={drugAllergy}
            onChange={(e) => setDrugAllergy(e.target.value)}
            placeholder="ระบุชื่อยา หรือพิมพ์ 'ไม่มี'"
          />
        </div>
        <button type="submit">บันทึกข้อมูล</button>
      </form>
    </div>
  );
}

export default ProfileForm;
