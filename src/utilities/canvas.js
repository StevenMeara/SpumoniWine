


export default {


    drawpage1: async (ctx, x, y, r, w = 5, color = 'blue', opacity = 1) => {


        // TODO @Marcel: Save context

        // Set color 
        ctx.fillColor = color;
        ctx.globalAlpha = opacity;

        // Draw arc
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);

        // Fill ? 
        // ctx.fillStyle = 'green';
        // ctx.fill();

        // Stroke
        ctx.lineWidth = w;
        ctx.strokeStyle = color;
        ctx.stroke();

        ctx.globalAlpha = 1;


        // TODO @Marcel: Restore context


    }


}