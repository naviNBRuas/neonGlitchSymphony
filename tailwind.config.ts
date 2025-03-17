
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				psychedelic: {
					purple: '#9b02fc',
					pink: '#fe02fe',
					blue: '#02fefe',
					green: '#01ff89',
					yellow: '#ffef00',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'text-glitch': {
					'0%, 100%': { transform: 'skew(0deg, 0deg)' },
					'25%': { transform: 'skew(10deg, 2deg)' },
					'50%': { transform: 'skew(-15deg, -1deg)' },
					'75%': { transform: 'skew(5deg, -5deg)' }
				},
				'hue-rotate': {
					'0%': { filter: 'hue-rotate(0deg)' },
					'100%': { filter: 'hue-rotate(360deg)' }
				},
				'distort': {
					'0%': { transform: 'scale(1) skew(0deg)' },
					'25%': { transform: 'scale(1.05) skew(2deg)' },
					'50%': { transform: 'scale(0.95) skew(-2deg)' },
					'75%': { transform: 'scale(1.05) skew(1deg)' },
					'100%': { transform: 'scale(1) skew(0deg)' }
				},
				'scanline': {
					'0%': { transform: 'translateY(0)', opacity: '0.5' },
					'100%': { transform: 'translateY(100vh)', opacity: '0.5' }
				},
				'pulse-neon': {
					'0%, 100%': { 
						textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fe02fe, 0 0 20px #fe02fe, 0 0 25px #fe02fe, 0 0 30px #fe02fe' 
					},
					'50%': { 
						textShadow: '0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fe02fe, 0 0 15px #fe02fe, 0 0 20px #fe02fe, 0 0 25px #fe02fe' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'text-glitch': 'text-glitch 2s ease-in-out infinite',
				'hue-rotate': 'hue-rotate 10s linear infinite',
				'distort': 'distort 5s ease-in-out infinite',
				'scanline': 'scanline 2s linear infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
