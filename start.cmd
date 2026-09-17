@echo off
rem Double-click this to run the library. Installs dependencies the first time.
cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing dependencies, one moment...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. Is Node.js installed?  https://nodejs.org
    pause
    exit /b 1
  )
)

call npm start
pause
