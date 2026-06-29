import os
from PIL import Image

logo_path = 'public/img/logo.webp'
dest_dir = 'public'

if not os.path.exists(logo_path):
    print(f"Error: {logo_path} does not exist.")
    exit(1)

# Load the logo image
img = Image.open(logo_path)

# 1. Crop to the tightest bounding box of the actual circular logo content
# PIL's getbbox() finds the bounding box of non-zero (non-transparent) pixels.
bbox = img.getbbox()
if bbox:
    cropped_logo = img.crop(bbox)
    print(f"Cropped logo from {img.size} to tight circle bounds {cropped_logo.size}")
else:
    cropped_logo = img
    print("No transparency bounding box found, using original image.")

# 2. Helper function to resize and save
def save_icon(src_img, size, filename, bg_color=None):
    if bg_color:
        # Create solid background (e.g. for apple-touch-icon to prevent transparent corners)
        canvas = Image.new("RGBA", (size, size), bg_color)
        logo_resized = src_img.resize((size, size), Image.Resampling.LANCZOS)
        if logo_resized.mode == 'RGBA':
            canvas.paste(logo_resized, (0, 0), logo_resized)
        else:
            canvas.paste(logo_resized, (0, 0))
        out_img = canvas.convert("RGB")
    else:
        # Keep transparency
        out_img = src_img.resize((size, size), Image.Resampling.LANCZOS)
        
    out_img.save(os.path.join(dest_dir, filename), format='PNG' if not filename.endswith('.ico') else 'ICO')
    print(f"Saved {filename} ({size}x{size})")

# Generate favicon.ico (16x16 and 32x32 combined)
ico_16 = cropped_logo.resize((16, 16), Image.Resampling.LANCZOS)
ico_32 = cropped_logo.resize((32, 32), Image.Resampling.LANCZOS)
ico_32.save(os.path.join(dest_dir, 'favicon.ico'), format='ICO', sizes=[(16, 16), (32, 32)], append_images=[ico_16])
print("Saved favicon.ico")

# Generate apple-touch-icon.png (180x180) - Solid green bg to match the circle edges
save_icon(cropped_logo, 180, 'apple-touch-icon.png', bg_color="#064E3B")

# Generate Android icons (transparent corners)
save_icon(cropped_logo, 192, 'icon-192.png')
save_icon(cropped_logo, 512, 'icon-512.png')

print("All cropped circular favicons generated successfully!")
