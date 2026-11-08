@echo off
title Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha - Backend Server
echo =====================================================================
echo 🕉️ Starting Spring Boot Backend Server...
echo =====================================================================
cd /d "%~dp0"
call .\mvnw.cmd spring-boot:run
pause
