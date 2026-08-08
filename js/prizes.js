// 奖品系统
const PrizeSystem = {
    prizes: [
        { level: 1, name: '一等奖', icon: '👑', color: '#f6a81f', probability: 0.05, label: '幸运暴击' },
        { level: 2, name: '二等奖', icon: '🎀', color: '#ff7ebd', probability: 0.15, label: '甜心好礼' },
        { level: 3, name: '三等奖', icon: '⭐', color: '#7a9dff', probability: 0.30, label: '星愿掉落' },
        { level: 0, name: '谢谢参与', icon: '☁️', color: '#8a88a5', probability: 0.50, label: '抱抱安慰奖' }
    ],

    getRandomPrize() {
        const random = Math.random();
        let cumulative = 0;

        for (const prize of this.prizes) {
            cumulative += prize.probability;
            if (random <= cumulative) {
                return prize;
            }
        }

        return this.prizes[this.prizes.length - 1];
    }
};
