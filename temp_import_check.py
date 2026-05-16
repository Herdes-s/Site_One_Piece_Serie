import os, re, pathlib
root = pathlib.Path('src')
pattern = re.compile(r"import\s+[^'\"]+['\"]([^'\"]+)['\"]")
issues = []
for path in root.rglob('*.jsx'):
    text = path.read_text(encoding='utf-8')
    for m in pattern.finditer(text):
        rel = m.group(1)
        if rel.startswith('.'):
            candidate = (path.parent / rel).resolve()
            if candidate.exists():
                p = pathlib.Path(candidate)
                drive = p.drive
                cur = pathlib.Path(drive + os.sep)
                for part in p.parts[1:]:
                    if part == os.sep:
                        continue
                    if not any(entry == part for entry in os.listdir(cur)):
                        issues.append((path.as_posix(), rel, candidate.as_posix(), part))
                        break
                    cur = cur / part
            else:
                issues.append((path.as_posix(), rel, 'MISSING', ''))
print('TOTAL', len(issues))
for i in issues:
    print(i)
