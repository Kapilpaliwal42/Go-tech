'use client';

import React from 'react';

// Define Types
type SubSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

type Section = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: SubSection[];
};

type TextBasicData = {
  title: string;
  sections: Section[];
};

const parseTextWithLinks = (text: string): React.ReactNode[] => {
  const linkRegex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    parts.push(
      <a
        key={match[2] + match.index}
        href={match[2]}
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[1]}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

interface TextBasicProps {
  data: TextBasicData;
}

const TextBasic = ({ data }: TextBasicProps) => {
  return (
    <div className="md-container py-12 m-5 text-secondary space-y-10 pb-10 max-w-4xl mx-auto">
      <h1 className="text-4xl text-[#2b428c] font-bold mb-8">{data.title}</h1>

      {data.sections.map((sec, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#2b428c] font-bold border-b pb-2">{sec.heading}</h2>

          {sec.paragraphs?.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed">
              {parseTextWithLinks(p)}
            </p>
          ))}

          {sec.list && (
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {sec.list.map((item, i) => (
                <li key={i}>{parseTextWithLinks(item)}</li>
              ))}
            </ul>
          )}

          {sec.subsections?.map((sub, j) => (
            <div key={j} className="ml-6 mt-6 space-y-3 border-l-4 border-gray-100 pl-4">
              {sub.heading && (
                <h3 className="text-xl font-semibold text-gray-800">{sub.heading}</h3>
              )}
              {sub.paragraphs.map((sp, k) => (
                <p key={k} className="text-gray-700">
                  {parseTextWithLinks(sp)}
                </p>
              ))}
              {sub.list && (
                <ul className="list-circle pl-6 space-y-1 text-gray-700">
                  {sub.list.map((li, l) => (
                    <li key={l}>{parseTextWithLinks(li)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextBasic;