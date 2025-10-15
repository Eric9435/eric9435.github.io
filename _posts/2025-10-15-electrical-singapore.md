---
layout: post
title: "Electrical Building Services - Singapore"
date: 2025-10-15
categories: [engineering, electrical]
image: /assets/img/
description: "Electrical Building Services — Singapore Code Reference (SS 638, CP5, SS 551, SS 555, SCDF Fire Code)"

---

# ⚡ Electrical Building Services — Singapore Code Reference (SS 638, CP5, SS 551, SS 555, SCDF Fire Code)

---

## 📘 Table of Contents

1. [Introduction](#introduction)
2. [Applicable Standards and Codes](#applicable-standards-and-codes)
3. [1. High Voltage (HV) Distribution Systems](#1-high-voltage-hv-distribution-systems)
4. [2. Low Voltage (LV) Distribution Systems](#2-low-voltage-lv-distribution-systems)
5. [3. Power Factor Correction & Harmonics](#3-power-factor-correction--harmonics)
6. [4. Lighting Systems](#4-lighting-systems)
7. [5. Earthing and Lightning Protection](#5-earthing-and-lightning-protection)
8. [6. Emergency Power Systems](#6-emergency-power-systems)
9. [7. Extra-Low Voltage (ELV) Systems](#7-extra-low-voltage-elv-systems)
10. [8. Testing and Commissioning](#8-testing-and-commissioning)
11. [9. Inspection and Maintenance Checklist](#9-inspection-and-maintenance-checklist)
12. [10. Design Formulas & Calculation Guide](#10-design-formulas--calculation-guide)
13. [Appendix: Typical Single Line Diagrams](#appendix-typical-single-line-diagrams)
14. [References](#references)

---

## Introduction

This document serves as a **comprehensive technical reference** for **Electrical Building Services design, installation, and maintenance** in Singapore.  
It covers **High Voltage (HV)**, **Low Voltage (LV)**, and **Extra-Low Voltage (ELV)** systems in accordance with:
- **Singapore Standards (SS 638:2018, SS 551, CP5, SS 555)**
- **SCDF Fire Code**
- **IEC and IEEE standards** for design and safety.

The document is structured to support engineers, consultants, and inspectors in ensuring compliance, safety, and operational efficiency.

---

## Applicable Standards and Codes

| Code / Standard | Description | Authority |
|------------------|-------------|------------|
| **SS 638:2018** | Code of Practice for Electrical Installations | EnterpriseSG / EMA |
| **CP5:1998** | Code of Practice for Electrical Installations in Buildings | BCA / EMA |
| **SS 551:2019** | Code of Practice for Earthing | EnterpriseSG |
| **SS 555** | Code of Practice for Lightning Protection | EnterpriseSG |
| **SS 530** | Energy Efficiency Standard for Lighting | BCA |
| **SS 553** | Code of Practice for Air-Conditioning and Mechanical Ventilation | BCA |
| **SCDF Fire Code** | Fire Safety and Shelter Department | SCDF |
| **IEC 60364 / IEEE Std 141 / BS 7671** | International standards for reference | IEC / IEEE / BSI |

---

## 1. High Voltage (HV) Distribution Systems

### 1.1 Overview
High Voltage (typically **11 kV or 22 kV**) is used for incoming supply from the grid to large buildings, before stepping down to LV (400/230 V).

### 1.2 Key Components
- **Incoming Supply (SP PowerGrid / Substation)**
- **Ring Main Units (RMU)**
- **Transformers (Oil or Dry Type)**
- **HV Switchgear (SF₆, Vacuum)**
- **Protection Relays and CTs/VTs**
- **Earthing and Neutral Systems**

### 1.3 Typical Configuration
```text
[SP PowerGrid]──(11kV Feeder)──[RMU]──[Transformer]──[LV Switchboard]
```

### 1.4 Design Parameters
- Voltage: 11 kV or 22 kV (±10%)
- Frequency: 50 Hz
- Insulation level: 12/28 kV impulse
- Fault level: 25–31.5 kA (1s)

### 1.5 Transformer Sizing
```math
S = (√3 × V_L × I_L) / 1000
```
Where:
- `S` = kVA rating  
- `V_L` = line voltage (V)  
- `I_L` = load current (A)

---

## 2. Low Voltage (LV) Distribution Systems

### 2.1 Overview
The LV system distributes power to lighting, sockets, HVAC, lifts, and other building services.

### 2.2 Main Components
- **LV Switchboard (MDB)**
- **Sub-Main Distribution Boards (SMDB)**
- **Final Distribution Boards (DB)**
- **Busducts and Cables**
- **Circuit Breakers and MCCBs**

### 2.3 Typical LV Configuration
```text
[Transformer] → [MDB] → [SMDB] → [DB] → [Final Circuits]
```

### 2.4 Load Categorization
| Load Type | Typical Power Factor | Demand Factor | Example |
|------------|---------------------|----------------|----------|
| Lighting | 0.95 | 0.9 | Office lighting |
| Power sockets | 0.85 | 0.8 | General use |
| HVAC | 0.9 | 0.85 | Air handling units |
| Lifts / Escalators | 0.8 | 1.0 | Vertical transport |
| Fire services | 1.0 | 1.0 | Pumps, alarms |

### 2.5 Cable Sizing Formula
```math
I = (P) / (√3 × V × PF × η)
```
Where:
- `I` = Current (A)  
- `P` = Load (W)  
- `V` = Voltage (V)  
- `PF` = Power Factor  
- `η` = Efficiency  

### 2.6 Voltage Drop
```math
ΔV = I × (Rcosφ + Xsinφ)
```
Limit:
- ≤ 4% for lighting  
- ≤ 5% for other loads (SS 638)

---

## 3. Power Factor Correction & Harmonics

### 3.1 Power Factor (PF)
Defined as:
```math
PF = kW / kVA = cos(φ)
```

### 3.2 kVAR Required
To improve PF from PFi to PFf:
```math
Q = P × (tanφ_i - tanφ_f)
```
Where:
- `P` = Active Power (kW)  
- `Q` = Reactive Power (kVAR)

### 3.3 Harmonics Mitigation
- Use detuned reactors with capacitor banks.  
- Maintain THD ≤ 5% (IEEE 519).  
- Use active filters or harmonic conditioners.

---

## 4. Lighting Systems

### 4.1 Design Objectives
- Provide uniform, efficient illumination.  
- Meet visual comfort and safety requirements.

### 4.2 Illumination Levels (Lux)
| Area | Lux | Standard |
|------|-----|-----------|
| Office (general) | 500 | SS 530 |
| Corridors | 150 | SS 530 |
| Toilet | 200 | SS 530 |
| Car park | 100 | SS 530 |
| Plant room | 300 | SS 530 |

### 4.3 Lighting Load Calculation
```math
E = (Φ × UF × MF) / A
```
Where:
- `E` = Illuminance (lux)  
- `Φ` = Total luminous flux (lumens)  
- `UF` = Utilization factor  
- `MF` = Maintenance factor  
- `A` = Area (m²)

### 4.4 Energy Efficiency
- Use LED with ≥ 90 lm/W efficacy.  
- Install motion/daylight sensors.  
- Follow BCA Green Mark guidelines.

---

## 5. Earthing and Lightning Protection

### 5.1 Earthing (SS 551)
Purpose: Ensure safe fault clearance and minimize touch voltage.

**Earthing Resistance Target:**
- ≤ 1 Ω for LV systems  
- ≤ 0.5 Ω for substations

### 5.2 Earth Electrode Resistance Formula
```math
R = ρ / (2πL) × [ln(4L/d) - 1]
```
Where:
- `ρ` = Soil resistivity (Ω·m)  
- `L` = Rod length (m)  
- `d` = Rod diameter (m)

### 5.3 Lightning Protection (SS 555)
- Design based on rolling sphere or mesh method.  
- Down conductor: 25×3 mm Cu strip or 70 mm² Cu.  
- Earth termination network: interconnected electrodes.

**Basic Layout Example:**
```text
     [Air Terminal]
          │
    [Down Conductor]
          │
   [Earth Electrode]
```

---

## 6. Emergency Power Systems

### 6.1 Generator (DG)
- Provides backup for essential loads (fire pumps, lifts, lighting).  
- Rated typically for 1-hour operation.

**Sizing Formula:**
```math
S_gen = (Total Load kW / PF) × 1.25
```

### 6.2 Uninterruptible Power Supply (UPS)
- Provides short-term power for IT and life safety systems.  
- Types: Online Double Conversion, Line Interactive.

**Battery Backup Time:**
```math
t = (V × Ah × η) / (Load W)
```

---

## 7. Extra-Low Voltage (ELV) Systems

### 7.1 Overview
Systems operating at ≤ 50V AC or ≤ 120V DC.

### 7.2 Common ELV Systems
| System | Description |
|---------|--------------|
| Fire Alarm | Addressable / conventional, per SS 645 |
| CCTV | IP-based network cameras |
| Access Control | Card or biometric-based |
| PA/BGM | Public address / background music |
| Data Network | CAT6/CAT6A structured cabling |
| MATV / SMATV | Television distribution |
| Intercom | Audio/Video entry system |

### 7.3 Fire Alarm Layout Example
```text
[Smoke Detector]--[Loop Cable]--[MCP]--[Fire Panel]--[Sounder/Bell]
```

---

## 8. Testing and Commissioning

| Test | Description | Standard |
|------|--------------|-----------|
| Insulation Resistance | >1 MΩ for LV circuits | SS 638 |
| Earth Continuity | ≤ 1 Ω continuity | SS 551 |
| Loop Impedance | Confirm disconnection times | SS 638 |
| Polarity Test | Verify phase/neutral connection | SS 638 |
| Functional Test | Switches, breakers, ATS, etc. | Site spec |
| Generator Load Test | Full-load trial (≥1 hr) | OEM / SCDF |
| Lighting Level Test | Lux level validation | SS 530 |

---

## 9. Inspection and Maintenance Checklist

| System | Inspection Items | Frequency |
|---------|------------------|------------|
| HV Switchgear | SF₆ pressure, trip test | 6-monthly |
| Transformer | Oil / temp / winding resistance | Yearly |
| LV Panels | Breaker torque, IR test | Yearly |
| Lighting | Replace failed lamps, test sensors | Quarterly |
| Earthing | Measure earth resistance | Yearly |
| Generator | Load test, fuel, exhaust | Monthly |
| UPS | Battery voltage & discharge | Monthly |
| ELV Systems | Fire alarm, CCTV test | Monthly |

---

## 10. Design Formulas & Calculation Guide

### 10.1 Demand Load Calculation
```math
Total Load (kVA) = Σ (Connected Load × Demand Factor × Diversity Factor)
```

### 10.2 Short Circuit Current
```math
Isc = V / Z_total
```
Where `Z_total` = vector sum of transformer, cable, and system impedance.

### 10.3 Fault Level at Busbar
```math
Fault (kA) = (MVA × 1000) / (√3 × V)
```

### 10.4 Voltage Drop (Revisited)
```math
ΔV% = (mV/A/m × L × I) / V × 100
```

### 10.5 Cable Derating
Apply factors for:
- Ambient temperature  
- Grouping  
- Soil thermal resistivity  
- Cable depth

---

## Appendix: Typical Single Line Diagrams

### 1️⃣ HV Substation Layout
```text
[SP PowerGrid]
     │
  (11kV Feeder)
     │
   [RMU]───[Transformer #1]
     │           │
     │           └──→ [LV MDB]
     └───[Transformer #2]
                 │
                 └──→ [Emergency MDB]
```

### 2️⃣ LV Distribution
```text
[MDB]───[SMDB]───[DB]───(Lighting / Power / HVAC)
```

### 3️⃣ Earthing Network
```text
(Main Earth Bar)
     │
 ┌────┴────┐
 |         |
[Transformer Neutral] [Lightning Earth]
 |         |
 └────┬────┘
      │
  [Earth Electrode Grid]
```

---

## References

- **SS 638:2018** – Code of Practice for Electrical Installations  
- **SS 551:2019** – Earthing Code  
- **SS 555:2018** – Lightning Protection  
- **SS 530:2014** – Lighting Code  
- **CP5:1998** – Electrical Installations in Buildings  
- **IEEE Std 141 (Red Book)** – Electric Power Distribution  
- **IEC 60364** – Electrical Installations of Buildings  
- **SCDF Fire Code (2018)** – Fire Safety Design  

---

**End of Document**