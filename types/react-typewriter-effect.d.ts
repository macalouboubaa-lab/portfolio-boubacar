declare module 'react-typewriter-effect' {
  import { ReactNode } from 'react';
  
  interface TypewriterProps {
    textStyle?: React.CSSProperties;
    startDelay?: number;
    cursorColor?: string;
    multiText?: string[];
    multiTextDelay?: number;
    typeSpeed?: number;
    loop?: boolean;
  }
  
  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}
