# Kalinga Mobile Application

## Actors

| Actor | Description |
|-------|-------------|
| **Senior User (Primary)** | The elderly Filipino who uses the app for health management, government service guidance, and family communication |
| **Family Member/Caregiver** | Relatives or caregivers who communicate with the senior, monitor their activities, and receive alerts |
| **Healthcare Provider** | Doctors, nurses, or medical professionals who may access shared health data or provide teleconsultation |
| **Government Service API** | External system that provides information about SSS, PhilHealth, and local senior citizen benefits |
| **System Administrator** | Manages user accounts, app content, and system maintenance |

***

## System Boundary

**Kalinga Mobile Application** — encompasses all functionalities accessible through the adaptive companion app interface.

***

## Use Cases by Module

### Health Management Module
| Use Case | Description |
|----------|-------------|
| UC01: Register Account | Senior creates a new account with personal and health information |
| UC02: Login to System | Authenticate using credentials or biometrics |
| UC03: Set Medicine Reminder | Schedule medication alerts with dosage and frequency |
| UC04: Receive Medicine Notification | Get audio/visual reminder when medication is due |
| UC05: Log Vital Signs | Record blood pressure, glucose levels, heart rate, etc. |
| UC06: View Health History | Browse past health logs in graph or list format |
| UC07: Share Health Data | Send health records to healthcare provider or family member |
| UC08: Schedule Doctor Appointment | Book a teleconsultation or in-person visit |
| UC09: Conduct Teleconsultation | Video call with healthcare provider |
| UC10: Emergency SOS | One-tap alert to notify emergency contacts with GPS location |

### Government Service Guidance Module
| Use Case | Description |
|----------|-------------|
| UC11: Browse Government Services | View list of available senior citizen benefits (SSS, PhilHealth, OSCA) |
| UC12: View Service Requirements | See step-by-step guide for availing a specific benefit |
| UC13: Track Application Status | Monitor progress of submitted applications |
| UC14: Download Forms | Access downloadable government forms |
| UC15: Locate Nearest Office | Find nearest SSS/PhilHealth/barangay office via map |

### Family Communication Module
| Use Case | Description |
|----------|-------------|
| UC16: Add Family Contact | Register family members to the contact list |
| UC17: Send Text Message | Compose and send simplified text messages |
| UC18: Initiate Voice Call | Make audio calls to family members |
| UC19: Initiate Video Call | Make video calls to family members |
| UC20: Share Photo/Video | Send media files to family contacts |
| UC21: Receive Message Notification | Get alerts for incoming messages |
| UC22: View Family Activity Feed | See updates shared by family members |

### Adaptive Interface Module
| Use Case | Description |
|----------|-------------|
| UC23: Adjust Accessibility Settings | Manually configure text size, contrast, button spacing |
| UC24: Enable Voice Assistant | Activate voice input and audio feedback |
| UC25: Auto-Adapt Interface | System automatically adjusts UI based on user interaction patterns |
| UC26: Switch Language | Change display language (Filipino, Taglish, English) |
| UC27: Enable Step-by-Step Guidance | Activate simplified navigation with visual guides |

### Account & Settings Module
| Use Case | Description |
|----------|-------------|
| UC28: Edit Profile | Update personal information |
| UC29: Manage Privacy Settings | Control data sharing preferences |
| UC30: Logout | Securely exit the application |
| UC31: Reset Password | Recover account access |
| UC32: View Help/Tutorial | Access onboarding guides and FAQs |

## Use Case Diagram

```mermaid
usecaseDiagram
    actor "Senior User" as Senior
    actor "Family/Caregiver" as Caregiver
    actor "Healthcare Provider" as Doctor
    actor "Govt Service API" as GovtAPI

    package "Kalinga Mobile App" {
        usecase "UC01: Register Account" as UC01
        usecase "UC02: Login to System" as UC02
        usecase "UC10: Emergency SOS" as UC10
        usecase "UC03: Set Medicine Reminder" as UC03
        usecase "UC04: Receive Medicine Notification" as UC04
        usecase "UC05: Log Vital Signs" as UC05
        usecase "UC09: Conduct Teleconsultation" as UC09
        usecase "UC11: Browse Govt Services" as UC11
        usecase "UC17: Send Text Message" as UC17
        usecase "UC25: Auto-Adapt Interface" as UC25
    }

    Senior --> UC01
    Senior --> UC02
    Senior --> UC10
    Senior --> UC03
    Senior --> UC05
    Senior --> UC09
    Senior --> UC11
    Senior --> UC17

    UC10 --> Caregiver : "Notify"
    UC09 --> Doctor
    UC11 --> GovtAPI : "Fetch Info"
    UC25 ..> UC02 : <<monitor>>

    %% Includes
    usecase "Authenticate User" as Auth
    UC02 ..> Auth : <<include>>
    UC09 ..> Auth : <<include>>
```
"# Kalinga" 
