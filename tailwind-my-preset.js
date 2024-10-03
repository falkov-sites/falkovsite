module.exports = {
  safelist: [
    {
      pattern: /__gradient-(blue|green|orange|violet|sky)-withHover/
    },
    {
      pattern: /bg-__(blue|green|orange|violet|sky)-(200|300|400)/,
      pattern: /bg-__(blue|green|orange|violet|sky)/,
      variants: ['hover']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
        MarckScript: ['MarckScript'],
        Itim: ['Itim']
      },
      screens: {
        __screen_760: '760px'
      },
      colors: {
        __blue: 'hsl(var(--__blue))',
        __green: 'hsl(var(--__green))',
        __orange: 'hsl(var(--__orange))',
        __red: 'hsl(var(--__red))',
        __violet: 'hsl(var(--__violet))',
        __yellow: 'hsl(var(--__yellow))'
      },
      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' }
        },

        snowflakes: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg) ' },
          '20%': { transform: 'translateX(10px) translateY(20vh) rotate(60deg)' },
          '40%': { transform: 'translateX(40px) translateY(40vh) rotate(0deg)' },
          '60%': { transform: 'translateX(10px) translateY(60vh) rotate(60deg)' },
          '80%': { transform: 'translateX(40px) translateY(80vh) rotate(0deg)' },
          '100%': { transform: 'translateX(10px) translateY(100vh) rotate(60deg)' }
        },

        logo: {
          '0%': { transform: 'rotate-x(0deg)' },
          '10%': { transform: 'rotate(360deg)' },
          '90%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.2s linear',
        slideUp: 'slideUp 0.2s linear',

        snowflakes: 'snowflakes 5s linear infinite',
        logo: 'logo 20s linear 20s infinite'
      }
    }
  }
}
