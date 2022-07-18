import {
  filterCardsByYear,
  filterCardsByAmount,
  filterCardsByIsPopular,
  filterCardsByColors,
  filterCardsByCameras,
  filterCardsByManufacturer,
  sortNumbersAsc,
  sortNumbersDesc,
  sortStringAsc,
  sortStringDesc,
} from './tests';

const input = [
  {
    id: 1,
    year: '2017',
    amount: '10',
    color: 'green',
    isPopular: 'true',
    camera: 'three',
    manufacturer: 'lg',
  },
  {
    id: 2,
    year: '2010',
    amount: '1',
    color: 'black',
    isPopular: 'false',
    camera: 'one',
    manufacturer: 'huawei',
  },
  {
    id: 3,
    year: '2000',
    amount: '6',
    color: 'white',
    isPopular: 'false',
    camera: 'two',
    manufacturer: 'samsung',
  },
  {
    id: 4,
    year: '2022',
    amount: '20',
    color: 'green',
    isPopular: 'false',
    camera: 'four',
    manufacturer: 'lg',
  },
];

test('it should filter by year', () => {
  const output = [
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
    {
      id: 2,
      year: '2010',
      amount: '1',
      color: 'black',
      isPopular: 'false',
      camera: 'one',
      manufacturer: 'huawei',
    },
  ];

  expect(filterCardsByYear(input, '2010', '2017')).toEqual(output);
});

test('it should filter by amount', () => {
  const output = [
    {
      id: 2,
      year: '2010',
      amount: '1',
      color: 'black',
      isPopular: 'false',
      camera: 'one',
      manufacturer: 'huawei',
    },
    {
      id: 3,
      year: '2000',
      amount: '6',
      color: 'white',
      isPopular: 'false',
      camera: 'two',
      manufacturer: 'samsung',
    },
  ];

  expect(filterCardsByAmount(input, '0', '9')).toEqual(output);
});

test('it should filter by popularity', () => {
  const output = [
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
  ];

  expect(filterCardsByIsPopular(input)).toEqual(output);
});

test('it should filter by colors', () => {
  const output = [
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
    {
      id: 4,
      year: '2022',
      amount: '20',
      color: 'green',
      isPopular: 'false',
      camera: 'four',
      manufacturer: 'lg',
    },
  ];

  expect(filterCardsByColors(input, 'green')).toEqual(output);
});

test('it should filter by cameras', () => {
  const output = [
    {
      id: 3,
      year: '2000',
      amount: '6',
      color: 'white',
      isPopular: 'false',
      camera: 'two',
      manufacturer: 'samsung',
    },
  ];

  expect(filterCardsByCameras(input, 'two')).toEqual(output);
});

test('it should filter by manufacturer', () => {
  const output = [
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
    {
      id: 4,
      year: '2022',
      amount: '20',
      color: 'green',
      isPopular: 'false',
      camera: 'four',
      manufacturer: 'lg',
    },
  ];

  expect(filterCardsByManufacturer(input, 'lg')).toEqual(output);
});

test('it should sort numbers ascending', () => {
  const output = [
    {
      id: 3,
      year: '2000',
      amount: '6',
      color: 'white',
      isPopular: 'false',
      camera: 'two',
      manufacturer: 'samsung',
    },
    {
      id: 2,
      year: '2010',
      amount: '1',
      color: 'black',
      isPopular: 'false',
      camera: 'one',
      manufacturer: 'huawei',
    },
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
    {
      id: 4,
      year: '2022',
      amount: '20',
      color: 'green',
      isPopular: 'false',
      camera: 'four',
      manufacturer: 'lg',
    },
  ];

  expect(sortNumbersAsc(input, 'year')).toEqual(output);
});

test('it should sort numbers descending', () => {
  const output = [
    {
      id: 4,
      year: '2022',
      amount: '20',
      color: 'green',
      isPopular: 'false',
      camera: 'four',
      manufacturer: 'lg',
    },
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
    {
      id: 3,
      year: '2000',
      amount: '6',
      color: 'white',
      isPopular: 'false',
      camera: 'two',
      manufacturer: 'samsung',
    },
    {
      id: 2,
      year: '2010',
      amount: '1',
      color: 'black',
      isPopular: 'false',
      camera: 'one',
      manufacturer: 'huawei',
    },
  ];

  expect(sortNumbersDesc(input, 'amount')).toEqual(output);
});

test('it should sort strings ascending', () => {
  const output = [
    {
      id: 2,
      year: '2010',
      amount: '1',
      color: 'black',
      isPopular: 'false',
      camera: 'one',
      manufacturer: 'huawei',
    },
    {
      id: 4,
      year: '2022',
      amount: '20',
      color: 'green',
      isPopular: 'false',
      camera: 'four',
      manufacturer: 'lg',
    },
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
    {
      id: 3,
      year: '2000',
      amount: '6',
      color: 'white',
      isPopular: 'false',
      camera: 'two',
      manufacturer: 'samsung',
    },
  ];

  expect(sortStringAsc(input, 'manufacturer')).toEqual(output);
});

test('it should sort strings descending', () => {
  const output = [
    {
      id: 3,
      year: '2000',
      amount: '6',
      color: 'white',
      isPopular: 'false',
      camera: 'two',
      manufacturer: 'samsung',
    },
    {
      id: 4,
      year: '2022',
      amount: '20',
      color: 'green',
      isPopular: 'false',
      camera: 'four',
      manufacturer: 'lg',
    },
    {
      id: 1,
      year: '2017',
      amount: '10',
      color: 'green',
      isPopular: 'true',
      camera: 'three',
      manufacturer: 'lg',
    },
    {
      id: 2,
      year: '2010',
      amount: '1',
      color: 'black',
      isPopular: 'false',
      camera: 'one',
      manufacturer: 'huawei',
    },
  ];

  expect(sortStringDesc(input, 'manufacturer')).toEqual(output);
});
