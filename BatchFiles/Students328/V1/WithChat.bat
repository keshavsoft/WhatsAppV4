@echo off

xcopy .\FrontEnd\ForWebSocket\KeshavSoft .\public\Chat /h /i /c /k /e /r /y

cd ..\CrudFrontEndGulp
git pull

call gulp build:publicDir

xcopy .\publicDir ..\CrudBackEndWithMailAndWA\public\StudentsCRUD /h /i /c /k /e /r /y



cd ..\FrontEndForClients
git pull

call npm run Students

xcopy .\publicDir\Students ..\CrudBackEndWithMailAndWA\public\Students /h /i /c /k /e /r /y



cd ..\CrudBackEndWithMailAndWA
