@echo off
title Barber Shop Website Launcher
color 0A

echo.
echo ================================================
echo    PROFESSIONAL BARBER SHOP WEBSITE
echo ================================================
echo.
echo [1] Open Setup Guide
echo [2] Open Main Website (Home Page)
echo [3] Open About Page
echo [4] Open Services Page
echo [5] Open Appointment Page
echo [6] Open Contact Page
echo [7] Open Project in VS Code
echo [8] Exit
echo.
echo ================================================
echo.

set /p choice="Enter your choice (1-8): "

if "%choice%"=="1" start START-HERE.html
if "%choice%"=="2" start index.html
if "%choice%"=="3" start about.html
if "%choice%"=="4" start services.html
if "%choice%"=="5" start appointment.html
if "%choice%"=="6" start contact.html
if "%choice%"=="7" code .
if "%choice%"=="8" exit

echo.
echo Opening your selection...
timeout /t 2 >nul
