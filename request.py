import requests
import json

r = requests.get('https://129.114.109.157/api/v1/web/guest/default/demo', verify=False)
data = r.json()
with open('out.json', 'w') as file:
	json.dump(data,file)