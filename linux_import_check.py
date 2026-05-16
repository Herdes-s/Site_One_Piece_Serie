import os
import re
import pathlib

root = pathlib.Path('src')
pattern = re.compile(r"import\s+[^'\"]+['\"]([^'\"]+)['\"]")
common_exts = ['', '.js', '.jsx', '.ts', '.tsx', '.css', '.png', '.jpg', '.jpeg', '.webp', '.svg']

issues = []

for path in root.rglob('*.jsx'):
    text = path.read_text(encoding='utf-8')
    for m in pattern.finditer(text):
        rel = m.group(1)
        if not rel.startswith('.'):
            continue
        found = False
        for ext in common_exts:
            candidate = (path.parent / (rel + ext)).resolve()
            if candidate.exists():
                found = True
                p = pathlib.Path(candidate)
                drive = p.drive
                cur = pathlib.Path(drive + os.sep)
                case_issue = False
                for part in p.parts[1:]:
                    if part == os.sep:
                        continue
                    entries = os.listdir(cur)
                    if part not in entries:
                        # existing path component doesn't match case exactly
                        issues.append((path.as_posix(), rel + ext, candidate.as_posix(), part))
                        case_issue = True
                        break
                    cur = cur / part
                break
        if not found:
            issues.append((path.as_posix(), rel, 'MISSING', ''))

print('TOTAL', len(issues))
for i in issues:
    print(i)
