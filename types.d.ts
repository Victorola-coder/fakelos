declare module "*.json";

interface SvgProps {
  className?: string;
  fill?: string;
}

interface ProjectDataProps {
  name: string;
  desc: string;
  lang: string;
  link: string;
}

interface ResumeProps {
  pdfUrl: string;
  fileName: string;
  buttonText: string;
}
