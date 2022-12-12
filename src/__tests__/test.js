import orderByProps from '../js/app';

test('Test 1', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = orderByProps(obj, ['name', 'level']);
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(order).toEqual(result);
});


test('Test 2', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = orderByProps(obj, ['defence']);
  const result = [
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(order).toEqual(result);
});

test('Test 3', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = orderByProps(obj, []);
  const result = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(order).toEqual(result);
});

test('Test 4', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = orderByProps(obj, ['health', 'level']);
  const result = [
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
  ];
  expect(order).toEqual(result);
});