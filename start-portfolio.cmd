@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 22 or newer is required. Install it from https://nodejs.org/
  pause
  exit /b 1
)
if not exist "node_modules\vite\bin\vite.js" (
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed. Check your connection and try again.
    pause
    exit /b 1
  )
)
node node_modules\vite\bin\vite.js --host 127.0.0.1 --open
pause
