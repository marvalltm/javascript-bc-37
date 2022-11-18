'use strict';
/**
 *  ================ Example 1 ==================
 * Поширення подій. Спливання подій. stopPropogation
 * Event.target ( на якому відбулась подія )
 * Event.currentTarget ( на якому знаходиться лістенер )
 * параметри AddEventListeners(event, callback, options, capture)
 */

// const section = document.querySelector('.section');
// // const div = document.querySelector('.div');
// // const p = document.querySelector('.description');
// const button = document.querySelector('.action');

// const eventHandler = function (event) {
//   event.stopPropagation();
//   // console.dir(event.currentTarget);
//   // console.dir(event.target);
//   console.log(event.currentTarget.nodeName);
// };

// const eventHandler = function (event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     console.log('We take section');
//   }
// };

// const eventHandler1 = function (event) {
//   if (event.target === event.currentTarget) {
//     console.log('We take button');
//   }
// };

// section.addEventListener('click', eventHandler1);
// // div.addEventListener('click', eventHandler);
// // p.addEventListener('click', eventHandler);
// button.addEventListener('click', eventHandler1);

/*
 * параметри addEventListener(event, callback, options, useCapture)
 *
 */

//pussive
// const form = document.querySelector('.form');
// const eventHandler = function (event) {
//   event.preventDefault();
//   console.log(event);
// };

// form.addEventListener(
//   'submit',
//   eventHandler,
//   {
//     // capture: true,
//     // once: true,
//     passive: true,
//   },
//   true
// );

// const section = document.querySelector('.section');
// const div = document.querySelector('.div');
// const p = document.querySelector('.description');
// const button = document.querySelector('.action');

// const eventHandler = function (event) {
//   console.log(event.currentTarget.nodeName);
// };

// section.addEventListener('click', eventHandler, {
//   capture: true,
//   // once: true,
//   //   passive: true,
// });
// div.addEventListener('click', eventHandler, {
//   capture: true,
//   // once: true,
//   //   passive: true,
// });
// p.addEventListener('click', eventHandler, {
//   capture: true,
//   // once: true,
//   //   passive: true,
// });
// button.addEventListener('click', eventHandler, {
//   capture: true,
//   // once: true,
//   //   passive: true,
// });

/**
 * ================ DATA-ATRIBUTES ==================
 * Треба розглянути data-atribues
 */

// const calendar = document.querySelector('[data-index="calendar"]');
// console.log(calendar.dataset.index);

// calendar.dataset.some = 'anyValue';
// console.dir(calendar);

/**
 *  ================ Example 2 ==================
 * Делегування подій
 * Написати генерацію календаря.
 * Написати делегування подій для календаря, таким чином, щом при клікі на день, він позначався як віделиний.
 * Якщо ми будему клікати на день тиждня, то будуть виділятись всі дні цього тижня.
 */

const calendar = document.querySelector('.calendar');

const makeCalendarObjects = function () {
  const startOfMonth = moment().startOf('month');
  const daysOfMonth = moment().daysInMonth();
  const daysCount = daysOfMonth / 7 > 4 ? 35 : 28;
  const weeks = [];
  let week = [];
  for (let i = 1; i <= daysCount; i += 1) {
    if (startOfMonth.days() > i) {
      week.push({ index: i, day: null });
    } else {
      week.push({
        index: i,
        day:
          startOfMonth.month() === moment().month()
            ? startOfMonth.date()
            : null,
      });
      startOfMonth.add(1, 'd');
    }
    if (week.length === 7) {
      weeks.push([...week]);
      week = [];
    }
  }
  return weeks;
};

const makeCalendarMarkUp = function (calendarObjects) {
  let calendar = calendarObjects
    .map(week => {
      return `<tr>\n
        ${week
          .map(({ day }, index) => {
            return `
            <td
              class="table-day"
              data-day="${day ? day : ''}"
              data-week="${index + 1}" >${day ? day : ''}
            </td>\n`;
          })
          .join('')}
      </tr>\n`;
    })
    .join('');
  return `
    <table>
        <thead>
          <tr>
              <th class="table-day" data-week="1" data-main="true">Пнд</th>
              <th class="table-day" data-week="2" data-main="true">Вт</th>
              <th class="table-day" data-week="3" data-main="true">Ср</th>
              <th class="table-day" data-week="4" data-main="true">Чт</th>
              <th class="table-day" data-week="5" data-main="true">Пт</th>
              <th class="table-day" data-week="6" data-main="true">Сбт</th>
              <th class="table-day" data-week="7" data-main="true">Нд</th>
          </tr>
        </thead>
        <tbody>
          ${calendar}
        </tbody>
    </table>
    `;
};

const root = document.querySelector('.calendar');
root.insertAdjacentHTML(
  'afterbegin',
  makeCalendarMarkUp(makeCalendarObjects())
);
const handler = event => {
  const tds = document.querySelectorAll('[data-day]');
  if (event.target.dataset.main) {
    tds.forEach(item => {
      if (item.dataset.week === event.target.dataset.week) {
        if (item.dataset.day) {
          item.classList.add('selected');
        }
      } else {
        item.classList.remove('selected');
      }
    });
  } else if (event.target.dataset.day) {
    tds.forEach(item => {
      if (item === event.target) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  }
  const customEvent = new Event('enter', {
    type: 'enter',
  });
  calendar.dispatchEvent(customEvent);
};

root.addEventListener('click', handler);

calendar.addEventListener('enter', e => {
  console.log(e.type);
});
