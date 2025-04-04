import { useNavigate } from 'react-router-dom';
import './SymptomChecker.css';
import { useState } from 'react';
import logo from '../assets/logo.png';  // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง

function SymptomChecker() {
  const [symptom, setSymptom] = useState('');
  const [advice, setAdvice] = useState('');
  const [medicine, setMedicine] = useState('');
  const [medicineTime, setMedicineTime] = useState('');
  const navigate = useNavigate();

  const getAdvice = () => {
    if (!symptom) {
      setAdvice('กรุณากรอกอาการของคุณ');
      return;
    }

    // 🔹 ระบบแนะนำยาและวิธีรักษาเบื้องต้น
    const symptomAdvice: { [key: string]: { advice: string, medicine: string, time: string } } = {
      'ปวดหัว': {
        advice: 'พักผ่อนให้เพียงพอ และดื่มน้ำเยอะ ๆ',
        medicine: 'พาราเซตามอล 500 มก.',
        time: 'ทานทุก 4-6 ชั่วโมง (ไม่เกิน 4 ครั้งต่อวัน)',
      },
      'ไอ': {
        advice: 'แนะนำให้ดื่มน้ำอุ่น หลีกเลี่ยงของเย็น หรือใช้ยาแก้ไอเช่น เดกซ์โทรเมทอร์แฟน',
        medicine: 'เดกซ์โทรเมทอร์แฟน',
        time: 'ทานวันละ 2 ครั้ง หลังอาหาร',
      },
      'เจ็บคอ': {
        advice: 'กลั้วคอด้วยน้ำเกลือ ดื่มน้ำอุ่น และหลีกเลี่ยงการใช้เสียงมากเกินไป',
        medicine: 'พาราเซตามอล',
        time: 'ทานตามความจำเป็น',
      },
      'ไข้': {
        advice: 'เช็ดตัวด้วยน้ำอุ่น และพักผ่อนให้เพียงพอ',
        medicine: 'พาราเซตามอล 500 มก.',
        time: 'ทานทุก 4-6 ชั่วโมง (ไม่เกิน 4 ครั้งต่อวัน)',
      },
      'ปวดท้อง': {
        advice: 'ดื่มน้ำขิงอุ่น ๆ และพักผ่อน',
        medicine: 'ยาแก้ปวดท้อง',
        time: 'ทานตามคำแนะนำของแพทย์',
      },
      'คลื่นไส้': {
        advice: 'แนะนำให้ดื่มน้ำขิง หรือทานยาแก้คลื่นไส้ตามคำแนะนำของแพทย์',
        medicine: 'ยาแก้คลื่นไส้',
        time: 'ทานตามคำแนะนำของแพทย์',
      },
      'ท้องเสีย': {
        advice: 'แนะนำให้ดื่มน้ำเกลือแร่เพื่อป้องกันการขาดน้ำ และพักผ่อน',
        medicine: 'ยาแก้ท้องเสีย',
        time: 'ทานตามคำแนะนำของแพทย์',
      },
      'ปวดกล้ามเนื้อ': {
        advice: 'แนะนำให้ทายากล้ามเนื้อ หรือพักผ่อน และดื่มน้ำมาก ๆ',
        medicine: 'ยาแก้ปวดกล้ามเนื้อ',
        time: 'ทานตามคำแนะนำของแพทย์',
      },
      'เวียนหัว': {
        advice: 'ควรนั่งหรืออยู่ในที่พักผ่อน และดื่มน้ำมาก ๆ',
        medicine: 'ยาแก้เวียนหัว',
        time: 'ทานตามคำแนะนำของแพทย์',
      },
      'อ่อนเพลีย': {
        advice: 'พักผ่อนให้เพียงพอ และดื่มน้ำเยอะ ๆ',
        medicine: 'วิตามินซี',
        time: 'ทานตามคำแนะนำของแพทย์',
      },
      'เบื่ออาหาร': {
        advice: 'แนะนำให้รับประทานอาหารบ่อย ๆ และดื่มน้ำให้เพียงพอ',
        medicine: 'ยาเพิ่มความอยากอาหาร',
        time: 'ทานตามคำแนะนำของแพทย์',
      },
    };

    // แปลงอาการเป็นตัวพิมพ์เล็กเพื่อลดความผิดพลาดจากการกรอก
    const normalizedSymptom = symptom.trim().toLowerCase();

    // ค้นหาคำที่ใกล้เคียงกับอาการ
    const matchedAdvice = Object.keys(symptomAdvice).find((key) =>
      key.toLowerCase().includes(normalizedSymptom)
    );

    if (matchedAdvice) {
      setAdvice(symptomAdvice[matchedAdvice].advice);
      setMedicine(symptomAdvice[matchedAdvice].medicine);
      setMedicineTime(symptomAdvice[matchedAdvice].time);
    } else {
      setAdvice('ไม่พบข้อมูลอาการนี้ กรุณาลองกรอกใหม่หรือปรึกษาแพทย์หากอาการรุนแรง');
      setMedicine('');
      setMedicineTime('');
    }
  };

  return (
    <div className="symptom-container">
      {/* โลโก้ */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <h1>แนะนำการรักษาเบื้องต้น</h1>
      <p>กรอกอาการของคุณเพื่อรับคำแนะนำเบื้องต้น</p>

      <div className="input-group">
        <label htmlFor="symptom">อาการของคุณ :</label>
        <input
          type="text"
          id="symptom"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="ตัวอย่าง: ปวดหัว, ไอ, เจ็บคอ"
        />
      </div>

      <button onClick={getAdvice}>รับคำแนะนำ</button>
      <button className="back-button" onClick={() => navigate('/profile')}>
        ย้อนกลับ
      </button>

      {advice && (
        <div className="advice-box">
          <p>{advice}</p>
          {medicine && (
            <div>
              <strong>ยาแนะนำ:</strong> {medicine}
            </div>
          )}
          {medicineTime && (
            <div>
              <strong>วิธีการรับประทาน:</strong> {medicineTime}
            </div>
          )}
          <p>หากอาการไม่ดีขึ้นหรือแย่ลง ควรไปพบแพทย์เพื่อรับการรักษาที่เหมาะสม และอย่าลืมปฏิบัติตามคำแนะนำของแพทย์ในการรับประทานยา.</p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;
