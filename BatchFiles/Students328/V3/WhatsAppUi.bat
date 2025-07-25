@echo off
cd ..\UIForWA
git pull

call npm run WA

xcopy .\publicDir\WA ..\CrudBackEndWithMailAndWA\public\WA /h /i /c /k /e /r /y

cd ..\CrudBackEndWithMailAndWA