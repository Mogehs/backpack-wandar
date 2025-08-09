# Build script for multiple domains
Write-Host "Building for all domains..." -ForegroundColor Green

# Clean previous builds
Write-Host "Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path "dist-sr") { Remove-Item -Recurse -Force "dist-sr" }
if (Test-Path "dist-de") { Remove-Item -Recurse -Force "dist-de" }
if (Test-Path "dist-en") { Remove-Item -Recurse -Force "dist-en" }

# Build Serbian version (default)
Write-Host "Building Serbian version..." -ForegroundColor Blue
npm run build:sr
if ($LASTEXITCODE -eq 0) {
    Set-Location "dist-sr"
    if (Test-Path "index-sr.html") { Rename-Item "index-sr.html" "index.html" }
    Set-Location ".."
    Write-Host "✅ Serbian build completed" -ForegroundColor Green
} else {
    Write-Host "❌ Serbian build failed" -ForegroundColor Red
    exit 1
}

# Build German version
Write-Host "Building German version..." -ForegroundColor Blue
npm run build:de
if ($LASTEXITCODE -eq 0) {
    Set-Location "dist-de"
    if (Test-Path "index-de.html") { Rename-Item "index-de.html" "index.html" }
    Set-Location ".."
    Write-Host "✅ German build completed" -ForegroundColor Green
} else {
    Write-Host "❌ German build failed" -ForegroundColor Red
    exit 1
}

# Build English version
Write-Host "Building English version..." -ForegroundColor Blue
npm run build:en
if ($LASTEXITCODE -eq 0) {
    Set-Location "dist-en"
    if (Test-Path "index-en.html") { Rename-Item "index-en.html" "index.html" }
    Set-Location ".."
    Write-Host "✅ English build completed" -ForegroundColor Green
} else {
    Write-Host "❌ English build failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 All builds completed successfully!" -ForegroundColor Green
Write-Host "📁 Serbian build: dist-sr (default language: Serbian)" -ForegroundColor Cyan
Write-Host "📁 German build: dist-de (default language: German)" -ForegroundColor Cyan
Write-Host "📁 English build: dist-en (default language: English)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Ready for deployment to respective domains:" -ForegroundColor Yellow
Write-Host "- dist-sr/ → backpackwander.rs" -ForegroundColor Gray
Write-Host "- dist-de/ → backpackwander.de" -ForegroundColor Gray
Write-Host "- dist-en/ → backpackwander.com" -ForegroundColor Gray
