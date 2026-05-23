"use client";

import { useEffect, useMemo, useState } from "react";

const phrases = [
  "Bridging Pharmacology With Data Science",
  "Drug safety focused",
  "Regulatory affairs curious",
  ];

export function TypingHeadline() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const phrase = useMemo(() => phrases[index % phrases.length], [index]);

  useEffect(() => {
    const doneTyping = text === phrase;
    const doneDeleting = text === "";
    const delay = doneTyping ? 1400 : deleting ? 34 : 58;

    const timeout = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting && deleting) {
        setDeleting(false);
        setIndex((value) => value + 1);
        return;
      }
      setText((current) =>
        deleting
          ? phrase.slice(0, Math.max(current.length - 1, 0))
          : phrase.slice(0, current.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, phrase, text]);

  return (
    <span className="inline-flex min-h-8 items-center text-cyan-700 dark:text-cyan-300">
      {text}
      <span className="ml-1 h-7 w-px animate-pulse bg-cyan-500" />
    </span>
  );
}
