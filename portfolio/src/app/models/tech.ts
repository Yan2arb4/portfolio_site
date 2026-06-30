import { techType } from "./techType";

export class tech {
  constructor(
    public reference: string,
    public color: string,
    public name: string,
    public favorite: boolean,
    public type: techType,
    public show: boolean,
  ) {}
}

export const techSetList: tech[] = [
  new tech('devicon-angularjs-plain colored', '#c4473a', 'AngularJS', true, techType.FRAMEWORK, true),
  new tech('devicon-azuredevops-plain colored', '#0078d4', 'Azure DevOps', false, techType.TOOL, true),
  new tech('devicon-bash-plain colored', '#4EAA25', 'Bash', true, techType.TOOL, true),
  new tech('devicon-csharp-plain colored', '#9B4F96', 'C#', true, techType.LANGUAGE, true),
  new tech('devicon-css3-plain colored', '#264DE4', 'CSS3', true, techType.LANGUAGE, true),
  new tech('devicon-cpp-plain colored', '#004482', 'C++', false, techType.LANGUAGE, true),
  new tech('devicon-dot-net-plain colored', '#512BD4', 'ASP.NET Core', true, techType.FRAMEWORK, true),
  new tech('devicon-entityframeworkcore-line colored', '#68217A', 'Entity Framework', true, techType.FRAMEWORK, true),
  new tech('devicon-figma-plain colored', '#E34F26', 'Figma', true, techType.TOOL, true),
  new tech('devicon-html5-plain colored', '#E34F26', 'HTML5', true, techType.LANGUAGE, true),
  new tech('devicon-java-plain colored', '#5382a1', 'Java', true, techType.LANGUAGE, true),
  new tech('devicon-javascript-plain colored', '#F0DB4F', 'JavaScript', true, techType.LANGUAGE, true),
  new tech('devicon-microsoftsqlserver-plain colored', '#CC2927', 'SQL Server', true, techType.TOOL, true),
  new tech('devicon-mongodb-plain colored', '#47A248', 'MongoDB', false, techType.TOOL, true),
  new tech('devicon-mysql-plain colored', '#4479A1', 'MySQL', true, techType.TOOL, true),
  new tech('devicon-sass-plain colored', '#CD6799', 'SCSS', true, techType.LANGUAGE, true),
  new tech('devicon-typescript-plain colored', '#007acc', 'TypeScript', true, techType.LANGUAGE, true),
  new tech('devicon-ubuntu-plain colored', '#E95420', 'Ubuntu', true, techType.TOOL, true),
  new tech('devicon-react-plain colored', '#61DBFB', 'React', false, techType.FRAMEWORK, true),
  new tech('devicon-docker-plain colored', '#1D63ED', 'Docker', false, techType.TOOL, true),

  new tech('does-not-exist', '#D4AF37', '6502 Assembly', false, techType.LANGUAGE, true),
  new tech('does-not-exist', '#4b4b4b', 'W65C02 Microprocessor', false, techType.CONCEPT, true),
  new tech('does-not-exist', '#00A86B', 'Electronics', false, techType.CONCEPT, true),

  new tech('devicon-vscode-plain colored', '#0078d4', 'Visual Studio Code', true, techType.TOOL, true),
  new tech('devicon-c-plain colored', '#A8B9CC', 'C', true, techType.LANGUAGE, true),

  new tech('does-not-exist', '#025a9d', 'STM32 Nucleo Series', false, techType.TOOL, true),
  new tech('does-not-exist', '#5A4FCF', 'Zephyr RTOS', false, techType.FRAMEWORK, true),
  new tech('does-not-exist', '#4033cb', 'ZTest Framework', false, techType.TOOL, true),

  new tech('devicon-git-plain colored', '#e42a09', 'Git', true, techType.TOOL, true),
  new tech('devicon-git-plain colored', '#e42a09', 'GitHub', true, techType.TOOL, true),

  new tech('does-not-exist', '#6DB33F', 'Scrum Methodology', false, techType.CONCEPT, true),

  new tech('devicon-raspberrypi-plain colored', '#C51A4A', 'Raspberry Pi', false, techType.TOOL, true),
  new tech('devicon-nginx-plain colored', '#009900', 'Nginx', false, techType.TOOL, false),
  new tech('devicon-prometheus-plain colored', '#E6522C', 'Prometheus', false, techType.TOOL, false),
  new tech('devicon-grafana-plain colored', '#F46800', 'Grafana', false, techType.TOOL, false),
  new tech('does-not-exist', '#24A1C1', 'Traefik', false, techType.TOOL, false),
  new tech('does-not-exist', '#F00', 'Pi-hole', false, techType.TOOL, false),
  new tech('does-not-exist', '#0078d4', 'Cloudflare', false, techType.TOOL, false),
  new tech('does-not-exist', '#2B6CB0', 'Portainer', false, techType.TOOL, false),
  new tech('does-not-exist', '#EF5C00', 'TrueNAS', false, techType.TOOL, false),
  new tech('does-not-exist', '#00B4D8', 'Jellyfin', false, techType.TOOL, false),
  new tech('does-not-exist', '#4CAF50', 'Immich', false, techType.TOOL, false),
];

export function getTechByNames(names: string[]): tech[] {
  return names.map(name =>
    techSetList.find(t => t.name.toLowerCase() === name.toLowerCase()))
      .filter((t): t is tech => !!t);
}