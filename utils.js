export function getElById(id) {
    return document.getElementById(id);
}

export const random = (num) => Math.ceil(Math.random() * num);

export function countClicks(limitClicks) {
    return () => limitClicks > 0 ? --limitClicks : limitClicks = 0;
}

export const changeButtonName = (btn, clicks) => {
    let btnName = btn.textContent.split(' ');

    btnName.splice(btnName.indexOf('('), 1);

    return `${btnName.join(' ')} (${clicks})`;
}