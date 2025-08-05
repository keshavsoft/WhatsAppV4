@echo off
setlocal enabledelayedexpansion

REM --- STEP 1: Get next version folder ---
call :getNextVersion NEXT_VERSION
echo Next Version: %NEXT_VERSION%
mkdir Public\%NEXT_VERSION%
SET CommonRepoName=WhatsAppFrontEnd

REM Go to GulpAsUi and build
pushd ..\%CommonRepoName%
    call npm run WA
    popd

    REM Create target folder and copy built files
    mkdir "Public\%NEXT_VERSION%"
    xcopy "..\%CommonRepoName%\publicDir\WA" "Public\WhatsApp\%NEXT_VERSION%" /h /i /c /k /e /r /y >nul

    echo Done with %%~nxf

exit /b

:getNextVersion
setlocal enabledelayedexpansion
set "max=0"
for /d %%G in (Public\WhatsApp\V*) do (
    set "folder=%%~nxG"
    set "ver=!folder:V=!"
    REM Check if numeric
    for /f "delims=0123456789" %%a in ("!ver!") do set "ver=0"
    if !ver! gtr !max! set "max=!ver!"
)
set /a NEXT_VERSION=max+1
endlocal & set "%1=V%NEXT_VERSION%"
exit /b
