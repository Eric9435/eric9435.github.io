---
layout: post
title: "Plumbing Building Services — Singapore Code Reference (SS 636, COPSSW, etc.)"
date: 2025-10-15
categories: [engineering, plumbing]
image: /assets/img/
description: "Plumbing Building Services — Singapore"
---

# 🧱 Plumbing Building Services — Singapore Code Reference (SS 636, COPSSW, etc.)

---

## 📘 Table of Contents
[Introduction](#introduction)
📌[1. Water Supply System (SS 636)](#1-water-supply-system-ss-636)
📌[2. Sanitary & Sewerage Drainage (COPSSW)](#2-sanitary--sewerage-drainage-copssw)
📌[3. Stormwater Drainage System](#3-stormwater-drainage-system)
📌[4. Fire Protection Water Systems](#4-fire-protection-water-systems)
📌[5. Special Systems](#5-special-systems)
📌[6. Inspection & Maintenance Checklist](#6-inspection--maintenance-checklist)
📌[7. Design Calculation Guide](#7-design-calculation-guide)
📌[8. Reference Codes and Standards](#8-reference-codes-and-standards)

---

## Introduction

This document provides a **comprehensive guide** to **plumbing building services** as per **Singapore standards**, including:
- SS 636:2018 — Code of Practice for Water Services  
- Code of Practice on Sewerage and Sanitary Works (COPSSW, 3rd Edition, 2025)  
- Code of Practice on Surface Water Drainage  
- SCDF Fire Code for hydrant and sprinkler systems  

It covers:
- Micro-level system breakdown  
- Design concepts and relevant formulas  
- Practical checklists  
- Calculation methodologies  

---

## 1. Water Supply System (SS 636)

### 1.1. Overview
Ensures the safe and adequate supply of potable water throughout a building. Governed by **SS 636:2018** and **PUB Water Service Works Regulations**.

### 1.2. Components

| Component | Design / Function | Key Code & Formula |
|------------|------------------|--------------------|
| **Incoming Water Main** | Connection from PUB mains with isolation valve and non-return valve. | Must meet PUB connection & approval. |
| **Storage Tanks** | Underground or rooftop; with access hatch, vent, overflow, and drain. | `V_total = V_domestic + V_fire + V_contingency` |
| **Pumps & Booster Sets** | Maintain pressure to upper floors. | `H_pump = H_static + H_friction + H_minor` |
| **Cold Water Distribution** | Network of pipes and valves. | `Q = A × v`  <br> Typical velocity ≤ 2.0 m/s. |
| **Hot Water System** | Storage heaters, circulation loops, thermostatic control. | Insulate piping, temperature ≤ 60 °C. |
| **Backflow Prevention** | Double-check valves, air gaps, RPZ valves. | Minimum air gap ≥ 25 mm or 2× pipe diameter. |
| **Water Meters** | Installed at main entry and sub-circuits. | Comply with PUB approved meter list. |

### 1.3. Common Formulae
- **Flow rate:**  
  `Q = A × v`  
  where `Q = flow (m³/s)`, `A = area (m²)`, `v = velocity (m/s)`  
- **Head loss (Hazen–Williams):**  
  `h_f = 10.67 × L × (Q^1.852) / (C^1.852 × d^4.87)`  
- **Pump head:**  
  `H = H_static + H_friction + H_minor`

---

## 2. Sanitary & Sewerage Drainage (COPSSW)

### 2.1. Overview
Handles removal of wastewater and soil discharge safely. Governed by **PUB COPSSW (3rd Edition 2025)**.

### 2.2. Key Systems

| Subsystem | Description | Design Rule |
|------------|--------------|--------------|
| **Soil Stack** | Vertical pipe for toilets and urinals. | Diameter 100 mm (min); vent every 10 storeys. |
| **Waste Stack** | For basins, sinks, showers. | Diameter 75 mm (typ.); use trap & vent. |
| **Vent Pipes** | Prevent trap siphonage. | Must terminate ≥ 300 mm above roof. |
| **Traps** | Maintain 50–75 mm water seal. | `Depth ≥ 50 mm` |
| **Branches** | Limit horizontal length before stack. | Max 2 m from trap to stack. |
| **Grease Trap** | Required for kitchens & F&B. | `V = Q × t` (Retention 30–60 min). |
| **Inspection Chambers / Manholes** | Every 30 m or at direction changes. | Min 600 mm × 900 mm. |

### 2.3. Testing
- **Water test:** 1.5 m head for 30 min (no leakage)  
- **Air test:** 38 mm water gauge for 15 min (no drop)

### 2.4. Materials
Approved materials include uPVC, HDPE, cast iron (coated), or vitrified clay — must comply with **SS 141**, **SS 213**, or **ISO 4427**.

---

## 3. Stormwater Drainage System

### 3.1. Overview
Designed to manage roof and surface runoff to prevent flooding and surcharge. Governed by **PUB Code of Practice on Surface Water Drainage**.

### 3.2. Design Components
- Roof gutters, downpipes  
- Ground drains, catch basins  
- Sump pits and storm pumps (if required)  
- Rainwater harvesting tanks (optional)  

### 3.3. Design Formula
**Rational Method:**  
`Q = C × I × A`  

Where:  
- `Q` = flow rate (m³/s)  
- `C` = runoff coefficient  
- `I` = rainfall intensity (mm/hr)  
- `A` = catchment area (ha)

### 3.4. Typical Values
| Surface Type | Runoff Coefficient (C) |
|---------------|------------------------|
| Roof (impervious) | 0.9 |
| Concrete pavement | 0.8 |
| Grass / soil | 0.4–0.5 |

---

## 4. Fire Protection Water Systems

### 4.1. Overview
Plumbing interface with fire-fighting networks per **SCDF Fire Code**.

### 4.2. Components
| Item | Description |
|------|--------------|
| Fire Water Tank | 45 m³ or as per fire demand. |
| Fire Pumps | Duty, standby & jockey pump. |
| Hydrants & Sprinklers | As per NFPA / SCDF layout. |
| Hose Reels | 30 m length, 19 mm hose diameter. |

### 4.3. Design
`Fire Demand = Flow × Duration`  
E.g., `1,800 L/min × 2 hours = 216 m³` total.

---

## 5. Special Systems

### 5.1. Greywater Recycling
- Treats shower/basin discharge for reuse (WC flushing, irrigation).  
- Design retention: 6–8 hours in treatment tanks.  

### 5.2. Irrigation Systems
- Sprinkler / drip lines sized for 2.5–3 bar pressure.  
- Uniformity coefficient ≥ 85%.  

### 5.3. Swimming Pool Plumbing
- Turnover rate: 4–6 hours.  
- Filter design:  
  `Filter area = Flow rate / 10 (m³/m²·h)`  

---

## 6. Inspection & Maintenance Checklist

| System | Inspection Items | Frequency |
|---------|------------------|------------|
| **Water Supply** | Tank cleaning, valve checks, leak test | 6 monthly |
| **Pumps** | Pressure & flow test, vibration, seal check | Monthly |
| **Sanitary Stack** | Trap seals, vent clearance, blockage | Quarterly |
| **Grease Trap** | Clean sludge & scum | Monthly |
| **Stormwater** | Gully cleaning, pump test | Quarterly |
| **Fire Pumps** | Flow test, auto start | Monthly |
| **Greywater Plant** | Water quality & disinfection | Monthly |

---

## 7. Design Calculation Guide

### 7.1. Pipe Sizing (Hazen–Williams)
`h_f = 10.67 × L × (Q^1.852) / (C^1.852 × d^4.87)`

Where:
- `h_f` = head loss (m)
- `L` = length (m)
- `Q` = flow (L/s)
- `C` = coefficient (e.g. 140 for copper)
- `d` = diameter (mm)

### 7.2. Pump Head Calculation
`H_total = H_static + H_friction + H_minor + Safety Margin`

### 7.3. Rainwater Flow
`Q = C × I × A`  
PUB Intensity Formula (Example):  
`I = 1000 × [A / (t + B)^n]`  *(values A, B, n per rainfall zone)*

### 7.4. Sanitary Flow (Fixture Units)
Convert fixture units → probable discharge:
| Fixture | FU | Typical Flow (L/s) |
|----------|----|--------------------|
| Water Closet | 4 | 2.5 |
| Basin | 1 | 0.15 |
| Shower | 2 | 0.2 |

Use tables in COPSSW for sizing stack & branch diameters.

---

## 8. Reference Codes and Standards

| Standard | Title | Authority |
|-----------|--------|------------|
| **SS 636:2018** | Code of Practice for Water Services | PUB / EnterpriseSG |
| **COPSSW (2025)** | Code of Practice on Sewerage and Sanitary Works | PUB |
| **Surface Water Drainage COP** | Code of Practice on Surface Water Drainage | PUB |
| **Fire Code (2018)** | Fire Safety & Shelter Department Code | SCDF |
| **SS 141, SS 213** | Standards for uPVC, CI, and HDPE pipes | EnterpriseSG |
| **BCA Regulations** | Building Control Act & Regulations | BCA |

---

## 📄 Notes
- All plumbing works in Singapore must be carried out by **Licensed Plumbers (LPs)** registered with PUB.  
- Water service works require PUB approval and submission of as-built drawings.  
- Always check for latest code updates via [https://www.pub.gov.sg/Professionals/Resources/Code-of-Practices](https://www.pub.gov.sg/Professionals/Resources/Code-of-Practices)

---

**End of Document**
