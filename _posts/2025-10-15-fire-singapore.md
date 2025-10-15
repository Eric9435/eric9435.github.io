---
layout: post
title: "Fire Protection Building Services - Singapore"
date: 2025-10-15
categories: [engineering, fire]
image: /assets/img/
description: "Fire Protection Building Services — Singapore Code Reference (SCDF Fire Code, SS 575, SS 532, SS 578, SS 536)"
---

# 🔥 Fire Protection Building Services — Singapore Code Reference (SCDF Fire Code, SS 575, SS 532, SS 578, SS 536)

---

## 📘 Table of Contents
1. [Introduction](#introduction)
2. [Applicable Codes and Standards](#applicable-codes-and-standards)
3. [1. Fire Protection System Overview](#1-fire-protection-system-overview)
4. [2. Fire Hydrant and Hosereel Systems](#2-fire-hydrant-and-hosereel-systems)
5. [3. Automatic Sprinkler System](#3-automatic-sprinkler-system)
6. [4. Fire Alarm and Detection System](#4-fire-alarm-and-detection-system)
7. [5. Fire Pump and Water Storage](#5-fire-pump-and-water-storage)
8. [6. Smoke Control and Pressurization Systems](#6-smoke-control-and-pressurization-systems)
9. [7. Portable Fire Extinguishers](#7-portable-fire-extinguishers)
10. [8. Special Suppression Systems](#8-special-suppression-systems)
11. [9. Testing and Commissioning](#9-testing-and-commissioning)
12. [10. Inspection and Maintenance Checklist](#10-inspection-and-maintenance-checklist)
13. [11. Calculation and Design Formulae](#11-calculation-and-design-formulae)
14. [Appendix: System Schematics](#appendix-system-schematics)
15. [References](#references)

---

## Introduction

Fire protection systems are designed to **detect, control, and extinguish fires** to protect life, property, and ensure safe evacuation.  
In Singapore, these systems must comply with the **Fire Safety and Shelter Department (SCDF) Fire Code 2018** and related Singapore Standards (SS).

This document outlines the **engineering principles**, **code requirements**, **system design**, **testing**, and **maintenance** of fire protection systems for all building types.

---

## Applicable Codes and Standards

| Code / Standard | Title | Authority |
|------------------|--------|------------|
| **SCDF Fire Code (2018)** | Code of Practice for Fire Precautions in Buildings | SCDF |
| **SS 575:2012+A1:2015** | Code of Practice for Fire Hydrant, Hosereel, and Sprinkler Systems | EnterpriseSG |
| **SS 578:2019** | Fire Alarm Systems | EnterpriseSG |
| **SS 532:2018** | Fire Safety of Building Materials and Construction | EnterpriseSG |
| **SS 536:2014** | Emergency Lighting and Exit Signs | EnterpriseSG |
| **SS 553** | Air-Conditioning and Mechanical Ventilation | BCA |
| **NFPA 10 / 13 / 72** | International Reference Standards | NFPA |

---

## 1. Fire Protection System Overview

### 1.1 Main Objectives
- Provide early **fire detection and warning**.
- Facilitate **safe evacuation**.
- Control or **extinguish fire** automatically or manually.
- Support **firefighting operations**.

### 1.2 Types of Fire Protection Systems
| Category | Systems Included |
|-----------|------------------|
| **Active Protection** | Sprinklers, Hydrants, Hosereels, Fire Alarm, Suppression Systems |
| **Passive Protection** | Fire-rated walls, doors, dampers, compartmentation |
| **Egress Systems** | Emergency lighting, exit signage, pressurized staircases |

### 1.3 Typical Fire Protection Layout
```text
[Fire Pump Room]───┬──→ [Sprinkler Riser]
                   ├──→ [Hosereel & Hydrant]
                   └──→ [Wet Riser / Landing Valve]
                          │
                    [Fire Hose Reel Cabinet]
                          │
                       [Fire Alarm Panel]
```

---

## 2. Fire Hydrant and Hosereel Systems

### 2.1 Design Reference
- **SS 575:2012+A1:2015** and **SCDF Fire Code 2018**.

### 2.2 System Components
| Component | Description |
|------------|-------------|
| Fire Pump | Delivers required flow and pressure to system |
| Hosereel | 30 m semi-rigid hose, 19 mm diameter |
| Hydrant | External or internal landing valve |
| Siamese Inlet | Fire engine connection for backup water |
| Pipework | Galvanized steel or ductile iron (min 100 mm dia.) |

### 2.3 Flow Requirements
| System | Flow (L/min) | Pressure (bar) |
|---------|---------------|----------------|
| Hosereel | 27 | 4 |
| Wet Riser | 900 (2 x 450) | 4.5 at topmost landing valve |
| Dry Riser | 900 (fire engine fed) | 4.5 |
| External Hydrant | 2,000 | 2.75 (at highest outlet) |

### 2.4 Hose Reel System Layout
```text
[Hosereel Cabinet]
 ├── 30 m Hose (19 mm)
 ├── Nozzle
 ├── Stop Valve
 └── Branch Pipe
```

---

## 3. Automatic Sprinkler System

### 3.1 System Types
| Type | Description |
|------|--------------|
| Wet Pipe | Always filled with water (default type) |
| Dry Pipe | Pressurized air in system (cold areas) |
| Pre-Action | Activated by detection system + sprinkler |
| Deluge | Open heads with deluge valve, controlled by detection |

### 3.2 Design Density (as per SS 575)
| Occupancy Type | Density (mm/min) | Design Area (m²) |
|----------------|------------------|------------------|
| Light Hazard | 2.5 | 260 |
| Ordinary Hazard Grp 1 | 5 | 260 |
| Ordinary Hazard Grp 2 | 7.5 | 260 |
| Extra Hazard | 12.5 | 260 |

### 3.3 Water Supply Duration
- Light / Ordinary Hazard: **30 minutes**  
- Extra Hazard: **60–90 minutes**

### 3.4 Sprinkler Head Coverage
| Type | Max Coverage (m²) | Max Spacing (m) |
|------|--------------------|----------------|
| Pendant / Upright | 12 | 4.6 |
| Sidewall | 9 | 3.7 |
| Extended Coverage | 21 | 6.1 |

### 3.5 Sprinkler Activation Formula
```math
RTI = √(τ × u)
```
Where:  
`RTI` = Response Time Index  
`τ` = time constant of thermal element  
`u` = air velocity (m/s)

---

## 4. Fire Alarm and Detection System

### 4.1 Reference
- **SS 578:2019** – Fire Alarm Systems  
- **SCDF Fire Code Chapter 6**

### 4.2 System Components
- Fire alarm control panel (FACP)
- Manual call points (MCP)
- Smoke/heat detectors
- Sounders / strobes
- Loop isolators and modules

### 4.3 Fire Alarm Zoning
- Each floor = separate zone.
- Max 2,000 m² per zone.
- Alarm delay ≤ 10 s.

### 4.4 Sample Loop Configuration
```text
[Fire Panel]
 ├── MCP ─ Smoke Detector ─ Sounder ─ End Module
 └── Loop Return
```

### 4.5 Cabling
- Fire-resistant cable (2-hour rating).
- Voltage drop ≤ 10%.

---

## 5. Fire Pump and Water Storage

### 5.1 System Overview
Fire pumps supply pressure to hydrant, hosereel, and sprinkler systems.

### 5.2 Types of Pumps
| Type | Use | Control |
|-------|------|----------|
| Electric Pump | Primary duty pump | Auto/manual |
| Diesel Pump | Backup supply | Auto start |
| Jockey Pump | Maintain pressure | Auto control |

### 5.3 Pump Head Calculation
```math
H_total = H_static + H_friction + H_residual
```

### 5.4 Fire Water Storage
| Building Type | Duration | Storage (min volume) |
|----------------|-----------|----------------------|
| Residential / Office | 30 min | 45 m³ |
| Industrial / Extra Hazard | 60 min | ≥ 180 m³ |

### 5.5 Pump Room Layout Example
```text
[Fire Tank]
   │
[Pump Suction Header]
   │
 ┌──────────────┐
 │ Electric Pump│
 │ Diesel Pump  │
 │ Jockey Pump  │
 └──────────────┘
   │
 [Discharge Header]
   │
 [Sprinkler & Hydrant Systems]
```

---

## 6. Smoke Control and Pressurization Systems

### 6.1 Objectives
- Maintain clear escape routes.
- Prevent smoke infiltration into protected zones.

### 6.2 Pressurization Requirements
| Space | Pressure Differential | Air Change Rate |
|--------|-----------------------|----------------|
| Staircase | 50 Pa | ≥ 10 ACH |
| Fire Lift Lobby | 25 Pa | ≥ 6 ACH |
| Refuge Floor | 50 Pa | ≥ 10 ACH |

### 6.3 Formula for Airflow
```math
Q = A × √(2 × ΔP / ρ)
```
Where:
- `A` = leakage area (m²)
- `ΔP` = pressure differential (Pa)
- `ρ` = air density (kg/m³)

---

## 7. Portable Fire Extinguishers

### 7.1 Classification (SS 578 / NFPA 10)
| Fire Class | Type of Fire | Suitable Agent |
|-------------|---------------|----------------|
| A | Ordinary combustibles | Water / Foam |
| B | Flammable liquids | Foam / CO₂ / Dry powder |
| C | Electrical | CO₂ / Dry powder |
| D | Metals | Special powder |
| F | Cooking oils | Wet chemical |

### 7.2 Location & Mounting
- At 15–20 m intervals along travel distance.
- Mounting height ≤ 1.5 m (top of handle).

### 7.3 Minimum Provision
| Area | Type | Quantity |
|-------|------|-----------|
| Office | 9L water or 4.5kg CO₂ | 1 per 200 m² |
| Electrical Room | CO₂ | 2 per room |
| Kitchen | Wet Chemical | 1 per hood |

---

## 8. Special Suppression Systems

| System | Agent | Application |
|---------|--------|--------------|
| **FM-200 (HFC-227ea)** | Clean agent gas | Data centers, control rooms |
| **NOVEC 1230** | Clean agent | Electrical rooms |
| **CO₂ System** | Gas | Industrial hazards |
| **Water Mist** | Fine water droplets | Turbine halls, museums |
| **Foam System** | AFFF / Protein foam | Oil & fuel storage |

### 8.1 Gas Flooding Concentration Formula
```math
C = (V_gas / V_room) × 100%
```
Maintain design concentration for at least **10 minutes** per SS 578.

---

## 9. Testing and Commissioning

| Test | Requirement | Standard |
|------|--------------|-----------|
| Hydrostatic Pressure Test | 1.5 × working pressure | SS 575 |
| Flow Test | Verify flow at farthest outlet | SS 575 |
| Pump Auto Start Test | Auto start under low pressure | SS 575 |
| Alarm Sound Test | ≥ 65 dBA ambient | SS 578 |
| Detector Sensitivity | ±20% rated value | SS 578 |
| Sprinkler Head Operation | Heat test on sample heads | SS 575 |
| Emergency Lighting | 1-hour test | SS 536 |

---

## 10. Inspection and Maintenance Checklist

| System | Inspection | Frequency |
|---------|-------------|------------|
| Fire Pumps | Visual check, auto-start test | Weekly |
| Water Tanks | Level, cleanliness | Monthly |
| Sprinkler Valves | Open/close test | Quarterly |
| Fire Alarm Panel | Loop test, log review | Monthly |
| Hosereel & Hydrant | Flow test | Quarterly |
| Portable Extinguishers | Pressure & seal check | Monthly |
| Smoke Control Fans | Operation test | Quarterly |
| Clean Agent System | Weight check, discharge test | Half-yearly |

---

## 11. Calculation and Design Formulae

### 11.1 Flow Rate (Sprinkler)
```math
Q = K × √P
```
Where:  
`Q` = Flow (L/min),  
`K` = Sprinkler coefficient,  
`P` = Pressure (bar)

### 11.2 Hydraulic Demand
```math
Q_total = Σ (Q × Area)
```

### 11.3 Friction Loss (Hazen–Williams)
```math
h_f = 10.67 × L × (Q^1.852) / (C^1.852 × d^4.87)
```

### 11.4 Pump Head
```math
H_total = H_static + H_friction + H_elevation
```

---

## Appendix: System Schematics

### 1️⃣ Fire Pump & Distribution
```text
[Fire Tank]
  │
  ├── [Jockey Pump]
  ├── [Electric Pump]
  ├── [Diesel Pump]
  │
  └── [Discharge Header]
          │
     ┌────┴────┐
     │         │
[Sprinkler] [Hydrant/Hosereel]
```

### 2️⃣ Sprinkler Layout
```text
(Main Sprinkler Riser)
     │
 ┌───┴───┐
 |        |
[Branch] [Branch]
 |        |
[Heads]  [Heads]
```

### 3️⃣ Fire Alarm System
```text
[Control Panel]
 ├── Smoke Detector
 ├── MCP (Manual Call Point)
 ├── Sounder/Strobe
 └── Loop Isolator
```

---

## References

- **SCDF Fire Code 2018** – Fire Safety & Shelter Department  
- **SS 575:2012+A1:2015** – Fire Hydrant, Hose Reel & Sprinkler Systems  
- **SS 578:2019** – Fire Alarm Systems  
- **SS 536:2014** – Emergency Lighting & Exit Signs  
- **SS 532:2018** – Fire Safety of Building Materials  
- **NFPA 10 / 13 / 72** – International Fire Protection Standards  
- **BCA Regulations** – Building Control and Compliance  

---

**End of Document**