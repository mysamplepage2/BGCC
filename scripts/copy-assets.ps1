$srcBase = 'C:\Users\ragha\OneDrive\Desktop\bgcc design assets'
$destBase = 'C:\Users\ragha\.gemini\antigravity\scratch\bgcc\public'

New-Item -ItemType Directory -Force -Path "$destBase\assets\logos" | Out-Null
New-Item -ItemType Directory -Force -Path "$destBase\assets\team" | Out-Null
New-Item -ItemType Directory -Force -Path "$destBase\images\clients" | Out-Null
New-Item -ItemType Directory -Force -Path "$destBase\images\team" | Out-Null
New-Item -ItemType Directory -Force -Path "$destBase\fonts" | Out-Null

# Copy Hero Background
Copy-Item -Path "$srcBase\sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg" -Destination "$destBase\assets\hero-bg.jpg" -Force
Copy-Item -Path "$srcBase\sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg" -Destination "$destBase\hero-bg.jpg" -Force

# Copy Logos 1.png to 29.png
$imgDir = "$srcBase\BGCC_Website_Images-20260824T164035Z-1-001\BGCC_Website_Images"
1..29 | ForEach-Object {
    $file = "$imgDir\$_.png"
    if (Test-Path $file) {
        Copy-Item -Path $file -Destination "$destBase\assets\logos\$_.png" -Force
        Copy-Item -Path $file -Destination "$destBase\images\clients\$_.png" -Force
    }
}

# Copy Team Photos
$teamMap = @{
    'Aryan Gupta .png' = 'aryan-gupta.png'
    'Samyak Patel.png' = 'samyak-patel.png'
    'Gaurav Pawar.png' = 'gaurav-pawar.png'
    'Yashveer Sabharwal.png' = 'yashveer-sabharwal.png'
    'Vaibhav singhii.png' = 'vaibhav-singhi.png'
}

foreach ($orig in $teamMap.Keys) {
    $clean = $teamMap[$orig]
    $origPath = "$imgDir\$orig"
    if (Test-Path $origPath) {
        Copy-Item -Path $origPath -Destination "$destBase\assets\team\$clean" -Force
        Copy-Item -Path $origPath -Destination "$destBase\assets\team\$orig" -Force
        Copy-Item -Path $origPath -Destination "$destBase\images\team\$clean" -Force
        Copy-Item -Path $origPath -Destination "$destBase\images\team\$orig" -Force
    }
}

# Copy Fonts
Get-ChildItem -Path "$srcBase\sprat-main" -Recurse -Include *.woff2,*.woff,*.ttf,*.otf | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination "$destBase\fonts\$($_.Name)" -Force
}
Get-ChildItem -Path "$srcBase\Author_Complete" -Recurse -Include *.woff2,*.woff,*.ttf,*.otf | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination "$destBase\fonts\$($_.Name)" -Force
}

Write-Host "Asset copying completed successfully."
