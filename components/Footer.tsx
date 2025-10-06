import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-center p-4 bg-light-primary dark:bg-dark-primary rounded-t-lg shadow-soft mt-8 no-print">
      <p>&copy; 2025 Keumouo Tadaha Diroil James</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/Diroil" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://linkedin.com/in/james-keumouo-332b992b5/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </div>
    </footer>
  );
}