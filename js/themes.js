// 像素风主题系统 - 程序化绘制所有装饰元素
const PixelThemes = {
    drawPixel(ctx, x, y, size, color) {
        ctx.fillStyle = color;
        ctx.fillRect(Math.floor(x), Math.floor(y), size, size);
    },

    drawPixelRect(ctx, x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h));
    },

    drawStar(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p, p * 5);
        ctx.fillRect(x, y + p, p * 5, p);
        ctx.fillRect(x + p, y + p * 2, p * 3, p);
        ctx.fillRect(x + p * 2, y + p, p, p * 3);
    },

    drawHeart(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p * 2, p);
        ctx.fillRect(x + p * 4, y, p * 2, p);
        ctx.fillRect(x, y + p, p * 7, p);
        ctx.fillRect(x, y + p * 2, p * 7, p);
        ctx.fillRect(x + p, y + p * 3, p * 5, p);
        ctx.fillRect(x + p * 2, y + p * 4, p * 3, p);
        ctx.fillRect(x + p * 3, y + p * 5, p, p);
    },

    drawClover(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p * 2, y, p * 2, p * 2);
        ctx.fillRect(x + p * 4, y + p * 2, p * 2, p * 2);
        ctx.fillRect(x + p * 2, y + p * 4, p * 2, p * 2);
        ctx.fillRect(x, y + p * 2, p * 2, p * 2);
        ctx.fillRect(x + p * 2, y + p * 2, p * 2, p * 2);
        ctx.fillRect(x + p * 3, y + p * 5, p, p * 3);
    },

    drawCoin(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p * 4, p);
        ctx.fillRect(x, y + p, p * 6, p);
        ctx.fillRect(x, y + p * 2, p, p * 2);
        ctx.fillRect(x + p * 5, y + p * 2, p, p * 2);
        ctx.fillRect(x, y + p * 4, p * 6, p);
        ctx.fillRect(x + p, y + p * 5, p * 4, p);
        ctx.fillStyle = '#B8860B';
        ctx.fillRect(x + p * 2, y + p * 2, p * 2, p * 2);
    },

    drawBubble(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p * 2, p);
        ctx.fillRect(x, y + p, p * 4, p);
        ctx.fillRect(x, y + p * 2, p * 4, p * 2);
        ctx.fillRect(x, y + p * 4, p * 4, p);
        ctx.fillRect(x + p, y + p * 5, p * 2, p);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillRect(x + p, y + p * 2, p, p);
    },

    drawSeaweed(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p * 2, y, p * 2, p);
        ctx.fillRect(x + p, y + p, p * 2, p);
        ctx.fillRect(x, y + p * 2, p * 2, p);
        ctx.fillRect(x + p, y + p * 3, p * 2, p);
        ctx.fillRect(x + p * 2, y + p * 4, p * 2, p);
        ctx.fillRect(x + p * 3, y + p * 5, p * 2, p);
        ctx.fillRect(x + p * 2, y + p * 6, p * 2, p * 2);
    },

    drawShell(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p * 2, y, p * 4, p);
        ctx.fillRect(x + p, y + p, p * 6, p);
        ctx.fillRect(x, y + p * 2, p * 8, p);
        ctx.fillRect(x, y + p * 3, p * 8, p);
        ctx.fillRect(x + p, y + p * 4, p * 6, p);
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        ctx.fillRect(x + p * 3, y + p, p, p * 3);
        ctx.fillRect(x + p * 5, y + p, p, p * 3);
    },

    drawFish(ctx, x, y, s, color, eyeColor) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p * 2, y + p, p * 4, p * 2);
        ctx.fillRect(x + p, y + p * 2, p * 6, p * 2);
        ctx.fillRect(x + p * 2, y + p * 4, p * 4, p);
        ctx.fillRect(x, y, p * 2, p);
        ctx.fillRect(x, y + p, p, p * 3);
        ctx.fillRect(x, y + p * 4, p * 2, p);
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + p * 5, y + p * 2, p, p);
        ctx.fillStyle = eyeColor || '#000';
        ctx.fillRect(x + p * 5, y + p * 2, p, p);
    },

    drawDolphin(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p * 2, y + p * 2, p * 5, p * 2);
        ctx.fillRect(x + p, y + p * 3, p * 7, p * 2);
        ctx.fillRect(x + p * 2, y + p * 5, p * 5, p);
        ctx.fillRect(x + p * 6, y + p, p * 2, p);
        ctx.fillRect(x + p * 7, y + p * 2, p * 2, p * 2);
        ctx.fillRect(x, y + p, p * 2, p);
        ctx.fillRect(x, y + p * 4, p * 2, p);
        ctx.fillRect(x + p * 4, y, p, p * 2);
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + p * 7, y + p * 2, p, p);
        ctx.fillStyle = '#000';
        ctx.fillRect(x + p * 7, y + p * 2, p, p);
        ctx.fillStyle = '#E8E8E8';
        ctx.fillRect(x + p * 3, y + p * 4, p * 3, p);
    },

    drawRocket(ctx, x, y, s, bodyColor) {
        const p = s;
        ctx.fillStyle = bodyColor || '#E8E8E8';
        ctx.fillRect(x + p * 2, y + p * 2, p * 4, p * 5);
        ctx.fillStyle = '#FF4444';
        ctx.fillRect(x + p * 3, y, p * 2, p);
        ctx.fillRect(x + p * 2, y + p, p * 4, p);
        ctx.fillStyle = '#4488FF';
        ctx.fillRect(x + p * 3, y + p * 3, p * 2, p * 2);
        ctx.fillStyle = '#88BBFF';
        ctx.fillRect(x + p * 3, y + p * 3, p, p);
        ctx.fillStyle = '#FF4444';
        ctx.fillRect(x, y + p * 5, p * 2, p * 2);
        ctx.fillRect(x + p * 6, y + p * 5, p * 2, p * 2);
        ctx.fillStyle = '#FF8800';
        ctx.fillRect(x + p * 2, y + p * 7, p * 4, p);
        ctx.fillStyle = '#FFCC00';
        ctx.fillRect(x + p * 3, y + p * 8, p * 2, p * 2);
    },

    drawPlanet(ctx, x, y, s, color, ringColor) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p * 4, p);
        ctx.fillRect(x, y + p, p * 6, p);
        ctx.fillRect(x, y + p * 2, p * 6, p * 2);
        ctx.fillRect(x, y + p * 4, p * 6, p);
        ctx.fillRect(x + p, y + p * 5, p * 4, p);
        if (ringColor) {
            ctx.fillStyle = ringColor;
            ctx.fillRect(x - p, y + p * 2, p, p);
            ctx.fillRect(x + p * 6, y + p * 2, p, p);
            ctx.fillRect(x - p, y + p * 3, p * 2, p);
            ctx.fillRect(x + p * 5, y + p * 3, p * 2, p);
        }
    },

    drawMeteor(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p * 3, p);
        ctx.fillRect(x, y + p, p * 4, p * 2);
        ctx.fillRect(x + p, y + p * 3, p * 3, p);
        ctx.fillRect(x + p * 2, y + p * 4, p, p);
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(x + p, y + p, p, p);
        ctx.fillRect(x + p * 3, y + p * 2, p, p);
    },

    drawAstronaut(ctx, x, y, s) {
        const p = s;
        ctx.fillStyle = '#E8E8E8';
        ctx.fillRect(x + p * 2, y, p * 4, p);
        ctx.fillRect(x + p, y + p, p * 6, p);
        ctx.fillRect(x + p, y + p * 2, p * 6, p * 2);
        ctx.fillRect(x + p * 2, y + p * 4, p * 4, p);
        ctx.fillStyle = '#4488FF';
        ctx.fillRect(x + p * 2, y + p, p * 4, p * 3);
        ctx.fillStyle = '#88CCFF';
        ctx.fillRect(x + p * 2, y + p, p * 2, p * 2);
        ctx.fillStyle = '#E8E8E8';
        ctx.fillRect(x + p, y + p * 5, p * 6, p * 3);
        ctx.fillStyle = '#CCCCCC';
        ctx.fillRect(x, y + p * 5, p, p * 3);
        ctx.fillRect(x + p * 7, y + p * 5, p, p * 3);
        ctx.fillStyle = '#E8E8E8';
        ctx.fillRect(x + p * 2, y + p * 8, p * 2, p * 2);
        ctx.fillRect(x + p * 4, y + p * 8, p * 2, p * 2);
        ctx.fillRect(x, y + p * 5, p, p * 2);
        ctx.fillRect(x + p * 7, y + p * 5, p, p * 2);
    },

    drawCat(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p * 2, p * 2);
        ctx.fillRect(x + p * 5, y, p * 2, p * 2);
        ctx.fillStyle = '#FFB6C1';
        ctx.fillRect(x + p * 2, y + p, p, p);
        ctx.fillRect(x + p * 5, y + p, p, p);
        ctx.fillStyle = color;
        ctx.fillRect(x, y + p * 2, p * 8, p * 4);
        ctx.fillStyle = '#333';
        ctx.fillRect(x + p * 2, y + p * 3, p * 2, p * 2);
        ctx.fillRect(x + p * 5, y + p * 3, p * 2, p * 2);
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + p * 2, y + p * 3, p, p);
        ctx.fillRect(x + p * 5, y + p * 3, p, p);
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(x + p * 3, y + p * 5, p * 2, p);
        ctx.fillStyle = '#333';
        ctx.fillRect(x + p * 3, y + p * 6, p, p);
        ctx.fillRect(x + p * 4, y + p * 6, p, p);
    },

    drawRabbit(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p * 2, y - p * 2, p * 2, p * 4);
        ctx.fillRect(x + p * 5, y - p * 2, p * 2, p * 4);
        ctx.fillStyle = '#FFB6C1';
        ctx.fillRect(x + p * 3, y - p, p, p * 2);
        ctx.fillRect(x + p * 6, y - p, p, p * 2);
        ctx.fillStyle = color;
        ctx.fillRect(x, y + p * 2, p * 8, p * 4);
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(x + p * 2, y + p * 3, p * 2, p * 2);
        ctx.fillRect(x + p * 5, y + p * 3, p * 2, p * 2);
        ctx.fillRect(x + p * 3, y + p * 5, p * 2, p);
        ctx.fillStyle = '#333';
        ctx.fillRect(x + p * 3, y + p * 6, p, p);
        ctx.fillRect(x + p * 5, y + p * 6, p, p);
    },

    drawChick(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p, y, p * 6, p * 5);
        ctx.fillStyle = '#333';
        ctx.fillRect(x + p * 2, y + p * 2, p * 2, p * 2);
        ctx.fillRect(x + p * 5, y + p * 2, p * 2, p * 2);
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + p * 2, y + p * 2, p, p);
        ctx.fillRect(x + p * 5, y + p * 2, p, p);
        ctx.fillStyle = '#FF8C00';
        ctx.fillRect(x + p * 3, y + p * 4, p * 3, p * 2);
        ctx.fillStyle = '#FFB6C1';
        ctx.fillRect(x + p, y + p * 3, p * 2, p);
        ctx.fillRect(x + p * 6, y + p * 3, p * 2, p);
    },

    drawBear(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, p * 3, p * 3);
        ctx.fillRect(x + p * 5, y, p * 3, p * 3);
        ctx.fillStyle = '#FFB6C1';
        ctx.fillRect(x + p, y + p, p, p);
        ctx.fillRect(x + p * 6, y + p, p, p);
        ctx.fillStyle = color;
        ctx.fillRect(x, y + p * 2, p * 8, p * 5);
        ctx.fillStyle = '#333';
        ctx.fillRect(x + p * 2, y + p * 3, p * 2, p * 2);
        ctx.fillRect(x + p * 5, y + p * 3, p * 2, p * 2);
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + p * 2, y + p * 3, p, p);
        ctx.fillRect(x + p * 5, y + p * 3, p, p);
        ctx.fillStyle = '#333';
        ctx.fillRect(x + p * 3, y + p * 5, p * 2, p * 2);
        ctx.fillRect(x + p * 3, y + p * 6, p * 2, p);
    },

    drawTitle(ctx, x, y, s) {
        const p = s;
        const colors = ['#ff74ba', '#7fd1ff', '#ffd66b', '#ff8ac9', '#ff8ac9'];
        const chars = ['幸', '运', '刮', '刮', '乐'];

        chars.forEach((char, i) => {
            ctx.font = `bold ${p * 5}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 4;
            ctx.strokeText(char, x + i * p * 6, y);
            ctx.fillStyle = colors[i];
            ctx.fillText(char, x + i * p * 6, y);
        });
    },

    drawMoon(ctx, x, y, s, color) {
        const p = s;
        ctx.fillStyle = color;
        ctx.fillRect(x + p * 2, y, p * 2, p);
        ctx.fillRect(x + p, y + p, p * 4, p);
        ctx.fillRect(x, y + p * 2, p * 4, p * 2);
        ctx.fillRect(x + p, y + p * 4, p * 4, p);
        ctx.fillRect(x + p * 2, y + p * 5, p * 2, p);
        ctx.clearRect(x + p * 3, y + p, p * 2, p * 4);
    },

    drawBalloon(ctx, x, y, s) {
        const p = s;
        this.drawHeart(ctx, x, y, p, '#ff85c2');
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + p * 3, y + p * 6, p, p);
        ctx.fillStyle = '#ffb6dc';
        ctx.fillRect(x + p * 3, y + p * 7, p, p * 2);
        ctx.fillRect(x + p * 4, y + p * 9, p, p * 3);
    },

    drawBridge(ctx, x, y, w, s) {
        const p = s;
        ctx.fillStyle = '#f7aacb';
        ctx.fillRect(x, y, w, p * 2);
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < w; i += p * 6) {
            ctx.fillRect(x + i, y, p * 3, p);
        }
        ctx.fillStyle = '#d47faa';
        ctx.fillRect(x, y + p * 2, w, p);
        for (let i = 0; i < w; i += p * 10) {
            ctx.fillRect(x + i + p, y - p * 3, p * 2, p * 3);
            ctx.fillRect(x + i + p * 6, y - p * 2, p * 2, p * 2);
        }
    },

    drawLamp(ctx, x, y, s) {
        const p = s;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x + p, y, p * 3, p);
        ctx.fillStyle = '#ffd86b';
        ctx.fillRect(x, y + p, p * 5, p * 2);
        ctx.fillStyle = '#f08ab7';
        ctx.fillRect(x + p * 2, y + p * 3, p, p * 4);
        ctx.fillStyle = 'rgba(255, 234, 167, 0.45)';
        ctx.fillRect(x - p, y + p * 3, p * 7, p * 2);
    },

    drawPanelFrame(ctx, x, y, w, h, radius) {
        const borderGradient = ctx.createLinearGradient(x, y, x, y + h);
        borderGradient.addColorStop(0, '#ff9fd0');
        borderGradient.addColorStop(1, '#d375ab');

        ctx.fillStyle = '#fff6fb';
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, radius);
        ctx.fill();

        ctx.strokeStyle = borderGradient;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, radius);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255,255,255,0.92)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(x + 9, y + 9, w - 18, h - 18, radius - 6);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255,162,207,0.85)';
        ctx.setLineDash([10, 6]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x + 16, y + 16, w - 32, h - 32, radius - 10);
        ctx.stroke();
        ctx.setLineDash([]);
    },

    drawBackground(ctx, theme, w, h) {
        const t = this.themes[theme] || this.themes.cute;
        const s = w <= 320 ? 3 : 4;

        ctx.clearRect(0, 0, w, h);

        const backgroundGradient = ctx.createLinearGradient(0, 0, 0, h);
        backgroundGradient.addColorStop(0, t.bgGradient[0]);
        backgroundGradient.addColorStop(0.48, t.bgGradient[1]);
        backgroundGradient.addColorStop(1, t.bgGradient[2]);
        ctx.fillStyle = backgroundGradient;
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.fillRect(28, 16, w - 56, 14);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.fillRect(44, 36, w - 88, 10);

        const titleX = w * 0.31;
        this.drawTitle(ctx, titleX, 66, w <= 320 ? 5 : 6);
        this.drawBalloon(ctx, w - 86, 38, s);

        const cardX = 28;
        const cardY = 108;
        const cardW = w - 56;
        const cardH = h - 146;
        const radius = 22;

        this.drawPanelFrame(ctx, cardX, cardY, cardW, cardH, radius);
        t.decorations.call(this, ctx, w, h, s, { x: cardX, y: cardY, w: cardW, h: cardH });

        const scratchArea = {
            x: cardX + (w <= 320 ? 76 : 94),
            y: cardY + (w <= 320 ? 118 : 142),
            w: w <= 320 ? 180 : 210,
            h: w <= 320 ? 158 : 188,
            r: 18
        };

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.roundRect(scratchArea.x - 12, scratchArea.y - 12, scratchArea.w + 24, scratchArea.h + 24, scratchArea.r + 10);
        ctx.fill();

        this.drawBridge(ctx, cardX + 42, h - 84, cardW - 84, s);
        this.drawLamp(ctx, cardX + 18, h - 102, s);
        this.drawLamp(ctx, w - cardX - 38, h - 102, s);

        return scratchArea;
    },

    themes: {
        cute: {
            name: '萌宠',
            bgGradient: ['#ffb7df', '#f09be9', '#b183ff'],
            decorations(ctx, w, h, s, card) {
                const p = s;
                this.drawCat(ctx, card.x + 18, card.y + 46, p * 1.4, '#ffbdd7');
                this.drawRabbit(ctx, card.x + 26, card.y + 116, p * 1.25, '#ffffff');
                this.drawChick(ctx, card.x + 36, card.y + 188, p * 1.2, '#ffe168');
                this.drawBear(ctx, card.x + 24, card.y + 254, p * 1.28, '#b7835f');

                this.drawHeart(ctx, card.x + card.w - 68, card.y + 28, p, '#ff7ec1');
                this.drawStar(ctx, card.x + card.w - 54, card.y + 78, p, '#ffd86d');
                this.drawClover(ctx, card.x + card.w - 66, card.y + 126, p, '#67d96b');
                this.drawMoon(ctx, card.x + card.w - 62, card.y + 186, p, '#fff0ae');
                this.drawCoin(ctx, card.x + card.w - 64, card.y + 246, p, '#ffd25f');
                this.drawHeart(ctx, card.x + card.w - 72, card.y + 306, p, '#ff96cb');

                this.drawStar(ctx, card.x + 26, card.y + 18, p, '#fff0ae');
                this.drawHeart(ctx, card.x + 116, card.y + 26, p, '#ff96cb');
                this.drawClover(ctx, card.x + 184, card.y + 22, p, '#6be178');
                this.drawStar(ctx, card.x + 242, card.y + 18, p, '#ffe07c');

                this.drawCoin(ctx, card.x + 112, card.y + card.h - 84, p, '#ffd25f');
                this.drawHeart(ctx, card.x + 168, card.y + card.h - 74, p, '#ff8fc8');
                this.drawClover(ctx, card.x + 220, card.y + card.h - 80, p, '#6be178');
            }
        },
        ocean: {
            name: '海洋',
            bgGradient: ['#00CED1', '#20B2AA', '#008B8B'],
            decorations(ctx, w, h, s) {
                const p = s;
                this.drawDolphin(ctx, 10, 10, p, '#1E90FF');
                this.drawDolphin(ctx, 10, 10 + p * 10, p * 1.2, '#4169E1');
                this.drawStar(ctx, w - 60, 20, p, '#FFD700');
                this.drawHeart(ctx, w * 0.35, 30, p, '#FF69B4');
                this.drawFish(ctx, w * 0.25, 50, p, '#FF8C00', '#000');
                this.drawFish(ctx, w * 0.5, 50, p, '#FF6347', '#000');
                this.drawSeaweed(ctx, w * 0.4, 40, p, '#32CD32');
                this.drawSeaweed(ctx, w * 0.65, 40, p, '#32CD32');
            }
        },
        space: {
            name: '星战',
            bgGradient: ['#0a0a2e', '#1a1a4e', '#0d0d3d'],
            decorations(ctx, w, h, s) {
                const p = s;
                this.drawRocket(ctx, 10, 10, p, '#E8E8E8');
                this.drawPlanet(ctx, w * 0.35, 20, p * 1.2, '#4169E1', '#DDA0DD');
                this.drawPlanet(ctx, w * 0.25, 60, p * 0.8, '#FF8C00', '#FFD700');
                this.drawStar(ctx, w - 60, 20, p, '#FFD700');
            }
        }
    }
};
