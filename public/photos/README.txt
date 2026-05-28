DROP-IN INSTRUCTIONS — PHOTOS

The site renders on-brand styled placeholders (dark + heat-glow + label) wherever
a photo will go. To swap a placeholder for a real photo:

1) Drop a JPG/WEBP/PNG into this folder.
2) In the page or component that renders the placeholder, find the <PhotoSlot ... />
   tag and pass a `src` prop pointing to your file. Example:

      <PhotoSlot
        src="/photos/hero.jpg"
        label="Hero shot — wings, drafts, and a game on the wall"
      />

Photo slots currently in use (search for these in the code):
  - /public/photos/hero.jpg                — homepage hero
  - /public/photos/catch-every-game.jpg    — homepage "Catch Every Game" section
  - /public/photos/menu-food.jpg           — /menu hub, Food card
  - /public/photos/menu-bar.jpg            — /menu hub, Bar card

Guidelines:
  - Real footage only. Do not use AI-generated images of people.
  - Dark, warm-lit, high-energy. Wings, drafts, screens, the crowd.
  - Mobile-first crop: keep the subject centered.
