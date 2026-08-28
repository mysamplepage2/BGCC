import json
import os

filepath = 'src/data/events.json'
with open(filepath, 'r', encoding='utf-8') as f:
    events = json.load(f)

# Find and update Case Consilium (id: 1)
# Find and remove HSBC (id: 6)

new_events = []
for event in events:
    if event['id'] == 1:
        event['image'] = '/assets/events/case-consilium.png'
        new_events.append(event)
    elif event['id'] == 6:
        # Skip HSBC
        continue
    else:
        new_events.append(event)

with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(new_events, f, indent=2)
