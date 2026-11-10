import urllib.request
import re
import json

url = "https://drive.google.com/drive/folders/1PgC9n5NwIprN5Rwq_oi_iaiYDLr1zv3H"
req = urllib.request.Request(
    url,
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')

with open("gdrive_dump.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Saved gdrive_dump.html, length:", len(html))
