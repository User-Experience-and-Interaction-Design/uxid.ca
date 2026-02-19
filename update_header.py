
import sys

file_path = "/Users/alineshati/Projects/UXID Website/Test/uxid.ca/index.html"
search_text = """            <h1 class="logo" style="font-family: 'Playfair Display', serif; font-size: 2.2rem; color: #A8DADC; margin: 0;">
                <a href="#home" style="color: #A8DADC; text-decoration: none; transition: color 0.3s;">UXID Lab</a>
            </h1>"""
replace_text = """            <div class="logo-container" style="display: flex; flex-direction: column;">
                <h1 class="logo" style="font-family: 'Playfair Display', serif; font-size: 2.2rem; color: #A8DADC; margin: 0; line-height: 1.1;">
                    <a href="#home" style="color: #A8DADC; text-decoration: none; transition: color 0.3s;">UXID Lab</a>
                </h1>
                <span class="lab-subtitle" style="font-size: 0.9rem; color: #F1FAEE; letter-spacing: 0.5px; opacity: 0.9; font-weight: 300;">User Experience and Interaction Design Lab</span>
            </div>"""

with open(file_path, "r") as f:
    content = f.read()

if search_text in content:
    new_content = content.replace(search_text, replace_text)
    with open(file_path, "w") as f:
        f.write(new_content)
    print("Successfully replaced content.")
else:
    print("Search text not found. First 100 chars of search text:")
    print(search_text[:100])
    print("-" * 20)
    print("Snippet found in file around 'h1 class=\"logo\"':")
    start_index = content.find('h1 class="logo"')
    if start_index != -1:
        print(content[start_index:start_index+200])
    else:
        print("Could not find 'h1 class=\"logo\"' in file.")
