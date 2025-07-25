@echo off

xcopy .\FrontEnd\ForWebsite .\public /h /i /c /k /e /r /y
xcopy .\FrontEnd\V1 .\public\V1 /h /i /c /k /e /r /y
