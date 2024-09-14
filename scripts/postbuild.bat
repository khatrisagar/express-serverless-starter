@REM Copy env, package.json and package-lock.json to dist 
xcopy package.json dist\ /Y
xcopy package-lock.json dist\ /Y
xcopy .env dist\ /Y