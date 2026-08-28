import os
import re

def check_case_sensitivity():
    src_dir = r'C:\Users\ragha\.gemini\antigravity\scratch\bgcc\src'
    # Build a set of all actual file paths relative to src (lowercased key -> actual path)
    actual_files = {}
    for root, dirs, files in os.walk(src_dir):
        for f in files:
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, src_dir).replace('\\', '/')
            actual_files[rel_path.lower()] = rel_path

    # Check all imports in .ts and .tsx files
    errors = []
    for root, dirs, files in os.walk(src_dir):
        for f in files:
            if f.endswith('.ts') or f.endswith('.tsx'):
                full_path = os.path.join(root, f)
                with open(full_path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    
                # Find all imports starting with @/
                imports = re.findall(r'from [\'"]@/(.*?)[\'"]', content)
                for imp in imports:
                    # check with common extensions
                    found = False
                    expected_rel = None
                    for ext in ['.ts', '.tsx', '.json', '/index.ts', '/index.tsx', '']:
                        test_path = imp + ext
                        if test_path.lower() in actual_files:
                            found = True
                            expected_rel = actual_files[test_path.lower()]
                            break
                    
                    if found:
                        # Now check if case matches exactly
                        # But wait, expected_rel has the exact case from the filesystem.
                        # Does the import match the case?
                        # Let's compare case.
                        # We need the exact string in the import, but we appended extensions.
                        # Let's just compare the base part.
                        base_expected = expected_rel.replace('.tsx', '').replace('.ts', '').replace('.json', '')
                        if imp != base_expected:
                            errors.append(f"Case mismatch in {full_path}:\n  Imported: @/{imp}\n  Actual:   @/{base_expected}")
                    else:
                        errors.append(f"File not found for import @/{imp} in {full_path}")

    if errors:
        print("FOUND ERRORS:")
        for e in errors:
            print(e)
    else:
        print("All imports are perfectly case-matched!")

check_case_sensitivity()
