import base64, json, os, sys, urllib.request

prompt, ref, out = sys.argv[1], sys.argv[2], sys.argv[3]
content = [{"type": "text", "text": prompt}]
if ref:
    b64 = base64.b64encode(open(ref, "rb").read()).decode()
    content.append({"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{b64}"}})
body = {
    "model": "google/gemini-3-pro-image",
    "messages": [{"role": "user", "content": content}],
    "modalities": ["image", "text"],
    "image_config": {"aspect_ratio": "4:5"},
}
req = urllib.request.Request(
    "https://openrouter.ai/api/v1/chat/completions",
    data=json.dumps(body).encode(),
    headers={"Authorization": f"Bearer {os.environ['OPENROUTER_API_KEY']}", "Content-Type": "application/json"},
)
resp = json.load(urllib.request.urlopen(req, timeout=240))
msg = resp["choices"][0]["message"]
images = msg.get("images") or []
if not images:
    print("no image:", (msg.get("content") or "")[:300])
    sys.exit(1)
data = images[0]["image_url"]["url"].split(",", 1)[1]
open(out, "wb").write(base64.b64decode(data))
print("ok", out, "cost:", resp.get("usage", {}).get("cost"))
