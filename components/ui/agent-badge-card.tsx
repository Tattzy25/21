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
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c.005-.11.187-.154.24-.058c.254.45.686 1.111 1.177 1.412c.49.3 1.275.386 1.791.408c.11.005.154.186.058.24c-.45.254-1.111.686-1.412 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.176-1.411s-1.276-.386-1.792-.408c-.11-.005-.153-.187-.057-.24c.45-.254 1.11-.686 1.411-1.177c.301-.49.386-1.276.408-1.791m8.215-1c-.008-.11-.2-.156-.257-.062c-.172.283-.421.623-.697.793s-.693.236-1.023.262c-.11.008-.155.2-.062.257c.283.172.624.42.793.697s.237.693.262 1.023c.009.11.2.155.258.061c.172-.282.42-.623.697-.792s.692-.237 1.022-.262c.11-.009.156-.2.062-.258c-.283-.172-.624-.42-.793-.697s-.236-.692-.262-1.022M14.704 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.545.088-.806.796-1.327 2.213l-.134.366c-.149.403-.223.604-.364.752c-.143.148-.336.225-.724.38l-.353.141l-.248.1c-1.2.48-1.804.753-1.881 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.325.275.488.413.58.6c.094.187.107.403.134.835l.024.393c.093 1.52.14 2.28.634 2.542s1.108-.147 2.336-.966l.318-.212c.35-.233.524-.35.723-.381c.2-.032.402.024.806.136l.368.102c1.422.394 2.133.591 2.52.188c.388-.403.196-1.14-.19-2.613l-.099-.381c-.11-.419-.164-.628-.134-.835s.142-.389.365-.752l.203-.33c.786-1.276 1.179-1.914.924-2.426c-.254-.51-.987-.557-2.454-.648l-.379-.024c-.417-.026-.625-.039-.806-.135c-.18-.096-.314-.264-.58-.6m-5.869 9.324C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805" />
          </svg>
        </div>
        <div className="card-content">
          <p
            className={`title ${fontClass(modelFont)}`}
            style={{ fontSize: modelSizePx ? `${modelSizePx}px` : undefined, textAlign: modelAlign, fontFamily: modelFont === 'Geist' ? 'var(--font-geist-sans)' as any : undefined }}
          >
            {modelName}
          </p>
          {/* Capabilities from props (editable via form) */}
          {capabilities.map((cap, idx) => (
            <p
              key={idx}
              className={`description ${fontClass(capabilityFonts[idx] as Fonts)}`}
              style={{
                fontSize: capabilitySizesPx[idx] ? `${capabilitySizesPx[idx]}px` : undefined,
                textAlign: capabilityAligns[idx] || 'left',
                fontFamily: capabilityFonts[idx] === 'Geist' ? ('var(--font-geist-sans)' as any) : undefined,
              }}
            >
              {cap}
            </p>
          ))}
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
    justify-content: space-between;
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
    color: #ffffff;
    text-shadow: 0 0 8px #fff;
    transform: scale(1.03);
  }
  .card-container .card-content .card-btn:active {
    transform: scale(1);
  }`;

export default Card;
