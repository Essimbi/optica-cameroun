import os, glob, re

for filepath in glob.glob('src/app/**/*.scss', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # page-header padding
    content = re.sub(r'padding:\s*6rem\s+0\s+4rem;', 'padding: clamp(4rem, 10vw, 6rem) 0 clamp(2rem, 5vw, 4rem);', content)
    
    # page-title font-size
    content = re.sub(r'font-size:\s*3rem;', 'font-size: clamp(2rem, 5vw + 1rem, 3rem);', content)
    
    # section padding
    content = re.sub(r'\.section\s*\{\s*padding:\s*5rem\s+0;\s*\}', '.section { padding: clamp(3rem, 8vw, 5rem) 0; }', content)
    content = re.sub(r'\.section\s*\{\s*padding:\s*6rem\s+0;\s*\}', '.section { padding: clamp(3rem, 8vw, 6rem) 0; }', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Updated SCSS files.")
