import os
import re

filepath = 'src/components/home/WhoWeAre.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific span tag
old_span = '<span className="text-[#BF8440] italic">BGCC.</span>'
new_span = '<span className="text-[#BF8440] italic text-[1.5em] leading-none block mt-2">BGCC.</span>'

content = content.replace(old_span, new_span)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
