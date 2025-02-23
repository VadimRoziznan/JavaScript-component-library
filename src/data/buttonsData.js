const getCssContent = async (filePath) => {
  console.log("Fetching CSS from:", filePath);
  const response = await fetch(filePath);
  if (!response.ok) {
    console.error("Failed to fetch CSS:", response.statusText);
    return "";
  }
  const text = await response.text();
  return text;
};

const buttonsData = [
  {
    id: 1,
    buttonClass: "change-background-color",
    title: "Изменить цвет фона",
    code: getCssContent("/cssLibrary/change-background-color.css"),
  },
  {
    id: 2,
    buttonClass: "change-text-color",
    title: "Изменить цвет текста",
    code: getCssContent("/cssLibrary/change-text-color.css"),
  },
  {
    id: 3,
    buttonClass: "shadow",
    title: "Добавить тень",
    code: getCssContent("/cssLibrary/shadow.css"),
  },
  {
    id: 4,
    buttonClass: "beauty-rotate",
    title: "Вращение картинки",
    code: getCssContent("/cssLibrary/beauty-rotate.css"),
  },
  {
    id: 5,
    buttonClass: "small-rotate",
    title: "Поворот картинки",
    code: getCssContent("/cssLibrary/small-rotate.css"),
  },
  {
    id: 6,
    buttonClass: "rotate-img",
    title: "Вращение картинки",
    code: getCssContent("/cssLibrary/rotate-img.css"),
  },
  {
    id: 7,
    buttonClass: "broken-frame",
    title: "Прерывестая рамка",
    code: getCssContent("/cssLibrary/dashed-frame.css"),
  },
  {
    id: 8,
    buttonClass: "solid-frame",
    title: "Сплошная рамка",
    code: getCssContent("/cssLibrary/solid-frame.css"),
  },
];

export default buttonsData;
