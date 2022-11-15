module.exports = {  
  content: [   
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
         ],
  theme: {   
         extend: {
          backgroundImage: theme => ({
                   'Garage-register': "url('https://ae01.alicdn.com/kf/U05df7fdc115141b09f6600b1eca3b6725/Retro-Car-Garage-Restoration-And-Customization-Wall-Sticker-Decal-Sticker-Car-Garage-Workshop-Wall-Art-Decoration.jpg_Q90.jpg_.webp')",
                   'footer-texture': "url('/img/footer-texture.png')",
                    })
         },
         },  
  plugins: [],
}
