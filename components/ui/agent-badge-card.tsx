import React from 'react';
import styled from 'styled-components';
import { Orbitron, Audiowide, Rajdhani, Russo_One, Bebas_Neue, Space_Grotesk, Teko, Exo, Share_Tech_Mono } from 'next/font/google';

// Google fonts (module scope per next/font requirements)
const orbitron = Orbitron({ subsets: ['latin'], weight: ['700','800'], display: 'swap' })
const audiowide = Audiowide({ subsets: ['latin'], weight: '400', display: 'swap' })
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400','600','700'], display: 'swap' })
const russoOne = Russo_One({ subsets: ['latin'], weight: '400', display: 'swap' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'], display: 'swap' })
const teko = Teko({ subsets: ['latin'], weight: ['400','600','700'], display: 'swap' })
const exo = Exo({ subsets: ['latin'], weight: ['600','700','800'], display: 'swap' })
const shareTechMono = Share_Tech_Mono({ subsets: ['latin'], weight: '400', display: 'swap' })

type Fonts = 'Audiowide' | 'Orbitron' | 'Geist' | 'Rajdhani' | 'Russo One' | 'Bebas Neue' | 'Space Grotesk' | 'Teko' | 'Exo' | 'Share Tech Mono'

export interface AgentBadgeCardProps {
  providerName?: string
  modelName?: string
  capabilities?: string[]
  ctaLabel?: string
  providerFont?: Fonts
  modelFont?: Fonts
  ctaFont?: Fonts
  providerSizePx?: number
  modelSizePx?: number
  ctaSizePx?: number
  providerAlign?: 'left' | 'center' | 'right'
  modelAlign?: 'left' | 'center' | 'right'
  ctaAlign?: 'left' | 'center' | 'right'
  capabilityFonts?: Fonts[]
  capabilitySizesPx?: number[]
  capabilityAligns?: ('left'|'center'|'right')[]
  capabilityEffects?: Array<{ glow?: boolean; neon?: boolean; outline?: boolean; shadow?: boolean; uppercase?: boolean; gradient?: boolean }>
  capabilityColors?: string[]
}

// NOTE: Keep original layout/colors; only typography driven by props.
const Card = ({
  providerName = 'OpenAI',
  modelName = 'GPT-5',
  capabilities = ['Multimodal', 'Orchestration', 'Multi-Context'],
  ctaLabel = 'TAP TO TRY',
  providerFont = 'Audiowide',
  modelFont = 'Orbitron',
  ctaFont = 'Orbitron',
  providerSizePx = 14,
  modelSizePx = 22,
  ctaSizePx = 12,
  providerAlign = 'left',
  modelAlign = 'left',
  ctaAlign = 'center',
  capabilityFonts = [],
  capabilitySizesPx = [],
  capabilityAligns = [],
  capabilityEffects = [],
  capabilityColors = [],
}: AgentBadgeCardProps) => {
  const fontClass = (f?: Fonts) => {
    switch (f) {
      case 'Audiowide':
        return audiowide.className
      case 'Orbitron':
        return orbitron.className
      case 'Rajdhani':
        return rajdhani.className
      case 'Russo One':
        return russoOne.className
      case 'Bebas Neue':
        return bebas.className
      case 'Space Grotesk':
        return spaceGrotesk.className
      case 'Teko':
        return teko.className
      case 'Exo':
        return exo.className
      case 'Share Tech Mono':
        return shareTechMono.className
      case 'Geist':
      default:
        return ''
    }
  }
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="title-card">
          <p className={`brand ${fontClass(providerFont)}`} style={{ fontSize: providerSizePx ? `${providerSizePx}px` : undefined, textAlign: providerAlign, fontFamily: providerFont === 'Geist' ? 'var(--font-geist-sans)' as any : undefined }}>
            {providerName}
          </p>
          <img src="https://i.imgur.com/Pw1wGTW.png" alt="logo" className="badge-logo" />
        </div>
        <div className="card-content">
          <p
            className={`title ${fontClass(modelFont)}`}
            style={{ fontSize: modelSizePx ? `${modelSizePx}px` : undefined, textAlign: modelAlign, fontFamily: modelFont === 'Geist' ? 'var(--font-geist-sans)' as any : undefined }}
          >
            {modelName}
          </p>
          {/* Capabilities from props (editable via form) */}
          {capabilities.map((cap, idx) => {
            const fx = capabilityEffects[idx] || {}
            const color = capabilityColors[idx]
            const style: React.CSSProperties = {
              fontSize: capabilitySizesPx[idx] ? `${capabilitySizesPx[idx]}px` : undefined,
              textAlign: capabilityAligns[idx] || 'left',
              fontFamily: capabilityFonts[idx] === 'Geist' ? ('var(--font-geist-sans)' as any) : undefined,
              textTransform: fx.uppercase ? 'uppercase' : undefined,
            }
            if (fx.gradient) {
              style.background = 'linear-gradient(90deg, #7cc6ff 0%, #b388ff 100%)'
              ;(style as any).WebkitBackgroundClip = 'text'
              ;(style as any).WebkitTextFillColor = 'transparent'
            } else if (color) {
              style.color = color
            }
            if (fx.shadow) {
              style.textShadow = '0 1px 6px rgba(0,0,0,0.45)'
            }
            if (fx.glow) {
              style.textShadow = `${style.textShadow ? style.textShadow + ',' : ''} 0 0 8px rgba(80,160,255,0.45)`
            }
            if (fx.neon) {
              style.textShadow = `${style.textShadow ? style.textShadow + ',' : ''} 0 0 12px rgba(80,180,255,0.65), 0 0 18px rgba(120,120,255,0.4)`
            }
            if (fx.outline) {
              ;(style as any).WebkitTextStroke = '0.6px rgba(10,20,40,0.6)'
            }
            return (
              <p
                key={idx}
                className={`description ${fontClass(capabilityFonts[idx] as Fonts)}`}
                style={style}
              >
                {cap}
              </p>
            )
          })}
          <button
            className={`card-btn ${fontClass(ctaFont)}`}
            style={{ fontSize: ctaSizePx ? `${ctaSizePx}px` : undefined, textAlign: ctaAlign, fontFamily: ctaFont === 'Geist' ? 'var(--font-geist-sans)' as any : undefined }}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    width: 260px;
    background: linear-gradient(
      to top right,
      #975af4,
      #2f7cf8 40%,
      #78aafa 65%,
      #934cff 100%
    );
    padding: 4px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
  }
  .card-container .title-card {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    justify-content: flex-start;
    color: #fff;
  }
  .card-container .title-card p {
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    text-shadow: 2px 2px 6px #2975ee;
  }
  .card-container .title-card .brand {
    letter-spacing: 0.03em;
    flex: 1;
  }
  .card-container .title-card .badge-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
    margin-left: 8px;
    margin-right: 6px; /* nudge slightly away from the edge */
    opacity: 0.9;
    filter: drop-shadow(0 0 4px rgba(0,0,0,0.4));
  }

  .card-container .card-content {
    width: 100%;
    height: 100%;
    background-color: #161a20;
    border-radius: 30px;
    color: #838383;
    font-size: 12px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .card-container .card-content .title {
    font-weight: 800;
    color: #bab9b9;
    font-size: 22px;
    letter-spacing: 0.02em;
    text-transform: none;
    text-shadow: 0 0 6px rgba(0,0,0,0.35);
    line-height: 1.1;
    margin-bottom: 8px; /* space before first capability */
  }
  .card-container .card-content .description {
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 1.15;
  }
  .card-container .card-content .description:last-of-type {
    margin-bottom: 8px; /* space before CTA */
  }
  .card-container .card-content .plain :nth-child(1) {
    font-size: 36px;
    color: #fff;
  }
  .card-container .card-content .card-btn {
    background: linear-gradient(
      4deg,
      #975af4,
      #2f7cf8 40%,
      #78aafa 65%,
      #934cff 100%
    );
    padding: 6px 8px;
    border: none;
    width: 100%;
    border-radius: 8px;
    color: white;
    font-size: 12px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6);
    letter-spacing: 0.08em;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 0 6px rgba(0,0,0,0.35);
    margin-top: 8px; /* separate from last capability */
  }
  .card-container .card-content .card-btn:hover {
    color: #0f1115; /* darker to avoid white-on-white blur */
    text-shadow: 0 0 6px rgba(255,255,255,0.4);
    transform: scale(1.03);
  }
  .card-container .card-content .card-btn:active {
    transform: scale(1);
  }`;

export default Card;
