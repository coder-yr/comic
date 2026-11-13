with open(r'f:\yash\projects\comic\.artifacts\stitch\ai-jungle-experience\05-comic-library\screen.preview.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
covers = re.findall(r'(?:<h[234][^>]*>([^<]+)</h[234]>).*?assets/(asset_[^.\'"]+\.jpg)', html, re.DOTALL)
print("Comic covers found:", len(covers))
for title, asset in covers[:15]:
    print(f"  {title.strip()[:35]} -> /assets/comics/{asset}")
