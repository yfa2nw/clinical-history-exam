<#
.SYNOPSIS
  Screenshot a page of the site with headless Microsoft Edge, for visual checks.

.EXAMPLE
  .\tools\screenshot.ps1 -Page '#/exam/system?m=renal&s=hands'
  .\tools\screenshot.ps1 -Page '#/history/chronic?m=ckd' -Theme dark -Width 390 -Height 1600
  .\tools\screenshot.ps1 -Page '#/exam/focused?m=thyroid' -Seed "localStorage.setItem('che.practice.on','true')"

.NOTES
  Builds a temporary copy of index.html that points back at this folder (a <base> tag), so
  the page loads the real scripts. Pass the route in -Page, not by navigating inside the
  page: with the <base> tag, changing location.hash would load the folder instead.
  Headless Edge lays out narrow windows (under about 500 px) wider than asked, so phone-width
  shots can look cut off on the right; that is the browser, not the site.
#>
param(
  [string]$Page = '#/history/acute',
  [string]$Out = (Join-Path $env:TEMP 'che-screenshot.png'),
  [int]$Width = 1100,
  [int]$Height = 1400,
  [ValidateSet('light', 'dark')][string]$Theme = 'light',
  [string]$Seed = ''   # JavaScript run before the app starts (e.g. to set localStorage)
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$rootUrl = 'file:///' + ($root -replace '\\', '/') + '/'

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw 'Microsoft Edge not found.' }

$html = Get-Content (Join-Path $root 'index.html') -Raw -Encoding utf8
$html = $html.Replace('<head>', "<head><base href=`"$rootUrl`">")
$html = $html -replace '<html([^>]*)>', "<html`$1 data-theme=`"$Theme`">"
if ($Seed) {
  $html = $html.Replace('<script src="js/app.js"></script>', "<script>$Seed</script>`n  <script src=`"js/app.js`"></script>")
}

$harness = Join-Path $env:TEMP 'che-screenshot.html'
Set-Content -Path $harness -Value $html -Encoding utf8
$url = 'file:///' + ($harness -replace '\\', '/') + $Page
$Out = [System.IO.Path]::GetFullPath($Out)

Start-Process -FilePath $edge -Wait -ArgumentList @(
  '--headless=new', '--disable-gpu', '--hide-scrollbars',
  "--window-size=$Width,$Height", "--screenshot=$Out", $url
)
Write-Output $Out
