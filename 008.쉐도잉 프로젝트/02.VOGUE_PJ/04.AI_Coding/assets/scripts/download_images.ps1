$jsonPath = "..\assets\data\item_data.json"
$data = Get-Content $jsonPath -Raw | ConvertFrom-Json
$imagesDir = "..\assets\images\items"
if (-not (Test-Path $imagesDir)) { New-Item -ItemType Directory -Path $imagesDir | Out-Null }

foreach ($item in $data) {
    if ($null -ne $item.imgSrc) {
        $uri = $item.imgSrc
        $ext = [System.IO.Path]::GetExtension($uri)
        if ([string]::IsNullOrEmpty($ext) -or $ext.Length -gt 5) { $ext = ".jpg" }
        $fileName = "item_$($item.idx)$ext"
        $localPath = Join-Path $imagesDir $fileName
        try {
            Invoke-WebRequest -Uri $uri -OutFile $localPath -UseBasicParsing -ErrorAction Stop
            Write-Host "Downloaded $uri -> $localPath"
        } catch {
            Write-Warning "Failed to download $uri: $_"
        }
        # update json to relative path
        $item.imgSrc = "./assets/images/items/$fileName"
    }
}

# save updated json
$data | ConvertTo-Json -Depth 10 | Out-File $jsonPath -Encoding UTF8
Write-Host "Updated JSON saved to $jsonPath"
