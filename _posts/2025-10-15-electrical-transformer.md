---
layout: post
title: "Transformer Protection & Maintenance — စနစ်ရဲ့ “နှလုံးသားကောင်းမွန်ရေး”"
date: 2025-10-15
categories: [engineering, electrical]
image: /assets/img/
description: "Transformer Protection & Maintenance — စနစ်ရဲ့ “နှလုံးသားကောင်းမွန်ရေး”
---

# Transformer Protection & Maintenance — စနစ်ရဲ့ “နှလုံးသားကောင်းမွန်ရေး” 

လျှပ်စစ်စနစ်တစ်ခုမှာ **Transformer (ဗို့အားပြောင်းစက်)** ဟာ စနစ်ရဲ့ “နှလုံးသား (Heart)” ဖြစ်ပါတယ်။  
အခြားကိရိယာတွေ လည်ပတ်နိုင်ဖို့အတွက် ဗို့အားအဆင့်တစ်ခုကနေ တစ်ခြားအဆင့်သို့ ပြောင်းပေးတာ Transformer ပဲဖြစ်ပါတယ်။

ဒါကြောင့် Transformer တစ်လုံး ပျက်စီးသွားတာနဲ့ —  
> စနစ်တစ်ခုလုံး ရပ်သွားနိုင်ပြီး၊ စက်ရုံတစ်ခုလုံး Down ဖြစ်နိုင်ပါတယ် ⚠️  

**Protection (ကာကွယ်ခြင်း)** နဲ့ **Maintenance (ထိန်းသိမ်းခြင်း)** ဟာ Transformer အသက်ရှည်ဖို့အတွက် အဓိက အားတစ်ခုဖြစ်ပါတယ်။

---

##  Transformer ဆိုတာဘာလဲ?

**Definition (အဓိပ္ပာယ်):**  
> Transformer ဆိုတာ Alternating Current (AC) ဗို့အား (Voltage) ကို  
> အခြားသော Level (High → Low / Low → High) သို့ ပြောင်းလဲပေးနိုင်တဲ့ Electromagnetic Device တစ်ခု ဖြစ်ပါတယ်။

Transformer က Power System ရဲ့ **Backbone (ကျောရိုး)** ဖြစ်ပြီး —  
**Transmission → Distribution → Utilization** အဆင့်တွေကို ဆက်သွယ်ပေးပါတယ်။

---

##  Transformer ကာကွယ်ရေး နည်းလမ်းများ (Protection Types)

Transformer ကို မတူညီတဲ့ အန္တရာယ်ရှိ Fault မျိုးစုံကနေ ကာကွယ်ဖို့အတွက်  
**Protection Scheme** များကို သုံးရပါတယ်။

---

###  1. Overcurrent Protection (OC Relay)
> ပုံမှန် Load Current ထက် ပိုပြီး ဆွဲလာတဲ့အခါ Transformer Winding ပူလာတာကို ကာကွယ်ပေးတယ်။

- **Device:** IDMT Overcurrent Relay  
- **Trip Setting:** Full Load Current ရဲ့ 120–150%  
- **Function:** External Short Circuit / Overload များကို ကာကွယ်တယ်။

---

###  2. Differential Protection (87T Relay)
> Transformer ရဲ့ Primary (ဝင်) နဲ့ Secondary (ထွက်) Current မညီတာကို နှိုင်းယှဉ်တယ်။  
> Current ကွာခြားမှု (Difference) ရှိရင် Internal Fault ဖြစ်တယ်ဆိုပြီး ချက်ချင်း ဖြတ်တယ်။

- **Relay Type:** Percentage Differential  
- **Advantage:** Internal Fault တွေကို အမြန်ဆုံး ရှာဖွေနိုင်ခြင်း။

---

###  3. Buchholz Relay (Gas Protection Relay)
> Oil-Immersed Transformer တွေမှာ သုံးပြီး Winding / Core အတွင်းမှာ Fault ဖြစ်တာနဲ့ ထွက်လာတဲ့ Gas ကို Detect လုပ်တယ်။

| Fault Condition | Buchholz Relay Action |
|---|---|
| Minor Fault (Gas ဖြည်းဖြည်းချင်း စုလာ) | Alarm Signal 🔔 (သတိပေးခြင်း) |
| Major Fault (Gas ရုတ်တရက် အများအပြား ထွက်လာ) | Trip Circuit Breaker ⚡ (ချက်ချင်း ဖြတ်ချခြင်း) |

➡️ **Buchholz Relay** က Transformer ရဲ့ “Fault Early Warning System” ဖြစ်ပါတယ်။

---

###  4. Temperature Protection (OTI / WTI)
> Winding Temperature (WTI) နဲ့ Oil Temperature (OTI) ကို စောင့်ကြည့်ပြီး  
> သတ်မှတ်အပူချိန်ထက် ကျော်လွန်ရင် Alarm/Trip ပေးတယ်။

- **Trip Setting:**  
  - Alarm → 85°C  
  - Trip → 95°C (Transformer ကို ချက်ချင်း ရပ်တန့်စေခြင်း)

---

###  5. Pressure Relief Device (PRD)
> Internal Fault ကြောင့် Oil က Gas အဖြစ်ပြောင်းပြီး ဖိအား (Pressure) များလွန်းလာတဲ့အခါ  
> ပေါက်ကွဲမှု (Explosion) မဖြစ်အောင် Relief လုပ်ပေးတဲ့ ကိရိယာ။

---

###  6. Earth Fault & Restricted Earth Fault (REF)
> Winding ကနေ Earth ကို Fault ဖြစ်တဲ့အခါ REF Relay ဖြင့် ချက်ချင်း သိရှိကာ  
> ကာကွယ်ပေးတယ်။

---

##  Transformer ထိန်းသိမ်းခြင်း (Maintenance)

Transformer Maintenance ကို မှန်မှန်ကန်ကန်လုပ်ခြင်းဟာ  
**အသက်ရှည်မှု (Life Span)** နဲ့ **ယုံကြည်စိတ်ချရမှု (Reliability)** ကို သိသိသာသာ တိုးမြှင့်ပေးပါတယ်။

---

###  1. Visual Inspection (နေ့စဉ်/အပတ်စဉ်)
- Oil Leakage ရှိမရှိ စစ်ဆေးပါ။  
- Breather Silica Gel ရဲ့ အရောင် (အပြာ/ဖြူ → ပန်းရောင်) ကို စစ်ဆေးပါ။  
- Temperature Gauge ကို စစ်ပြီး အပူချိန် ပုံမှန်ရှိမရှိ ကြည့်ပါ။  

---

###  2. Oil Tests (၆ လ တစ်ကြိမ် / တစ်နှစ် တစ်ကြိမ်)

| Test | ရည်ရွယ်ချက် (Purpose) | Standard (စံနှုန်း) |
|---|---|---|
| BDV (Breakdown Voltage) | Oil ရဲ့ လျှပ်ကာစွမ်းအား (Dielectric Strength) ကို တိုင်းတာခြင်း။ | ≥ 60 kV/2.5 mm |
| Moisture (PPM) | Oil ထဲမှာ ရေဘယ်လောက်ပါလဲ။ | < 30 ppm |
| Acidity Test | Oil ရဲ့ ဓာတ်ဆွေးမြေ့မှု (Deterioration) ကို စစ်ဆေးခြင်း။ | < 0.05 mg KOH/g |
| Dissolved Gas Analysis (DGA) | Transformer အတွင်း Internal Fault များကို ဓာတ်ငွေ့ဖြင့် ခွဲခြမ်းစိတ်ဖြာခြင်း။ | No H₂, CH₄, C₂H₂ peaks |

➡️ **DGA Test** ဟာ Transformer ရဲ့ “သွေးစစ်စစ်ဆေးမှု (Health Check Blood Test)” အနေနဲ့ အရေးကြီးဆုံး ဖြစ်ပါတယ်။

---

### 🔹 3. Electrical Tests (နှစ်စဉ်)
- **Insulation Resistance (IR Test):** Winding ရဲ့ လျှပ်ကာစွမ်းရည်ကို စစ်ခြင်း။  
- **Turns Ratio (TTR Test):** Voltage ပြောင်းလဲမှု အချိုးအစား မှန်မမှန် စစ်ဆေးခြင်း။  
- **Winding Resistance:** Winding ၃ ဖက်ရဲ့ Resistance ညီမညီ စစ်ခြင်း။  
- **Thermographic Scanning:** Infrared Camera နဲ့ Transformer ရဲ့ Hot Spot နေရာတွေကို ရှာဖွေခြင်း။  

---

##  လုပ်ငန်းခွင် ဥပမာ

Industrial Plant တစ်ခုမှာ Transformer Oil Moisture (PPM = 120) ရှိနေပြီး  
DGA Test မလုပ်ထားတာကြောင့် Partial Discharge ဖြစ်ပြီး Breakdown ဖြစ်ခဲ့တယ် ⚠️  

နောက်ပိုင်းမှာ Predictive Maintenance Introduce လုပ်ပြီး —  
- Online DGA Sensor ထည့်ခြင်း  
- IR Camera Weekly Check လုပ်ခြင်း  
အဖျော်ဖြေပြီး Transformer အသက် (Lifetime) ၁၀ နှစ်ထပ်တိုးနိုင်ခဲ့တယ် ✅  

---

##  မှတ်သားစရာများ

| အကြောင်းအရာ | ရိုးရှင်းသော အဓိပ္ပာယ် |
|---|---|
| Transformer | စနစ်ရဲ့ နှလုံးသား — Voltage ပြောင်းပေးသူ |
| Protection | Fault ဖြစ်ချိန်မှာ စနစ်ကို ကာကွယ်ပေးတဲ့ စနစ် |
| Buchholz Relay | Internal Fault Gas Detection Device |
| DGA Test | Transformer Health Check “သွေးစစ်စစ်ဆေးမှု” 🩸 |
| Maintenance | အသက်ရှည်ဖို့ လုပ်သင့်တဲ့ အာမခံအရေးကြီးချက် |

---

##  နိဂုံးချုပ်

**Transformer Protection & Maintenance** ဟာ Power System ရဲ့  
“Preventive Medicine (ကာကွယ်ရေးဆေး)” လို့ ဆိုလို့ရပါတယ်။  

> Protection မရှိရင် Fault တစ်ခုပဲဖြစ်လို့ စနစ်တစ်ခုလုံး ရပ်တတ်တယ်။  
> Maintenance မရှိရင် Fault မဖြစ်ခင်ကတည်းက စက်ပျက်စီးနိုင်တယ်။  

**ထိန်းသိမ်းခြင်းနဲ့ ကာကွယ်ခြင်းဟာ မျှော်လင့်ချက်တစ်ခုမဟုတ်ပါ —  
ဒါက စနစ်တစ်ခုရဲ့ အသက်ရှည်မှုအတွက် မဖြစ်မနေ လိုအပ်ချက်ပါ။ **

---

#TransformerProtection #Maintenance #PowerSystem #EngineerMyanmar #ElectricalSafety #IndustrialMaintenance #ElectricalBlogSeries