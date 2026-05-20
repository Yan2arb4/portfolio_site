export class language {
  constructor(public reference: string, public color: string, public name: string, public favorite: boolean
  ) {}
}

export const languagesSetList: language[] = [
  new language('devicon-angularjs-plain colored', '#c4473a', 'AngularJS', true),
  new language('devicon-azuredevops-plain colored', '#0078d4', 'Azure DevOps', false),
  new language('devicon-bash-plain colored', '#4EAA25', 'Bash', true),
  new language('devicon-csharp-plain colored', '#9B4F96', 'C#', true),
  new language('devicon-css3-plain colored', '#264DE4', 'CSS3', true),
  new language('devicon-dot-net-plain colored', '#512BD4', 'ASP.NET Core', true),
  new language('devicon-entityframeworkcore-line colored', '#68217A', 'Entity Framework', true),
  new language('devicon-figma-plain colored', '#E34F26', 'Figma', true),
  new language('devicon-firebase-plain colored', '#FFCA28', 'Firebase', false),
  new language('devicon-html5-plain colored', '#E34F26', 'HTML5', true),
  new language('devicon-java-plain colored', '#5382a1', 'Java', true),
  new language('devicon-javascript-plain colored', '#F0DB4F', 'JavaScript', true),
  new language('devicon-kotlin-plain colored', '#0095D5', 'Kotlin', true),
  new language('devicon-lua-plain colored', '#000080', 'Lua', false),
  new language('devicon-microsoftsqlserver-plain colored', '#CC2927', 'SQL Server', true),
  new language('devicon-mongodb-plain colored', '#47A248', 'MongoDB', false),
  new language('devicon-mysql-plain colored', '#4479A1', 'MySQL', true),
  new language('devicon-sass-plain colored', '#CD6799', 'SCSS', true),
  new language('devicon-typescript-plain colored', '#007acc', 'TypeScript', true),
  new language('devicon-ubuntu-plain colored', '#E95420', 'Ubuntu', true),
  new language('devicon-react-plain colored', '#61DBFB', 'React', false),
  new language('devicon-docker-plain colored', '#1D63ED', 'Docker', false),
  new language('does-not-exist', '#D4AF37', '6502 assembly', false),
  new language('does-not-exist', '#4b4b4b', 'W65C02 Microprocessor', false),
  new language('does-not-exist', '#00A86B', 'Electronics', false),
  new language('devicon-vscode-plain colored', '#0078d4', 'Visual Studio Code', true),
  new language('devicon-c-plain colored', '#A8B9CC', 'C Programming Language', true),
  new language('does-not-exist', '#025a9d', 'STM32 Nucleo Series', false),
  new language('does-not-exist', '#B87333', 'Electronics', false),
  new language('does-not-exist', '#5A4FCF', 'Zephyr RTOS', false),
  new language('does-not-exist', '#4033cb', 'ZTest Framework', false),
  new language('devicon-git-plain colored', '#e42a09', 'Git', true),
  new language('devicon-git-plain colored', '#e42a09', 'GitHub', true),
  new language('does-not-exist', '#6DB33F', 'Scrum Methodology', false),
];


export function getLanguagesByNames(names: string[]): language[] {
  const matchedLanguages: language[] = [];

  for (const name of names) {
    const match = languagesSetList.find(lang => lang.name.toLowerCase() === name.toLowerCase());
    if (match) {
      matchedLanguages.push(match);
    }
  }
  return matchedLanguages;
}