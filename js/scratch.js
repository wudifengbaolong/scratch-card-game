(function() {
    'use strict';

    const BASE_WIDTH = 1680;
    const BASE_HEIGHT = 2240;
    const DPR = window.devicePixelRatio || 1;

    const SCRATCH_RECT = {
        x: 278,
        y: 907,
        w: 1122,
        h: 1008,
        r: 24
    };

    const BACKGROUNDS = [
        '素材库/040edd9f108d4f85a6f9dbabbd8f1a73~tplv-tb4s082cfz-aigc_resize_360_360.webp',
        '素材库/0d9aa49e8a0946539d0836ddaae34cf5~tplv-tb4s082cfz-aigc_resize_360_360.webp',
        '素材库/c9930c9a1c2748f499c8be6f77ea9f0e~tplv-tb4s082cfz-aigc_resize_360_360.webp',
        '素材库/f7768afb4173447ca6227d01809d622b~tplv-tb4s082cfz-aigc_resize_360_360.webp',
        '素材库/jimeng-2026-08-07-4221-保持整体像素风、粉色背景、边框装饰、顶部所有角落卡通和文字元素100%不变，将九....png',
        '素材库/jimeng-2026-08-07-5997-保持整体像素风、粉色背景、边框装饰、顶部所有角落卡通和文字元素100%不变，将九....png',
        '素材库/jimeng-2026-08-07-8542-保持整体像素风、粉色背景、边框装饰、顶部所有角落卡通和文字元素100%不变，将九....png',
        '素材库/jimeng-2026-08-07-8894-保持整体像素风、粉色背景、边框装饰、顶部所有角落卡通和文字元素100%不变，将九....png',
        '素材库/jimeng-2026-08-07-4435-保持整体像素风、粉色背景、边框装饰、顶部所有角落卡通和文字元素100%不变，完全....png'
    ];
    const HIGH_FREQ_INDEX = 8;
    const HIGH_FREQ_WEIGHT = 0.6;

    let isScratching = false;
    let isRevealed = false;
    let layout = null;

    const stage = document.getElementById('cardStage');
    const cardArt = document.getElementById('cardArt');
    const scratchCanvas = document.getElementById('scratchCanvas');
    const scratchCtx = scratchCanvas.getContext('2d');

    if (!CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
            if (typeof r === 'number') r = [r, r, r, r];
            const [tl, tr, br, bl] = r;
            this.moveTo(x + tl, y);
            this.lineTo(x + w - tr, y);
            this.quadraticCurveTo(x + w, y, x + w, y + tr);
            this.lineTo(x + w, y + h - br);
            this.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
            this.lineTo(x + bl, y + h);
            this.quadraticCurveTo(x, y + h, x, y + h - bl);
            this.lineTo(x, y + tl);
            this.quadraticCurveTo(x, y, x + tl, y);
            this.closePath();
        };
    }

    function updateCanvasSize() {
        const rect = stage.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        scratchCanvas.width = Math.round(width * DPR);
        scratchCanvas.height = Math.round(height * DPR);
        scratchCanvas.style.width = `${width}px`;
        scratchCanvas.style.height = `${height}px`;

        scratchCtx.setTransform(DPR, 0, 0, DPR, 0, 0);

        const scaleX = width / BASE_WIDTH;
        const scaleY = height / BASE_HEIGHT;
        layout = {
            width,
            height,
            scratchArea: {
                x: SCRATCH_RECT.x * scaleX,
                y: SCRATCH_RECT.y * scaleY,
                w: SCRATCH_RECT.w * scaleX,
                h: SCRATCH_RECT.h * scaleY,
                r: SCRATCH_RECT.r * ((scaleX + scaleY) / 2)
            }
        };
    }

    function drawScratchLayer() {
        if (!layout) return;

        const area = layout.scratchArea;
        const radius = area.r;
        const grain = Math.max(2, Math.round(area.w / 140));

        scratchCtx.clearRect(0, 0, layout.width, layout.height);
        scratchCtx.save();
        scratchCtx.beginPath();
        scratchCtx.roundRect(area.x, area.y, area.w, area.h, radius);
        scratchCtx.clip();

        const gradient = scratchCtx.createLinearGradient(area.x, area.y, area.x + area.w, area.y + area.h);
        gradient.addColorStop(0, '#f0f1f4');
        gradient.addColorStop(0.26, '#d2d5db');
        gradient.addColorStop(0.5, '#ffffff');
        gradient.addColorStop(0.72, '#d0d3da');
        gradient.addColorStop(1, '#a7acb7');
        scratchCtx.fillStyle = gradient;
        scratchCtx.fillRect(area.x, area.y, area.w, area.h);

        const sheen = scratchCtx.createLinearGradient(area.x, area.y, area.x + area.w, area.y);
        sheen.addColorStop(0, 'rgba(255,255,255,0)');
        sheen.addColorStop(0.3, 'rgba(255,255,255,0.22)');
        sheen.addColorStop(0.5, 'rgba(255,255,255,0.52)');
        sheen.addColorStop(0.68, 'rgba(255,255,255,0.15)');
        sheen.addColorStop(1, 'rgba(255,255,255,0)');
        scratchCtx.fillStyle = sheen;
        scratchCtx.fillRect(area.x, area.y, area.w, area.h);

        for (let y = area.y; y < area.y + area.h; y += grain) {
            for (let x = area.x; x < area.x + area.w; x += grain) {
                const base = 195 + Math.floor(Math.random() * 40);
                const alpha = 0.22 + Math.random() * 0.14;
                scratchCtx.fillStyle = `rgba(${base}, ${base}, ${base + 8}, ${alpha})`;
                scratchCtx.fillRect(x, y, grain, grain);
            }
        }

        scratchCtx.strokeStyle = 'rgba(255,255,255,0.75)';
        scratchCtx.lineWidth = Math.max(1.5, area.w * 0.004);
        scratchCtx.beginPath();
        scratchCtx.roundRect(area.x + area.w * 0.018, area.y + area.h * 0.018, area.w * 0.964, area.h * 0.964, Math.max(4, radius - 4));
        scratchCtx.stroke();

        scratchCtx.restore();
    }

    function drawAll() {
        updateCanvasSize();
        drawScratchLayer();
        isRevealed = false;
    }

    function getCanvasPos(e) {
        const rect = scratchCanvas.getBoundingClientRect();
        let clientX, clientY;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const scaleX = scratchCanvas.width / DPR / rect.width;
        const scaleY = scratchCanvas.height / DPR / rect.height;

        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function scratchAt(x, y) {
        if (!layout || isRevealed) return;

        const area = layout.scratchArea;
        if (x < area.x || x > area.x + area.w || y < area.y || y > area.y + area.h) return;

        const brushSize = Math.max(14, area.w * 0.038);
        scratchCtx.save();
        scratchCtx.globalCompositeOperation = 'destination-out';
        scratchCtx.beginPath();
        scratchCtx.arc(x, y, brushSize, 0, Math.PI * 2);
        scratchCtx.fill();
        scratchCtx.restore();
    }

    function getScratchPercent() {
        if (!layout) return 0;

        const area = layout.scratchArea;
        const w = Math.max(1, Math.floor(area.w));
        const h = Math.max(1, Math.floor(area.h));
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = w;
        tempCanvas.height = h;

        tempCtx.drawImage(
            scratchCanvas,
            area.x * DPR,
            area.y * DPR,
            area.w * DPR,
            area.h * DPR,
            0,
            0,
            w,
            h
        );

        const pixels = tempCtx.getImageData(0, 0, w, h).data;
        let transparentCount = 0;
        let totalChecked = 0;

        for (let i = 3; i < pixels.length; i += 16) {
            totalChecked++;
            if (pixels[i] < 128) transparentCount++;
        }

        return totalChecked > 0 ? transparentCount / totalChecked : 0;
    }

    function revealAll() {
        if (!layout || isRevealed) return;
        isRevealed = true;

        const area = layout.scratchArea;
        scratchCtx.save();
        scratchCtx.globalCompositeOperation = 'destination-out';
        scratchCtx.clearRect(area.x, area.y, area.w, area.h);
        scratchCtx.restore();
    }

    function newGame() {
        let idx;
        if (Math.random() < HIGH_FREQ_WEIGHT) {
            idx = HIGH_FREQ_INDEX;
        } else {
            const others = BACKGROUNDS.filter((_, i) => i !== HIGH_FREQ_INDEX);
            idx = BACKGROUNDS.indexOf(others[Math.floor(Math.random() * others.length)]);
        }
        cardArt.src = BACKGROUNDS[idx];
        cardArt.onload = () => drawAll();
    }

    function checkScratchProgress() {
        if (isRevealed) return;
        if (getScratchPercent() >= 0.4) revealAll();
    }

    function bindEvents() {
        scratchCanvas.addEventListener('mousedown', (e) => {
            if (isRevealed) return;
            isScratching = true;
            const pos = getCanvasPos(e);
            scratchAt(pos.x, pos.y);
        });

        scratchCanvas.addEventListener('mousemove', (e) => {
            if (!isScratching || isRevealed) return;
            const pos = getCanvasPos(e);
            scratchAt(pos.x, pos.y);
        });

        scratchCanvas.addEventListener('mouseup', () => {
            isScratching = false;
        });

        scratchCanvas.addEventListener('mouseleave', () => {
            isScratching = false;
        });

        scratchCanvas.addEventListener('touchstart', (e) => {
            if (isRevealed) return;
            e.preventDefault();
            isScratching = true;
            const pos = getCanvasPos(e);
            scratchAt(pos.x, pos.y);
        }, { passive: false });

        scratchCanvas.addEventListener('touchmove', (e) => {
            if (!isScratching || isRevealed) return;
            e.preventDefault();
            const pos = getCanvasPos(e);
            scratchAt(pos.x, pos.y);
        }, { passive: false });

        scratchCanvas.addEventListener('touchend', () => {
            isScratching = false;
        });

        scratchCanvas.addEventListener('touchcancel', () => {
            isScratching = false;
        });

        scratchCanvas.addEventListener('dblclick', newGame);

        document.getElementById('btnNew').addEventListener('click', newGame);

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(drawAll, 120);
        });
    }

    function init() {
        bindEvents();
        newGame();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
