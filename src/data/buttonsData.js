const getCssContent = async (filePath) => {
  console.log('Fetching CSS from:', filePath);
  const response = await fetch(filePath);
  if (!response.ok) {
    console.error('Failed to fetch CSS:', response.statusText);
    return '';
  }
  const text = await response.text();
  console.log('CSS content:', text);
  return text;
};

const buttonsData = [
  {
    id: 1,
    buttonClass: 'change-background-color',
    title: 'Изменить цвет фона',
    code: getCssContent('/cssLibrary/change-background-color.css')
  },
  {
    id: 2,
    buttonClass: 'change-text-color',
    title: 'Изменить цвет текста',
    code: getCssContent('/cssLibrary/change-text-color.css')
  },
  {
    id: 3,
    buttonClass: 'shadow',
    title: 'Добавить тень',
    code: getCssContent('/cssLibrary/shadow.css')
  },
  {
    id: 4,
    buttonClass: 'shadow',
    title: 'Добавить тень',
    code: getCssContent('/cssLibrary/shadow.css')
  },
  {
    id: 5,
    buttonClass: 'shadow',
    title: 'Добавить тень',
    code: getCssContent('/cssLibrary/shadow.css')
  }
];

export default buttonsData;