---
layout: post
title: "PLC (Programmable Logic Controller)"
date: 2025-10-15
categories: [engineering, electrical]
image: /assets/img/
description: "PLC (Programmable Logic Controller)"
---

# 🤖 PLC (Programmable Logic Controller) — စက်ရုံအလိုအလျောက် စနစ်ရဲ့ ဦးနှောက် 🧠⚙️

လျှပ်စစ်နဲ့ စက်မှုပိုင်းအလုပ်တွေမှာ စက်တွေကို အလိုအလျောက် လုပ်ဆောင်စေဖို့  
တစ်ခါတစ်လေတွင် Relay Logic Circuit တွေကို သုံးခဲ့ကြတယ်။  
ဒါပေမဲ့ Relay တွေဖြင့် Control Logic များပြုလုပ်ရတာ အချိန်ကြာ၊ ပြင်ရခက်၊  
နောက်ထပ် Function တွေ ထပ်ထည့်ရခက်တာကြောင့် —  
**PLC (Programmable Logic Controller)** ဆိုတဲ့ နည်းပညာ အသစ်တစ်ခု ပေါ်လာခဲ့ပါတယ်။  

---

##  PLC ဆိုတာဘာလဲ?

**Definition:**  
> PLC ဆိုတာ Digital Computer တစ်လုံးလိုပေမဲ့ Industrial Environment အတွက် ပြုလုပ်ထားတဲ့  
> Programmable Electronic Device ဖြစ်ပြီး, Input Signal တွေကို လက်ခံပြီး Output Control ကို  
> Logic Program အပေါ် မူတည်စွာ ထုတ်ပေးတဲ့ စနစ် ဖြစ်ပါတယ်။

ရိုးရှင်းစွာပြောရရင် —  
**PLC ဆိုတာ စက်ရုံအလိုအလျောက်စနစ် (Automation System) ရဲ့ ဦးနှောက် (Brain)** ဖြစ်ပါတယ်။ 

---

##  PLC ရဲ့ အဓိက အစိတ်အပိုင်းများ

| အစိတ်အပိုင်း | Function | ရှင်းလင်းချက် |
|---|---|---|
| **CPU (Central Processing Unit)** | Program ကို Execute လုပ်တယ် | Logic Calculation, Timing, Communication |
| **Memory (RAM/ROM/EEPROM)** | Program & Data ကို သိမ်းထားတယ် | Ladder Logic, Timer/Counter Values, Parameters |
| **Input Module** | Sensor/Push Button Signal လက်ခံ | 24VDC, 110VAC, Analog 4–20 mA, 0–10V |
| **Output Module** | Actuator/Motor/Relay ကို Control | Digital (Relay/Transistor) or Analog Outputs |
| **Power Supply** | 24VDC/5VDC Voltage Conversion | PLC Internal Circuit Supply |
| **Programming Device** | Program ရေးသည့် Tool | Laptop (LAD, STL, FBD), HMI |

---

##  PLC အလုပ်လုပ်ပုံ (Scan Cycle Operation)

PLC တစ်လုံးဟာ အမြဲတမ်း Looping Cycle လုပ်နေတာဖြစ်ပါတယ်။  
ဒါကို **“Scan Cycle”** လို့ ခေါ်ပြီး အဆင့် ၄ ခုနဲ့ ဖြစ်တယ်။  

###  1. Input Scan
> PLC က Input Module မှာရှိတဲ့ Sensor, Switch, Push Button, Limit Switch စတဲ့ Signal တွေကို  
> တစ်ချက်တည်းလုံးဖတ်ယူတယ်။

###  2. Program Execution
> Ladder Logic Program ကို Line by Line အတိုင်း Execute လုပ်တယ်။  
> True Condition တွေကို တွက်ချက်ပြီး Output Memory မှာ ထိန်းသိမ်းတယ်။

###  3. Output Scan
> Output Memory ထဲက Result တွေကို Actual Output Module ကို ပေးတယ်။  
> (ဥပမာ – Relay ON, Motor Start, Solenoid Energize)

###  4. Communication / Diagnostics
> PLC Diagnostic Function, Communication with SCADA/HMI, Error Handling စသည့်အလုပ်တွေကို ဆောင်ရွက်တယ်။

➡️ ပိုမိုမြန်ဆန်တဲ့ PLC တစ်လုံးက Scan Cycle Time = **1–10 ms** အတွင်းမှာ ပြီးစီးနိုင်တယ်။

---

##  PLC Programming Languages (IEC 61131-3 Standard)

| Language | Description | သုံးရာနေရာ |
|---|---|---|
| **LAD (Ladder Diagram)** | Relay Logic အတိုင်း Diagrammatic Logic | Industrial Control (Easy to read) |
| **STL (Statement List)** | Assembly-like Text Programming | Advanced Calculations |
| **FBD (Function Block Diagram)** | Function Box ဖြင့် Logic Compose | Analog Processing, PID Control |
| **SFC (Sequential Function Chart)** | Step-by-Step Process Flow | Batch / Sequential Operation |
| **ST (Structured Text)** | High-Level Language (Pascal-like) | Mathematical / String Processing |

##  PLC vs Relay Control System

| အကြောင်းအရာ | Relay Logic | PLC System |
|---|---|---|
| **Design Flexibility** | Logic ပြင်ရခက် | Logic ပြင်ရလွယ် (Software) |
| **Maintenance** | Contact Failures | Diagnostic Available |
| **Space Requirement** | Wires & Relays အများကြီးလို | Compact Module Design |
| **Response Time** | Slow | Fast (Microseconds) |
| **Programming** | Manual Wiring | Software Programming |
| **Reliability** | Mechanical Wear | Solid State Reliability |

➡️ ဒါကြောင့် Modern Industry တွေမှာ Relay Logic ကို PLC အပြောင်းပြန်လုပ်နေကြပါတယ်။

---

##  PLC Memory Organization

| Memory Section | Description | Example |
|---|---|---|
| **Input Image Table (I)** | Sensor Data | I0.0, I0.1 (Push Button, Limit Switch) |
| **Output Image Table (Q)** | Output Commands | Q0.0, Q0.1 (Motor, Lamp) |
| **Flag/Marker Memory (M)** | Temporary Storage | M0.0 (Intermediate Logic) |
| **Timer/Counter Memory (T/C)** | Time & Counting | T1, C3 |
| **Data Block (DB)** | Numeric/Analog Data Storage | DB1.DBW0 (Temperature Data) |
| **System Memory (SM)** | Internal Status | SM0.0 (Always ON Bit) |

---

##  PLC Input/Output (I/O) Configuration

###  Digital I/O
- **Input:** ON/OFF Type (24VDC, 110VAC)  
  e.g., Push Buttons, Proximity Sensor  
- **Output:** ON/OFF Type  
  e.g., Motor Contactor, Lamp, Solenoid

###  Analog I/O
- **Input:** Continuous Value (4–20 mA, 0–10 V)  
  e.g., Temperature, Pressure, Flow Sensor  
- **Output:** Analog Control (4–20 mA)  
  e.g., VFD Speed Control, Valve Positioning

---

##  PLC Communication & Networking

| Protocol | Description | Use Case |
|---|---|---|
| **Modbus RTU/TCP** | Open Protocol for Data Exchange | PLC ↔ HMI ↔ SCADA |
| **Profibus/Profinet** | Siemens Standard Protocol | PLC ↔ Remote IO ↔ Drive |
| **EtherNet/IP** | Allen-Bradley / Rockwell Protocol | PLC ↔ Network Devices |
| **CANopen / DeviceNet** | Field-Level Network | Sensors, Actuators |
| **MQTT / OPC UA** | IIoT Communication | Cloud / Data Analytics |

➡️ PLC Networking က Modern Industry 4.0 Automation အတွက် အခြေခံ အစိတ်အပိုင်းဖြစ်တယ်။

---

##  PLC Timer & Counter Functions

| Function | Description | Example |
|---|---|---|
| **TON (On-Delay Timer)** | Input ON → Output ON after Delay | Motor Start Delay |
| **TOF (Off-Delay Timer)** | Input OFF → Output OFF after Delay | Fan Cooling Delay |
| **TP (Pulse Timer)** | Output ON for Fixed Duration | Alarm Buzzer |
| **CTU (Count Up)** | Increment Count when Trigger | Product Counting |
| **CTD (Count Down)** | Decrement Count when Trigger | Reverse Counting |

---

##  PLC Programming Example (Ladder Logic)

**Objective:**  
Push Button ON → Start Motor  
Push Button OFF → Stop Motor  
Add Auto Restart Delay = 3 sec

```ladder
| I0.0 (Start PB) ----[ ]----+----( ) Q0.0 (Motor)
|                            |
| I0.1 (Stop PB) ---[/]------+
| Q0.0 ----------[TON T1 3s]---> Auto Restart after 3s

---

## Maintenance, Application & Conclusion**

```markdown
##  PLC Maintenance & Troubleshooting

###  Regular Maintenance
- Backup Program Files Weekly  
- Check Battery & Power Supply Voltage  
- Clean Ventilation Filters  
- Check Communication LEDs (Tx/Rx Blinking)  

###  Troubleshooting Steps
1. Check Power LED (PLC Power OK?)  
2. Run LED (PLC in RUN Mode?)  
3. I/O LEDs (Input/Output Response OK?)  
4. Error LED (Fault Log Check via Software)  
5. Connect via Programming Cable → Online Monitor  

---

##  PLC Application Examples

| Application | Description |
|---|---|
| Conveyor System | Sequence Start/Stop, Sensor Detection |
| Water Treatment Plant | Level Control, Pump Automation |
| Packaging Machine | Counting, Cutting, Labeling |
| HVAC Control | Temperature PID Control |
| Elevator Control | Sequential Floor Logic |
| Cement Plant | Interlocking & Motor Control |
| Smart Factory | PLC ↔ SCADA ↔ IoT System |

---

##  Advanced PLC Topics

- **PID Control (Proportional-Integral-Derivative)** — Analog Process Control (Temperature, Flow)
- **Redundancy System** — Dual CPU for Critical Applications
- **Remote I/O & Distributed Control** — Save Wiring, Expand System Easily
- **Safety PLC** — SIL-rated (Safety Integrity Level) PLC for Human Safety
- **Integration with HMI/SCADA** — Real-time Monitoring & Data Logging

---

> PLC ဟာ စက်ရုံအလိုအလျောက်စနစ် (Industrial Automation) ထဲမှာ အဓိက ဦးနှောက်တစ်လုံးဖြစ်ပါတယ်။  
> Input, Logic, Output ကို တစ်ချက်ချင်းချင်း ချိတ်ဆက်ပြီး စနစ်တစ်ခုလုံးကို စိတ်ကြိုက် ထိန်းချုပ်နိုင်စေပါတယ်။  
> Modern PLC တွေဟာ Cloud System, AI Control, IoT Integration နဲ့အတူ Fourth Industrial Revolution ရဲ့ အဓိက အစိတ်အပိုင်း ဖြစ်လာပါပြီ။

---

##  PLC Brands & Types — ဈေးကွက်အထင်ကြီးဆုံး PLC များ 

PLC (Programmable Logic Controller) ဟာ လုပ်ငန်းအလိုအလျောက် စနစ် (Industrial Automation) တစ်ခုအတွက် အဓိက ဦးနှောက် ဖြစ်တဲ့အတွက်  
ကမ္ဘာတစ်ဝှမ်းမှာ ထုတ်လုပ်သူ (Manufacturers) များစွာရှိပါတယ်။  
အောက်မှာဆိုတာက **အကြီးဆုံး PLC Brand များနဲ့ သူတို့ရဲ့ အင်အားအနည်းအများများ** ဖြစ်ပါတယ်။ 

---

### 🇩🇪 **Siemens PLC (Germany)**  
> **Series:** LOGO!, S7-200, S7-300, S7-1200, S7-1500  
> **Software:** TIA Portal / Step 7  

**အထူးအင်အား:**  
- Modular Design, Networking လုပ်ရလွယ်  
- Industrial Automation, Factory, Process Control အတွက် ပေါင်းစပ်သုံးနိုင်  
- PROFINET, PROFIBUS Communication များကို Support  
- Industry 4.0 Ready

**သုံးရာနေရာများ:**  
Power Plant, Cement Plant, Factory Automation

---

### 🇺🇸 **Allen-Bradley (Rockwell Automation, USA)**  
> **Series:** MicroLogix, CompactLogix, ControlLogix  
> **Software:** RSLogix 500 / Studio 5000  

**အထူးအင်အား:**  
- Heavy-Duty Industrial Application အတွက် သင့်တော်  
- EtherNet/IP Communication Standard  
- Diagnostic & Safety PLC အတွက် ထင်ရှား  

**သုံးရာနေရာများ:**  
Automotive Industry, Oil & Gas Plant, Packaging Line

---

### 🇯🇵 **Mitsubishi Electric (Japan)**  
> **Series:** FX Series, Q Series, iQ-R Series  
> **Software:** GX Developer / GX Works2 / GX Works3  

**အထူးအင်အား:**  
- Compact PLC Design  
- Fast Processing Speed  
- Asia-Pacific Market မှာ အလွန်ပြန့်နှံ့  

**သုံးရာနေရာများ:**  
Manufacturing Line, Robotics Control, HVAC Automation

---

### 🇯🇵 **Omron (Japan)**  
> **Series:** CP1, CJ2, NX1P2, NJ Series  
> **Software:** CX-Programmer / Sysmac Studio  

**အထူးအင်အား:**  
- High-speed Motion Control  
- Integrated with Sensor, Vision System  
- IoT Connectivity Built-in  

**သုံးရာနေရာများ:**  
Packaging, Food & Beverage, Pharmaceutical

---

### 🇯🇵 **Keyence (Japan)**  
> **Series:** KV-5500, KV-8000  
> **Software:** KV Studio  

**အထူးအင်အား:**  
- Ultra High-speed Scan Cycle  
- Built-in Networking (EtherNet/IP, Modbus)  
- Compact Size for Machine Integration  

**သုံးရာနေရာများ:**  
Precision Machine Control, Assembly Automation

---

### 🇫🇷 **Schneider Electric (France)**  
> **Series:** Modicon M221, M241, M580  
> **Software:** EcoStruxure Machine Expert  

**အထူးအင်အား:**  
- Strong in Process & Energy Industry  
- Modbus TCP/RTU Communication Standard  
- SCADA Integration (EcoStruxure Platform)  

**သုံးရာနေရာများ:**  
Water Treatment, Energy Management, HVAC

---

### 🇯🇵 **Panasonic (Japan)**  
> **Series:** FP0R, FP-X, FP7  
> **Software:** FPWIN Pro  

**အထူးအင်အား:**  
- Compact, Reliable  
- Medium-size Machine Automation  
- Low Power Consumption  

---

### 🇮🇹 **ABB (Switzerland / Italy)**  
> **Series:** AC500, AC800M  
> **Software:** Automation Builder  

**အထူးအင်အား:**  
- High Reliability, Industrial-grade  
- IEC 61131-3 Compliant  
- Perfect for Process Automation & Power Plant  

---

### 🇰🇷 **LS Electric (Korea)**  
> **Series:** XGB, XEC, XBC  
> **Software:** XG5000  

**အထူးအင်အား:**  
- Cost-effective PLC  
- Asian Market Support  
- Easy Integration with HMI  

---

### 🧰 **Summary Table**

| Brand | Origin | Typical Use | Software |
|---|---|---|---|
| Siemens | Germany | Factory, Process | TIA Portal |
| Allen-Bradley | USA | Industrial, Heavy Duty | Studio 5000 |
| Mitsubishi | Japan | Manufacturing, Robotics | GX Works3 |
| Omron | Japan | Automation + IoT | Sysmac Studio |
| Schneider | France | Process, Energy | EcoStruxure |
| ABB | Switzerland | Power System | Automation Builder |
| Keyence | Japan | Precision Machinery | KV Studio |
| Panasonic | Japan | Compact Machines | FPWIN Pro |
| LS Electric | Korea | General Purpose | XG5000 |

---

#  PLC Selection Guide — သင့် Project အတွက် မှန်ကန်တဲ့ PLC ရွေးချယ်နည်း 

PLC (Programmable Logic Controller) ဟာ စက်ရုံ၊ စက်ပစ္စည်း၊ Automation System တို့ရဲ့ ဦးနှောက်ဖြစ်တဲ့အတွက်  
**မှန်ကန်တဲ့ PLC ကို ရွေးချယ်ခြင်းဟာ စနစ်တစ်ခုလုံးရဲ့ အောင်မြင်မှုကို ဆုံးဖြတ်ပေးတတ်ပါတယ်။**  

ဒီ Section မှာတော့ Professional Engineer တွေအနေနဲ့ PLC တစ်လုံးကို ရွေးချယ်ရာမှာ  
အကြောင်းအရာ ၁၀ ချက်အထိ အသေးစိတ် (Micro Detail) ဖြင့် ရှင်းပြသွားပါမယ်။ ⚙️  

---

##  1️⃣ Define the Application Type

PLC တစ်လုံးကို ရွေးမတိုင်ခင် **သုံးမယ့်နေရာ (Application)** ကို သေချာသိထားဖို့လိုပါတယ်။  

| Application Type | Description | Example |
|---|---|---|
| **Discrete Control** | ON/OFF Logic, Sequence Control | Conveyor, Machine Start/Stop |
| **Process Control** | Continuous Analog Values | Temperature, Pressure Control |
| **Motion Control** | Servo, Stepper, Axis Movement | Robotics, Packaging Machine |
| **Hybrid System** | Mixed Digital + Analog | Water Treatment, HVAC |

➡️ Application ကို မသိရင် Specification ဘယ်လိုလည်း သတ်မှတ်လို့ မရပါ။

---

##  2️⃣ Determine I/O Requirements

###  Digital I/O
- **Digital Input (DI)** → Push Buttons, Proximity Sensors  
- **Digital Output (DO)** → Contactors, Relays, Alarms  

###  Analog I/O
- **Analog Input (AI)** → 4–20 mA, 0–10V (Temperature, Flow)  
- **Analog Output (AO)** → Control Signals to VFD, Valves  

| I/O Type | Typical Range | Example |
|---|---|---|
| DI | 8–512 Points | Sensors, Switches |
| DO | 8–512 Points | Motor Starters |
| AI | 2–64 Channels | Temperature Sensors |
| AO | 2–64 Channels | Speed Control, Valve |

 **Rule of Thumb:**  
အနာဂတ်မှာ Expansion လုပ်နိုင်အောင် I/O Point 20–30% ခန့် ထပ်ထားပါ။

---

##  3️⃣ Choose the PLC Size & Type

| PLC Type | Description | Advantage | Example |
|---|---|---|---|
| **Nano / Micro PLC** | Small I/O Count (<64 I/O) | Low Cost, Compact | Siemens LOGO!, Mitsubishi FX |
| **Modular PLC** | Expandable I/O Slots | Flexible, Mid-Range | Siemens S7-1200, AB CompactLogix |
| **Rack PLC (Large)** | High I/O, Multi-Rack | For Large Plants | Siemens S7-1500, AB ControlLogix |
| **Safety PLC** | SIL2–SIL3 Certified | Human Protection | Pilz, Siemens F-Series |

---

##  4️⃣ Processing Speed & Memory

###  Scan Time
- Small Machine → <10 ms  
- Process Control → <5 ms  
- High-speed Machine → <1 ms  

###  Memory Capacity

| Memory Type | Function | Typical Range |
|---|---|---|
| Program Memory | Ladder Logic, Functions | 16 KB – 2 MB |
| Data Memory | Variable & Setpoints | 8 KB – 1 MB |
| Retentive Memory | Save Data after Power Loss | Optional |

 **Tip:**  
PLC Scan Time မျှ Short ဖြစ်လေ၊ System Response ပိုမြန်လေ။

---

##  5️⃣ Power Supply & Voltage Rating

| Parameter | Typical Values | Notes |
|---|---|---|
| PLC Power Input | 24VDC / 110VAC / 220VAC | Depend on Model |
| Input Signal | 24VDC (Standard), 110VAC | Sensor Type သုံးမှုအပေါ်မူတည် |
| Output Type | Relay / Transistor / Triac | Control Load Type အပေါ်မူတည် |

➡️ DC System တွေမှာ 24VDC PLC များ သုံးရလွယ်။  
➡️ AC Load များသုံးတဲ့နေရာတွင် Relay Output PLC သုံးပါ။

---

##  6️⃣ Communication & Networking Requirement

Modern PLC တွေဟာ Network Communication လုပ်နိုင်ဖို့လိုပါတယ်။  
အောက်ပါ Protocol များအပေါ် မူတည်ပြီး System Integration လုပ်နိုင်သလား စစ်ပါ။

| Protocol | Use Case | Note |
|---|---|---|
| **Modbus RTU/TCP** | General PLC ↔ HMI | Widely Supported |
| **PROFINET / PROFIBUS** | Siemens Standard | For Industrial Plant |
| **EtherNet/IP** | Allen-Bradley Standard | For Factory Integration |
| **CANopen / DeviceNet** | Field Devices | Motor Drives, Sensors |
| **MQTT / OPC UA** | Cloud, IIoT | Industry 4.0 |

 **Future Ready:**  
IoT / Smart Factory Integration ရဲ့ အတွက် MQTT, OPC UA ပါရှိတဲ့ PLC ကို ရွေးပါ။

---

##  7️⃣ Programming Software Compatibility

| Brand | Software | File Extension |
|---|---|---|
| Siemens | TIA Portal | *.awl, *.lad, *.xml |
| Allen-Bradley | RSLogix / Studio 5000 | *.acd |
| Mitsubishi | GX Works3 | *.gxw |
| Omron | Sysmac Studio | *.smc2 |
| Schneider | EcoStruxure | *.prj |

**Important:**  
Project Team ရဲ့ Experience နဲ့ Software Familiarity ကိုလည်း ထည့်တွက်ပါ။  
Software License, Support Cost ကိုလည်း မမေ့ပါနဲ့။

---

##  8️⃣ Environmental & Installation Conditions

| Factor | Specification | Consideration |
|---|---|---|
| Operating Temp | 0°C – 55°C | Factory Heat? |
| Humidity | < 90% | Moisture Protection |
| Vibration | < 2 g | Mounting Location |
| IP Rating | IP20 – IP65 | Dust / Water Proofing |

 Outdoor Panel မှာ IP54+ PLC ကို အသုံးပြုပါ။  
 Hot Area မှာ Ventilation Fan / Air Conditioner ထည့်ပါ။

---

##  9️⃣ Budget vs Support Considerations

| Type | Advantage | Disadvantage |
|---|---|---|
| **High-End PLC (Siemens, AB)** | Long-term Support, Expandable | High Cost |
| **Mid-Range PLC (Mitsubishi, Omron)** | Balanced Performance | Moderate Price |
| **Economy PLC (LS, Delta)** | Low Cost | Limited Feature, Small Memory |

💬 **Tip:**  
နည်းပညာပိုင်းနဲ့ Support Team ရှိတဲ့ Brand ကို ရွေးပါ။  
Spare Part ရှာရလွယ်တဲ့ Brand များက လုပ်ငန်းပျက်ကွက်ခြင်းကို လျှော့ပါးစေပါတယ်။

---

##  1️⃣0️⃣ Safety & Future Expandability

- Future I/O Expansion Slot ရှိရမယ်  
- Redundancy Option (Dual CPU) ပါဝင်ရမယ်  
- Safety Certification (SIL2/3) များရှိရမယ်  
- Data Logging / SCADA Integration Support  

---

## 💬 နိဂုံးချုပ်

> PLC ဟာ စက်ရုံအလိုအလျောက်စနစ် (Industrial Automation) ထဲမှာ အဓိက ဦးနှောက်တစ်လုံးဖြစ်ပါတယ်။  
> Input, Logic, Output ကို တစ်ချက်ချင်းချင်း ချိတ်ဆက်ပြီး စနစ်တစ်ခုလုံးကို စိတ်ကြိုက် ထိန်းချုပ်နိုင်စေပါတယ်။  
> Modern PLC တွေဟာ Cloud System, AI Control, IoT Integration နဲ့အတူ Fourth Industrial Revolution ရဲ့ အဓိက အစိတ်အပိုင်း ဖြစ်လာပါပြီ။
> PLC Brand ရွေးချယ်ရာမှာ မည်သည့် Brand က ပိုကောင်းသလဲဆိုတာထက် —  
> Application (အသုံးပြုရာနေရာ), Budget, Maintenance Support ပေါ်မူတည်ပါတယ်။  
> အရေးကြီးဆုံးကတော့ — သင်သုံးမယ့် PLC ကို နားလည်နက်နက်ရှိုင်းရှိုင်း သိထားဖို့ပါ။
> PLC ရွေးချယ်မှုဟာ ပိုက်ဆံအမြောက်အများ သုံးတာထက် ပိုနက်နက်ရှိုင်းရှိုင်း စဉ်းစားဖို့ လိုပါတယ်။  
> I/O Requirement မှ စပြီး Software, Network, Safety အထိ တစ်ချက်ချင်းစီ တန်ဖိုးထားဖို့ လိုပါတယ်။  

#PLC #Automation #EngineerMyanmar #IndustrialControl #SCADA #PLCBrands #ElectricalBlogSeries 

**Tags**
#PLC #Automation #EngineerMyanmar #IndustrialControl #SCADA #ElectricalBlogSeries #SmartFactory #PLC #Automation #IndustrialControl #SCADA #ElectricalBlogSeries #SmartFactory #PLCSelection #Automation #ElectricalBlogSeries #IndustrialControl #SmartFactory
