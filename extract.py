import re
with open('home/work.html', 'r', encoding='utf-8') as f:
    text = f.read()

titles = re.findall(r'data-title=\"(.*?)\"', text)
for t in titles:
    print(t)
