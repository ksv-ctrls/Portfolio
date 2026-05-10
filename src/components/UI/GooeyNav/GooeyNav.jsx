import { useRef, useEffect, useState } from 'react';
import './GooeyNav.css';

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = element => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = element => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerHTML = element.innerHTML;
  };

  const handleClick = (e, index, href) => {
    const liEl = e.currentTarget.parentElement; // Need li for updateEffectPosition, wait we pass index, e.currentTarget is the 'a' tag. Wait, React Bits says e.currentTarget is the liEl! Wait, the onClick in the JSX is on the `a` tag! Let's change the onClick to the li element or keep as is. Actually, if onClick is on `a`, `e.currentTarget` is `a`. But the code says `const liEl = e.currentTarget;` so onClick should be on `li` or `liEl = e.currentTarget.parentElement`. Let's use `a` and pass `e` to `handleClick`, then `e.currentTarget.parentElement`. Or better yet, we can intercept the link behavior to smooth scroll later if we need to.
    
    // Smooth scroll logic can be implemented inside the component consuming GooeyNav or here.
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
      }
    }

    if (activeIndex === index) return;

    setActiveIndex(index);
    // e.currentTarget is the <a> tag, its parent is the <li> tag.
    const liElToUpdate = e.currentTarget.parentElement;
    updateEffectPosition(liElToUpdate);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');

      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (e, index, href) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e, index, href);
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      let currentIdx = activeIndex;

      items.forEach((item, index) => {
        const targetId = item.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the element is currently visible near the top
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentIdx = index;
          }
        }
      });

      if (currentIdx !== activeIndex) {
        setActiveIndex(currentIdx);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, items]);

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>
      <div className="gooey-nav-container" ref={containerRef}>
        <nav>
          <ul ref={navRef}>
            {items.map((item, index) => (
              <li key={index} className={activeIndex === index ? 'active' : ''}>
                <a href={item.href} onClick={e => handleClick(e, index, item.href)} onKeyDown={e => handleKeyDown(e, index, item.href)}>
                  <span className="flex items-center gap-1">
                      {item.icon && <span className="hidden lg:inline-block">{item.icon}</span>}
                      <span>{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;
