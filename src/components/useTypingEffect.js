import { useState, useEffect } from 'react';

const useTypingEffect = (words, delay = 200) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === words.length) return;

        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), delay * 3);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, delay);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, delay]);

    useEffect(() => {
        const blinkTimeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);

        return () => clearTimeout(blinkTimeout);
    }, [blink]);

    return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
};

export default useTypingEffect;
