@ECHO off
cls
:start
ECHO.

echo Genius API
echo -------------------

ECHO 1. Input song/artist
ECHO 2. Current Song

set choice=
set /p choice=Type the number that corresponds with the file you wish to open. 
if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' %CD%\start-input-lyrics.bat
if '%choice%'=='2' %CD%\start-get-current-song-lyrics.bat
ECHO "%choice%" is not valid, try again.
ECHO.
goto start
:start-input-lyrics.bat
start-input-lyrics.bat
goto start
pause