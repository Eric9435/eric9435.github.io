---
layout: post
title: "Air-Conditioning & Mechanical Ventilation (ACMV) Building Services - Singapore"
date: 2025-10-15
categories: [engineering, acmv]
image: /assets/img/
description: "Air-Conditioning & Mechanical Ventilation (ACMV) Building Services — Singapore Code Reference (SS 553, SS 530, BCA Green Mark, ASHRAE)"
---

# ❄️ Air-Conditioning & Mechanical Ventilation (ACMV) Building Services — Singapore Code Reference (SS 553, SS 530, BCA Green Mark, ASHRAE)

---

## 📘 Table of Contents
1. [Introduction](#introduction)
2. [Applicable Codes and Standards](#applicable-codes-and-standards)
3. [1. ACMV System Overview](#1-acmv-system-overview)
4. [2. Air-Conditioning Systems](#2-air-conditioning-systems)
5. [3. Mechanical Ventilation Systems](#3-mechanical-ventilation-systems)
6. [4. Chilled Water System Design](#4-chilled-water-system-design)
7. [5. Ductwork Design and Air Distribution](#5-ductwork-design-and-air-distribution)
8. [6. Air Handling Units and FCUs](#6-air-handling-units-and-fcus)
9. [7. Filtration, IAQ, and Controls](#7-filtration-iaq-and-controls)
10. [8. Energy Efficiency and BCA Green Mark Requirements](#8-energy-efficiency-and-bca-green-mark-requirements)
11. [9. Testing, Commissioning & Balancing](#9-testing-commissioning--balancing)
12. [10. Maintenance and Inspection Checklist](#10-maintenance-and-inspection-checklist)
13. [11. Design Calculations and Formulas](#11-design-calculations-and-formulas)
14. [Appendix: Typical Schematics](#appendix-typical-schematics)
15. [References](#references)

---

## Introduction

The **ACMV (Air-Conditioning and Mechanical Ventilation)** system provides thermal comfort, indoor air quality (IAQ), and mechanical exhaust for various building spaces.  
It forms a key component of **Mechanical Building Services**, governed by Singapore’s **SS 553:2016 Code of Practice for Air-Conditioning and Mechanical Ventilation in Buildings**, and **BCA Green Mark** for energy efficiency.

---

## Applicable Codes and Standards

| Code / Standard | Title | Authority |
|------------------|--------|------------|
| **SS 553:2016** | Code of Practice for ACMV Systems | BCA / EnterpriseSG |
| **SS 554:2016** | Indoor Air Quality for Air-Conditioned Buildings | NEA / EnterpriseSG |
| **SS 530:2014** | Energy Efficiency Standard for Lighting and ACMV | BCA |
| **SS 553 Annex E** | Ventilation for Car Parks | BCA |
| **BCA Green Mark 2021** | Environmental Sustainability Standard | BCA |
| **ASHRAE 55 / 62.1 / 90.1** | International Thermal Comfort & Energy Standards | ASHRAE |
| **SCDF Fire Code** | Smoke Control & Pressurization | SCDF |

---

## 1. ACMV System Overview

### 1.1 System Objectives
- Maintain temperature and humidity within comfort range (22–26°C, 50–70% RH).  
- Provide fresh air ventilation per occupant load.  
- Remove contaminants, CO₂, and odors.  
- Ensure efficient energy performance.

### 1.2 Classification of Systems
| System Type | Description | Application |
|--------------|-------------|--------------|
| Centralized | Chiller + AHU + Ducting | Large buildings |
| Decentralized | Split / VRF Systems | Medium offices |
| Hybrid | Combination (e.g. DOAS + VRF) | Green buildings |
| Natural Ventilation | Openings & fans | Low-rise structures |

---

## 2. Air-Conditioning Systems

### 2.1 Types
| System | Description |
|---------|--------------|
| **Direct Expansion (DX)** | Refrigerant directly cools air via coil (VRF, Split). |
| **Chilled Water (CW)** | Water-cooled chillers circulate chilled water to AHUs/FCUs. |
| **District Cooling (DC)** | Central plant supplies chilled water to multiple buildings. |

### 2.2 Comfort Design Conditions
| Parameter | Recommended Range | Reference |
|------------|-------------------|-----------|
| Temperature | 23–25°C | SS 553 / ASHRAE 55 |
| Relative Humidity | 50–70% | SS 554 |
| Air Velocity | ≤ 0.25 m/s (indoor) | SS 553 |
| Fresh Air | ≥ 10 L/s/person | SS 553 / SS 554 |
| CO₂ Level | < 1000 ppm | SS 554 |

### 2.3 Heat Load Components
```math
Q_total = Q_sensible + Q_latent
```
Where:
- `Q_sensible = 1.2 × CFM × ΔT`
- `Q_latent = 0.68 × CFM × ΔW`

---

## 3. Mechanical Ventilation Systems

### 3.1 Purpose
- Provide air changes for non–air-conditioned spaces.
- Maintain acceptable indoor air quality.
- Remove contaminants and fumes.

### 3.2 Minimum Ventilation Rates (SS 553)
| Area | Air Changes per Hour (ACH) | Fresh Air (L/s per m²) |
|------|-----------------------------|------------------------|
| Toilet | 10 | 10 |
| Kitchen | 15 | 15 |
| Carpark | 6 | 3.5 |
| Plant Room | 6 | 5 |
| Basement | 6 | 5 |

### 3.3 Ventilation Formulas
```math
Q = ACH × Volume / 3600
```
or  
```math
Q = A × v
```
Where:
- `Q` = airflow (m³/s)
- `A` = duct cross-section (m²)
- `v` = velocity (m/s)

---

## 4. Chilled Water System Design

### 4.1 Typical Components
- Water-cooled chiller(s)
- Cooling tower(s)
- Condenser & chilled water pumps
- Air handling units (AHUs)
- Fan coil units (FCUs)
- Expansion tank, strainers, and control valves

### 4.2 Chilled Water Temperature Range
| Parameter | Value |
|------------|--------|
| Supply Temperature | 6–7°C |
| Return Temperature | 12–13°C |
| ΔT (temperature difference) | 6°C typical |

### 4.3 Chilled Water Flow
```math
Q = m × C_p × ΔT
```
where:
- `Q` = cooling load (kW)
- `m` = water flow rate (kg/s)
- `C_p` = 4.186 kJ/kg·°C
- `ΔT` = temperature difference (°C)

### 4.4 Pump Power
```math
P = (Q × H) / (367 × η)
```
Where:
- `H` = head (m)
- `η` = pump efficiency

---

## 5. Ductwork Design and Air Distribution

### 5.1 Duct Material
| Material | Use |
|-----------|-----|
| GI Sheet (galvanized steel) | Standard ducting |
| Aluminium | Lightweight / corrosion areas |
| Pre-insulated panel (PIR) | Energy efficient ducts |
| Stainless Steel | Kitchen exhausts, fume ducts |

### 5.2 Duct Sizing (Equal Friction Method)
```math
P_loss = f × (L/D) × (ρ × v² / 2)
```
Typical friction rate: **0.8–1.2 Pa/m**

### 5.3 Velocity Limits (SS 553)
| Location | Velocity (m/s) |
|-----------|----------------|
| Main supply duct | 6–8 |
| Branch duct | 4–6 |
| Diffuser outlet | 2–3 |
| Return / Exhaust | 4–6 |

### 5.4 Air Diffusion
- Ensure uniform air distribution.
- Noise level ≤ 45 dBA (office areas).
- Supply air diffusers to be adjustable for balancing.

---

## 6. Air Handling Units and FCUs

### 6.1 Air Handling Unit (AHU)
Key components:
- Filter section  
- Cooling coil  
- Supply fan  
- Drain pan  
- Mixing chamber  
- Access door

### 6.2 Fan Coil Unit (FCU)
- Terminal device in smaller zones.
- Connected to chilled water loop (2-pipe or 4-pipe).
- Fan speed control via thermostat or BMS.

### 6.3 Coil Load
```math
Q_coil = 1.2 × CFM × (h_in - h_out)
```
(h = enthalpy in kJ/kg)

---

## 7. Filtration, IAQ, and Controls

### 7.1 Filtration Standards
| Location | Filter Type | Efficiency |
|-----------|--------------|-------------|
| Office / Retail | MERV 8–11 | 90% dust removal |
| Cleanroom / Hospital | HEPA | 99.97% @ 0.3 μm |
| General AHU | Pre-filter + Fine filter | MERV 8 + MERV 13 |

### 7.2 Indoor Air Quality (IAQ)
Maintain per **SS 554:2016**:
- CO₂ ≤ 1000 ppm  
- TVOC ≤ 3 mg/m³  
- PM₂.₅ ≤ 35 μg/m³  
- Relative Humidity 50–70%

### 7.3 Control Systems
- **Building Management System (BMS)** integration.
- Temperature, humidity, and CO₂ sensors.
- Motorized dampers and VFDs (variable speed drives).
- Demand-controlled ventilation (DCV).

---

## 8. Energy Efficiency and BCA Green Mark Requirements

### 8.1 Performance Targets
| Parameter | Requirement | Standard |
|------------|-------------|-----------|
| **Chiller Plant COP** | ≥ 5.0 (kW/RT) | SS 530 / Green Mark |
| **AHU Fan Power** | ≤ 1.8 kW/m³/s | SS 530 |
| **Pump Power** | ≤ 15 W/gpm | SS 530 |
| **Cooling Tower Fan Power** | ≤ 1.1 kW/100 RT | SS 530 |

### 8.2 Control Strategies
- VFD on pumps and fans.
- AHU/FCU on demand (occupancy sensors).
- Condenser water reset by ambient WB temp.
- Heat recovery and energy reclaim.

### 8.3 Thermal Energy Storage (TES)
Optional for peak load management:
```math
E_storage = m × C_p × ΔT
```
Used for night charging and daytime discharge.

---

## 9. Testing, Commissioning & Balancing

| Test | Description | Standard |
|------|--------------|-----------|
| Air Balancing | Adjust airflow at diffusers | NEBB / TAB |
| Water Balancing | Adjust chilled/condenser water | SS 553 |
| Leak Test | Duct / pipe pressure test | SS 553 |
| Filter Test | Airflow & resistance | SS 554 |
| Noise Level | Sound level ≤ 45 dBA | SS 554 |
| Chiller Efficiency | COP verification | SS 530 |
| BMS Controls | Function & alarms | BCA Spec |

---

## 10. Maintenance and Inspection Checklist

| Component | Maintenance Task | Frequency |
|------------|------------------|------------|
| AHU / FCU | Clean coil, replace filters | Quarterly |
| Ducts | Inspect and clean | Annually |
| Chillers | Check oil, refrigerant, efficiency | Monthly |
| Cooling Tower | Clean sump, test water | Monthly |
| Pumps | Check seals, vibration | Monthly |
| Dampers | Functional test | 6-monthly |
| Controls & Sensors | Calibration | Yearly |

---

## 11. Design Calculations and Formulas

### 11.1 Cooling Load
```math
Q_total = U × A × ΔT + SHG + LHG + OA_load
```
Where:
- `U` = overall heat transfer coefficient  
- `A` = surface area  
- `ΔT` = temperature difference  
- `SHG` = solar heat gain  
- `LHG` = latent heat gain  

### 11.2 Air Quantity
```math
CFM = Q_sensible / (1.2 × ΔT)
```

### 11.3 Duct Velocity & Area
```math
A = Q / v
```

### 11.4 Static Pressure Loss
```math
SP_total = Σ(friction loss + dynamic loss)
```

### 11.5 Fan Power
```math
P_fan = (Q × ΔP) / (η × 1000)
```

---

## Appendix: Typical Schematics

### 1️⃣ Chilled Water System
```text
[Chiller] → [CHW Pump] → [AHU/FCU] → [Return Line] → [Cooling Tower]
```

### 2️⃣ Air Handling Unit Layout
```text
[Mixing Box] → [Filter] → [Cooling Coil] → [Fan] → [Ducting → Diffusers]
```

### 3️⃣ Ventilation System
```text
[Exhaust Fan] ← [Kitchen Hood] ← [Duct]  
[Fresh Air Fan] → [Air Diffusers]
```

### 4️⃣ Control Integration
```text
[BMS Panel]
 ├── Temperature Sensor
 ├── CO₂ Sensor
 ├── VFD Signal
 └── Alarm Feedback
```

---

## References

- **SS 553:2016** – Code of Practice for ACMV in Buildings  
- **SS 554:2016** – Indoor Air Quality Standard  
- **SS 530:2014** – Energy Efficiency Standard  
- **BCA Green Mark 2021** – Sustainability Framework  
- **ASHRAE 55 / 62.1 / 90.1** – Comfort, IAQ, and Energy Efficiency  
- **SCDF Fire Code** – Smoke Control & Pressurization  
- **NEBB / SMACNA** – Air & Water Balancing Standards  

---

**End of Document**