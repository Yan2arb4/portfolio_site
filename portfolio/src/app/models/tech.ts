import { techType } from "./techType";

export class tech {
  constructor(
    public reference: string,
    public color: string,
    public name: string,
    public favorite: boolean,
    public type: techType
  ) {}
}

export const techSetList: tech[] = [
  new tech('devicon-angularjs-plain colored', '#c4473a', 'AngularJS', true, techType.FRAMEWORK),
  new tech('devicon-azuredevops-plain colored', '#0078d4', 'Azure DevOps', false, techType.TOOL),
  new tech('devicon-bash-plain colored', '#4EAA25', 'Bash', true, techType.TOOL),
  new tech('devicon-csharp-plain colored', '#9B4F96', 'C#', true, techType.LANGUAGE),
  new tech('devicon-css3-plain colored', '#264DE4', 'CSS3', true, techType.LANGUAGE),
  new tech('devicon-dot-net-plain colored', '#512BD4', 'ASP.NET Core', true, techType.FRAMEWORK),
  new tech('devicon-entityframeworkcore-line colored', '#68217A', 'Entity Framework', true, techType.FRAMEWORK),
  new tech('devicon-figma-plain colored', '#E34F26', 'Figma', true, techType.TOOL),
  new tech('devicon-firebase-plain colored', '#FFCA28', 'Firebase', false, techType.TOOL),
  new tech('devicon-html5-plain colored', '#E34F26', 'HTML5', true, techType.LANGUAGE),
  new tech('devicon-java-plain colored', '#5382a1', 'Java', true, techType.LANGUAGE),
  new tech('devicon-javascript-plain colored', '#F0DB4F', 'JavaScript', true, techType.LANGUAGE),
  new tech('devicon-kotlin-plain colored', '#0095D5', 'Kotlin', true, techType.LANGUAGE),
  new tech('devicon-lua-plain colored', '#000080', 'Lua', false, techType.LANGUAGE),
  new tech('devicon-microsoftsqlserver-plain colored', '#CC2927', 'SQL Server', true, techType.TOOL),
  new tech('devicon-mongodb-plain colored', '#47A248', 'MongoDB', false, techType.TOOL),
  new tech('devicon-mysql-plain colored', '#4479A1', 'MySQL', true, techType.TOOL),
  new tech('devicon-sass-plain colored', '#CD6799', 'SCSS', true, techType.LANGUAGE),
  new tech('devicon-typescript-plain colored', '#007acc', 'TypeScript', true, techType.LANGUAGE),
  new tech('devicon-ubuntu-plain colored', '#E95420', 'Ubuntu', true, techType.TOOL),
  new tech('devicon-react-plain colored', '#61DBFB', 'React', false, techType.FRAMEWORK),
  new tech('devicon-docker-plain colored', '#1D63ED', 'Docker', false, techType.TOOL),

  new tech('does-not-exist', '#D4AF37', '6502 Assembly', false, techType.LANGUAGE),
  new tech('does-not-exist', '#4b4b4b', 'W65C02 Microprocessor', false, techType.CONCEPT),
  new tech('does-not-exist', '#00A86B', 'Electronics', false, techType.CONCEPT),

  new tech('devicon-vscode-plain colored', '#0078d4', 'Visual Studio Code', true, techType.TOOL),
  new tech('devicon-c-plain colored', '#A8B9CC', 'C Programming Language', true, techType.LANGUAGE),

  new tech('does-not-exist', '#025a9d', 'STM32 Nucleo Series', false, techType.TOOL),
  new tech('does-not-exist', '#5A4FCF', 'Zephyr RTOS', false, techType.FRAMEWORK),
  new tech('does-not-exist', '#4033cb', 'ZTest Framework', false, techType.TOOL),

  new tech('devicon-git-plain colored', '#e42a09', 'Git', true, techType.TOOL),
  new tech('devicon-git-plain colored', '#e42a09', 'GitHub', true, techType.TOOL),

  new tech('does-not-exist', '#6DB33F', 'Scrum Methodology', false, techType.CONCEPT),
];

export function getTechByNames(names: string[]): tech[] {
  return names.map(name =>
    techSetList.find(t => t.name.toLowerCase() === name.toLowerCase()))
      .filter((t): t is tech => !!t);
}