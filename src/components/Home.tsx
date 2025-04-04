import logo from '../assets/logo.png';  // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={logo} alt="Web-Health Logo" className="logo" />
        <h1>ยินดีต้อนรับ</h1>
        <h2>Web-Health</h2>
        <p>แอปสำหรับให้คำแนะนำดูแลสุขภาพเบื้องต้น</p>
        <button onClick={() => window.location.href = '/login'}>ไปที่หน้าล็อกอิน</button>
      </div>
    </div>
  );
}

export default Home;
