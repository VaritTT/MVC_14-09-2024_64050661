# [Exit Exam 1/67] MVC - 14 Sep 2024

นายวฤษณิ์ ทับทิม (Varit Tubtim) 64050661

## Question 1

1. ใช้เป็นภาษา
<p align="left" style="background-color: white;">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
  </a>
  <a href="https://expressjs.com" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
  </a>
</p>
JavaScript  โดย Backend เป็น Node.js + Express.js และ Frontend
เป็น Vite + React และใช้ tailwindCSS เป็นของ Material-tailwind


2. เก็บข้อมูลในรูปแบบของ
JSON file โดยมีรูปแบบดังนี้

```http
{
        "id": "11111112",
        "color": "white",
        "age": {
            "year": 6,
            "month": 9
        }
}
```

ซึ่งจะมีข้อมูลตามโจทย์จำนวนวัว
15 ตัว 


3. หน้า UI
เป็นเว็บ start ด้วย port 3000 โดยจะอยู่ในส่วนของ folder frontend ซึ่งจะเป็นส่วนของ View (V) ภายใน src/views จะมีหน้า
CowManagement.jsx ที่เอาไว้แสดงหน้าเว็บหลัก
และมีการเรียกใช้ Form ที่อยู่ใน components/CowInfoForm.jsx
เพื่อแสดง form input ให้ user ใส่ข้อมูล
id โดยจะทำการส่งผ่าน port 5000 ที่เป็นเส้น API ไปที่ backend เพื่อคำนวณข้อมูล


4. รับข้อมูลมาจาก
frontend ซึ่ง folder backend ภายใน src/routes/api.js จะมีการกำหนด router ในการเปิดช่องให้ยิง
API เข้ามาชื่อ path คือ /cows และเข้าไปที่ CowController.getCowByID


5. getCowByID ใน controllers/CowController.js ซึ่งเป็นส่วนของ Controller (C) จะรับข้อมูล cowID จาก body
ที่ส่งมาเป็นแบบ POST แล้วไปคำนวณต่อใน CowModel ซึ่งจะ calculate วัวทั้งสามสีได้แก่
white brown และ pink แยกกัน และตรวจสอบค่าที่ return ออกมาว่าเป็น null หรือไม่
เพื่อเก็บ message แล้วส่งไปแสดงที่หน้า UI แต่ถ้าไม่มี errorMessage จะ return เป็น json เพื่อไปแสดง โดยจะมีการเพิ่มข้อมูล จำนวนลิตรของนมวัวทั้ง 3 ตัว


6. ภายใน models/CowModel.js ซึ่งเป็นส่วนของ Model (M) จะมี 3 function ซึ่งหลัก ๆ จะเป็นการอ่านไฟล์ JSON ออกมาและ parse ให้เป็นในรูปแบบ format ที่ใช้งานได้
จากนั้นแต่ละ function จะทำการ find ด้วย ID กับ สีของแต่ละ function ถ้า fnd ไม่เจอให้
return null แต่ถ้าหาเจอให้คำนวณตามโจทย์และ return
ค่าลิตรกลับไป
