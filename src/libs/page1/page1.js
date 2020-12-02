
import canvasUtils from  '../../utilities/canvas';

// JS Library for page1 Animations

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default class page1r {

    constructor(canvas) {

        // Save canvas & context
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        // Attach canvas handlers
        this.canvas.addEventListener('click', e => this.handleClick(e, this));


        // page1 management
        this.currentpage1s = [];
        
        // Bind functions
        this.animate = this.animate.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.animate();

    }

    handleClick (e, page1r) {

        const x = e.clientX;
        const y = e.clientY;

        // Get canvas coord
        const rect = page1r.canvas.getBoundingClientRect();

        const relX = x - rect.x;
        const relY = y - rect.y;

        // Add page1 
        page1r.addpage1(relX, relY, 5, 100, getRandomColor());

    }


    // page1 management
    addpage1 (x, y, w, r, color) {


        // Create page1 and add to the list 
        const page1 = {

            // Growth rate = change in Radius / s 
            growthRate: 40,
            duration: 2,

            initial: {
                x,
                y,
                radius: r,
                width: w,
                t: Date.now(),
                color: color,
            },
            current: {
                x, 
                y,
                radius: r,
                width: w,
                t: Date.now(),
                color: color,
            }
            
        }

        this.currentpage1s.push(page1);



    }


    // Animate frame
    animate () {

        // Render / Update page1s

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const toRemove = [];

        this.currentpage1s.forEach((page1, idx) => {

            // Update radius
            const relT = (Date.now() - page1.initial.t) / 1000 
            page1.current.radius = page1.initial.radius + relT * page1.growthRate;
            const interp = relT / page1.duration;
            const fadeOut = 1 - interp;

            if (interp >= 1) {
                toRemove.push(idx);
                return;
            }

            canvasUtils.drawpage1(this.ctx, page1.current.x, page1.current.y, page1.current.radius, page1.width, page1.current.color, fadeOut);
        });

        // Remove as needed. 
        for (let idx of toRemove)
            this.currentpage1s.splice(idx, 1);
        
        // Request frame
        window.requestAnimationFrame(this.animate);


    }






}