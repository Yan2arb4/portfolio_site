import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-canvas-dots',
  template: `<canvas #canvas></canvas>`,
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasDotsComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private dots: any = { nb: 0, distance: 0, d_radius: 0, array: [] };
  private mousePosition = { x: 0, y: 0 };
  private colorDot = Array(4).fill('rgb(110, 30, 157)').concat(['rgb(59, 120, 255)']);
  private animationId!: number;

  ngAfterViewInit(): void {
    this.setupCanvas();
    this.initializeDots();
    this.animate();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mousePosition.x = event.clientX - rect.left;
    this.mousePosition.y = event.clientY - rect.top;

    if (this.dots.array[0]) {
      this.dots.array[0].x = this.mousePosition.x;
      this.dots.array[0].y = this.mousePosition.y;
    }
  }

  @HostListener('window:resize')
  onResize() {
    cancelAnimationFrame(this.animationId);
    this.setupCanvas();
    this.initializeDots();
    this.animate();
  }

  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = this.canvasRef.nativeElement.parentElement as HTMLElement;

    const rect = parent.getBoundingClientRect(); // measure <app-intro> or <section.intro>

    canvas.width = rect.width;
    canvas.height = rect.height;

    this.ctx = canvas.getContext('2d')!;
    this.ctx.lineWidth = 0.3;
    this.ctx.strokeStyle = 'rgb(159, 48, 224)';
  }


  private initializeDots(): void {
    const width = this.canvasRef.nativeElement.width;
    this.dots = {
      nb: width > 1600 ? 600 :
          width > 1300 ? 575 :
          width > 1100 ? 500 :
          width > 800 ? 300 :
          width > 600 ? 200 : 100,
      distance: width > 1100 ? 55 : 0,
      d_radius: width > 1100 ? 250 : 0,
      array: [],
    };

    for (let i = 0; i < this.dots.nb; i++) {
      this.dots.array.push(this.createDot());
    }

    // Special styling for the first dot
    this.dots.array[0].radius = 1.5;
    this.dots.array[0].colour = '#51a2e9';
  }

  private createDot() {
    const canvas = this.canvasRef.nativeElement;
    const speedFactor: number = 0.25;
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() * 2 - 1) * speedFactor,
      vy: (Math.random() * 2 - 1) * speedFactor,
      radius: Math.random() * 1.5,
      colour: this.colorDot[Math.floor(Math.random() * this.colorDot.length)],
    };
  }

  private drawDots() {
    const ctx = this.ctx;
    const canvas = this.canvasRef.nativeElement;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const dot of this.dots.array) {
      const distance = Math.hypot(dot.x - this.mousePosition.x, dot.y - this.mousePosition.y);
      const distanceRatio = distance / (canvas.width / 1.7);
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = dot.colour.slice(0, -1) + `,${1 - distanceRatio})`;
      ctx.fill();
    }
  }

  private animateDots() {
    const canvas = this.canvasRef.nativeElement;

    for (let i = 1; i < this.dots.nb; i++) {
      const dot = this.dots.array[i];
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  }

  private drawLines() {
    const ctx = this.ctx;
    for (let i = 0; i < this.dots.nb; i++) {
      for (let j = 0; j < this.dots.nb; j++) {
        const d1 = this.dots.array[i];
        const d2 = this.dots.array[j];
        const dx = d1.x - d2.x;
        const dy = d1.y - d2.y;

        if (
          Math.abs(dx) < this.dots.distance &&
          Math.abs(dy) < this.dots.distance &&
          Math.abs(d1.x - this.mousePosition.x) < this.dots.d_radius &&
          Math.abs(d1.y - this.mousePosition.y) < this.dots.d_radius
        ) {
          const dotDistance = Math.hypot(d1.x - this.mousePosition.x, d1.y - this.mousePosition.y);
          let ratio = dotDistance / this.dots.d_radius - 0.3;
          if (ratio < 0) ratio = 0;

          ctx.beginPath();
          ctx.moveTo(d1.x, d1.y);
          ctx.lineTo(d2.x, d2.y);
          ctx.strokeStyle = `rgba(159, 48, 224, ${1 - ratio})`;
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  private animate = () => {
    this.drawDots();
    this.animateDots();
    this.drawLines();
    this.animationId = requestAnimationFrame(this.animate);
  };
}
