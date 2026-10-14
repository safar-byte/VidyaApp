<div align="center">

# 🏫 VidyaApp

**A cross-platform campus app for Vidya Academy of Science & Technology, Technical Campus — academics, admissions, placements and news in one place.**

![React Native](https://img.shields.io/badge/React_Native_0.70-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo_SDK_47-000020?style=flat-square&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

## Overview

VidyaApp gives students, parents and applicants quick access to information about **VAST-TC, Kilimanoor (Thiruvananthapuram)** — a campus of Thrissur-based Vidya Academy — from Android, iOS or the web.

## Screens

The home screen links to **Academics, Admission, Placements, Resources, News & Events, About Us** and **Contact**. Each section loads the matching page of the official college website inside an in-app WebView, so content stays current without an app update; Contact adds tap-to-call and tap-to-email.

An **offline notice** appears when the device loses connectivity (via `@react-native-community/netinfo`), and a fallback screen handles errors.

## Getting started

**Prerequisites:** Node.js 18, Expo CLI, Expo Go or an emulator.

```bash
git clone https://github.com/safar-byte/VidyaApp.git
cd VidyaApp
npm install
npm start
```

## Project structure

```
App.js                 entry point
routes/                HomeNavigation (stack navigator)
screens/               Home, Academics, Admission, Placement, Resource, NewsandEvent, Aboutus, Contact
components/            header, section buttons, offline notice, error screen
```

## Tech stack

React Native 0.70 · Expo SDK 47 · React Navigation 6 · react-native-webview · NetInfo

## Related

[VAST-TC](https://github.com/safar-byte/VAST-TC) — native Android app with year-wise placement records for the same campus.

## Author

**Muhammed Safar** — [@safar-byte](https://github.com/safar-byte)
