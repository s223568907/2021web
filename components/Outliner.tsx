import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Outliner.module.css';
import toTopIcon from '../public/outliner/toTop.svg';

// # Outliner or Table Of Content (TOC)

// Note:
// - Every part of the page should have class "page-part",
//   and have its id in the `outlinerList`.
// - The top nav should be <header/>.

type outlinerElem = {
  name: string;
  id: string;
};

// get and set the ActiveId from all .page-part with API IntersectionObserver
const useIntersectionObserver = (
  setActiveId: React.Dispatch<React.SetStateAction<string>>
) => {
  const partElementsRef: React.MutableRefObject<{
    [id: string]: IntersectionObserverEntry;
  }> = useRef({});

  useEffect(() => {
    const callback: IntersectionObserverCallback = (
      theList: IntersectionObserverEntry[]
    ) => {
      partElementsRef.current = theList.reduce(
        (
          map: { [id: string]: IntersectionObserverEntry },
          partElement: IntersectionObserverEntry
        ) => {
          map[partElement.target.id] = partElement;
          return map;
        },
        partElementsRef.current
      );

      const visibleParts: IntersectionObserverEntry[] = [];
      Object.keys(partElementsRef.current).forEach((key) => {
        const partElement = partElementsRef.current[key];
        if (partElement.isIntersecting) visibleParts.push(partElement);
      });

      const getIndexFromId = (id: string) =>
        partElements.findIndex((part) => part.id === id);

      if (visibleParts.length === 1) {
        setActiveId(visibleParts[0].target.id);
      } else if (visibleParts.length > 1) {
        const sortedVisibleHeadings = visibleParts.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-40% 0px -40% 0px', // "consider as visible" area
    });

    const partElements = Array.from(document.querySelectorAll('.page-part'));
    partElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export default function Outliner(props: {
  nameAndId: outlinerElem[];
}): JSX.Element {
  const outlinerList: outlinerElem[] = props.nameAndId;
  // [
  //   {
  //     name: '下载',
  //     id: 'download',
  //   },
  //   {
  //     name: '基本介绍',
  //     id: 'intro',
  //   },
  //   {
  //     name: '使用技巧',
  //     id: 'usage',
  //   },
  //   {
  //     name: 'Q&A',
  //     id: 'QA',
  //   },
  // ];

  const [activeId, setActiveId] = useState<string>('');
  useIntersectionObserver(setActiveId);

  function scrollTo(selector: string) {
    // smoothly scroll
    return (e: React.MouseEvent) => {
      e.preventDefault();
      document.querySelector(selector)?.scrollIntoView({
        behavior: 'smooth',
      });
    };
  }

  return (
    <>
      <nav
        className={styles.outliner}
        aria-label='Outliner or Table Of Content'>
        <ul>
          {outlinerList.map((value, index) => (
            <li
              className={value.id === activeId ? 'active' : ''}
              key={index.toString()}
              onClick={scrollTo(`#${value.id}`)}>
              <a href={`#${value.id}`}>{value.name}</a>
            </li>
          ))}
        </ul>
        <div onClick={scrollTo('header')} className={styles.toTop}>
          <div>
            <Image src={toTopIcon} height={34} width={34} />
          </div>
        </div>
      </nav>
    </>
  );
}
