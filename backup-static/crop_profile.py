from PIL import Image, ImageDraw

im = Image.open('assets/linkedin_capture.png')

# The avatar in LinkedIn is completely within x: 280..520, y: 150..380
# Let's find the top, bottom, left, right extreme points of the avatar's white border
# The dark banner is above y: 260. The avatar top penetrates into the dark banner (which has dark pixels).
# So looking for the white arc in the banner (y between 160 and 240, x between 300 and 500):
white_arc = []
for y in range(160, 240):
    for x in range(300, 500):
        r, g, b = im.getpixel((x, y))[:3]
        if r > 240 and g > 240 and b > 240:
            white_arc.append((x, y))

# The topmost white point:
top_pt = min(white_arc, key=lambda p: p[1])

# The leftmost and rightmost points in the white arc:
left_pts = [p for p in white_arc if p[1] > 200]
left_x = min(p[0] for p in left_pts)
right_x = max(p[0] for p in left_pts)

center_x = (left_x + right_x) / 2
radius = (right_x - left_x) / 2
center_y = top_pt[1] + radius

print(f"Top: {top_pt}, Left x: {left_x}, Right x: {right_x}")
print(f"Computed Center: ({center_x:.1f}, {center_y:.1f}), Radius: {radius:.1f}")

# Circle fitting or manual refinement:
# Let's verify with radius:
cx = round(center_x)
cy = round(center_y)
r = round(radius - 5)

crop_box = (cx - r, cy - r, cx + r, cy + r)
avatar = im.crop(crop_box)

mask = Image.new('L', (r * 2, r * 2), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, r * 2 - 1, r * 2 - 1), fill=255)

output = Image.new('RGBA', (r * 2, r * 2), (0, 0, 0, 0))
output.paste(avatar, (0, 0), mask=mask)

# Save crisp 320x320
output_hq = output.resize((320, 320), Image.Resampling.LANCZOS)
output_hq.save('assets/perfil.png')

avatar_hq = avatar.resize((320, 320), Image.Resampling.LANCZOS)
avatar_hq.save('assets/perfil_square.png')
print("Saved refined assets/perfil.png")



