# good task, m.A.A.d list

Это приложение позволяет:

- создавать задачи;
- удалять задачи;
- редактировать задачи;
- фильтровать их по сделано/не сделано;
- помечать их как сделано/не сделано.

В разработке приложения я использовал:

- React;
- Redux Toolkit;
- TypeScript;
- SCSS;
- А также несколько более мелких библиотек:
  - classnames (объединение SCSS классов в JSX/TSX разметке);
  - react-icons (иконки для React);
  - react-md-editor (отображение md разметки);
  - redux-persist (хранение состояния в localStorage);
  - nanoid (создание ID);
  - craco (чтобы работали абсолютные импорты);
  - jest (unit тестировани).

Придерживался DRY, KISS, функционального программирования и Feature-Sliced Design.

Функции, описанные выше, являются функциями первой версии приложения.
Это приложение можно расширить, добавив новую функциональность, например: смена светлой и темной темы, добавление подзадач с бесконечной вложенностью.
