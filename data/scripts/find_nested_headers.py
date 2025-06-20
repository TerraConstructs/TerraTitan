#!/usr/bin/env python3
from pathlib import Path
import re, sys

h2 = re.compile(r'^##\s+Argument\s+Reference\s*$')
h3 = re.compile(r'^###\s+')
for md in Path('.').rglob('*.markdown'):
    inside = False
    for line in md.read_text(encoding='utf-8').splitlines():
        if h2.match(line):
            inside = True
            continue
        if inside and line.startswith('## ') and not h2.match(line):
            inside = False
        if inside and h3.match(line):
            print(md)
            break
