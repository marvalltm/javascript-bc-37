const initData = {
  title: 'Some Title',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quos.
    Possimus laudantium iure quisquam ipsam nesciunt veniam alias magni,
    inventore corporis, voluptatibus est eum temporibus rem cupiditate
    adipisci quam quos.`,
  url: 'https://picsum.photos/id/[id]/200/300',
};

const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const images = [
  {
    url: `https://picsum.photos/id/1/200/300`,
    urlLarge: `https://picsum.photos/id/1/400/500`,
  },
  {
    url: `https://picsum.photos/id/2/200/300`,
    urlLarge: `https://picsum.photos/id/2/400/500`,
  },
  {
    url: `https://picsum.photos/id/12/200/300`,
    urlLarge: `https://picsum.photos/id/12/400/500`,
  },
  {
    url: `https://picsum.photos/id/121/200/300`,
    urlLarge: `https://picsum.photos/id/121/400/500`,
  },
  {
    url: `https://picsum.photos/id/122/200/300`,
    urlLarge: `https://picsum.photos/id/122/400/500`,
  },
  {
    url: `https://picsum.photos/id/22/200/300`,
    urlLarge: `https://picsum.photos/id/22/400/500`,
  },
  {
    url: `https://picsum.photos/id/33/200/300`,
    urlLarge: `https://picsum.photos/id/33/400/500`,
  },
  {
    url: `https://picsum.photos/id/32/200/300`,
    urlLarge: `https://picsum.photos/id/32/400/500`,
  },
  {
    url: `https://picsum.photos/id/31/200/300`,
    urlLarge: `https://picsum.photos/id/31/400/500`,
  },
  {
    url: `https://picsum.photos/id/123/200/300`,
    urlLarge: `https://picsum.photos/id/123/400/500`,
  },
  {
    url: `https://picsum.photos/id/13/200/300`,
    urlLarge: `https://picsum.photos/id/13/400/500`,
  },
  {
    url: `https://picsum.photos/id/44/200/300`,
    urlLarge: `https://picsum.photos/id/44/400/500`,
  },
  {
    url: `https://picsum.photos/id/55/200/300`,
    urlLarge: `https://picsum.photos/id/55/400/500`,
  },
  {
    url: `https://picsum.photos/id/515/200/300`,
    urlLarge: `https://picsum.photos/id/515/400/500`,
  },
  {
    url: `https://picsum.photos/id/223/200/300`,
    urlLarge: `https://picsum.photos/id/223/400/500`,
  },
  {
    url: `https://picsum.photos/id/100/200/300`,
    urlLarge: `https://picsum.photos/id/100/400/500`,
  },
  {
    url: `https://picsum.photos/id/200/200/300`,
    urlLarge: `https://picsum.photos/id/200/400/500`,
  },
  {
    url: `https://picsum.photos/id/120/200/300`,
    urlLarge: `https://picsum.photos/id/120/400/500`,
  },
  {
    url: `https://picsum.photos/id/1210/200/300`,
    urlLarge: `https://picsum.photos/id/1210/400/500`,
  },
  {
    url: `https://picsum.photos/id/1220/200/300`,
    urlLarge: `https://picsum.photos/id/1220/400/500`,
  },
  {
    url: `https://picsum.photos/id/220/200/300`,
    urlLarge: `https://picsum.photos/id/220/400/500`,
  },
  {
    url: `https://picsum.photos/id/330/200/300`,
    urlLarge: `https://picsum.photos/id/330/400/500`,
  },
  {
    url: `https://picsum.photos/id/320/200/300`,
    urlLarge: `https://picsum.photos/id/320/400/500`,
  },
  {
    url: `https://picsum.photos/id/310/200/300`,
    urlLarge: `https://picsum.photos/id/310/400/500`,
  },
  {
    url: `https://picsum.photos/id/1230/200/300`,
    urlLarge: `https://picsum.photos/id/1230/400/500`,
  },
  {
    url: `https://picsum.photos/id/130/200/300`,
    urlLarge: `https://picsum.photos/id/130/400/500`,
  },
  {
    url: `https://picsum.photos/id/440/200/300`,
    urlLarge: `https://picsum.photos/id/440/400/500`,
  },
  {
    url: `https://picsum.photos/id/550/200/300`,
    urlLarge: `https://picsum.photos/id/550/400/500`,
  },
  {
    url: `https://picsum.photos/id/5150/200/300`,
    urlLarge: `https://picsum.photos/id/5150/400/500`,
  },
  {
    url: `https://picsum.photos/id/2230/200/300`,
    urlLarge: `https://picsum.photos/id/2230/400/500`,
  },
  {
    url: `https://picsum.photos/id/19/200/300`,
    urlLarge: `https://picsum.photos/id/19/400/500`,
  },
  {
    url: `https://picsum.photos/id/29/200/300`,
    urlLarge: `https://picsum.photos/id/29/400/500`,
  },
  {
    url: `https://picsum.photos/id/129/200/300`,
    urlLarge: `https://picsum.photos/id/129/400/500`,
  },
  {
    url: `https://picsum.photos/id/1219/200/300`,
    urlLarge: `https://picsum.photos/id/1219/400/500`,
  },
  {
    url: `https://picsum.photos/id/1229/200/300`,
    urlLarge: `https://picsum.photos/id/1229/400/500`,
  },
  {
    url: `https://picsum.photos/id/229/200/300`,
    urlLarge: `https://picsum.photos/id/229/400/500`,
  },
  {
    url: `https://picsum.photos/id/339/200/300`,
    urlLarge: `https://picsum.photos/id/339/400/500`,
  },
  {
    url: `https://picsum.photos/id/329/200/300`,
    urlLarge: `https://picsum.photos/id/329/400/500`,
  },
  {
    url: `https://picsum.photos/id/319/200/300`,
    urlLarge: `https://picsum.photos/id/319/400/500`,
  },
  {
    url: `https://picsum.photos/id/1239/200/300`,
    urlLarge: `https://picsum.photos/id/1239/400/500`,
  },
  {
    url: `https://picsum.photos/id/139/200/300`,
    urlLarge: `https://picsum.photos/id/139/400/500`,
  },
  {
    url: `https://picsum.photos/id/449/200/300`,
    urlLarge: `https://picsum.photos/id/449/400/500`,
  },
  {
    url: `https://picsum.photos/id/559/200/300`,
    urlLarge: `https://picsum.photos/id/559/400/500`,
  },
  {
    url: `https://picsum.photos/id/5159/200/300`,
    urlLarge: `https://picsum.photos/id/5159/400/500`,
  },
  {
    url: `https://picsum.photos/id/2239/200/300`,
    urlLarge: `https://picsum.photos/id/2239/400/500`,
  },
  {
    url: `https://picsum.photos/id/17/200/300`,
    urlLarge: `https://picsum.photos/id/17/400/500`,
  },
  {
    url: `https://picsum.photos/id/27/200/300`,
    urlLarge: `https://picsum.photos/id/27/400/500`,
  },
  {
    url: `https://picsum.photos/id/127/200/300`,
    urlLarge: `https://picsum.photos/id/127/400/500`,
  },
  {
    url: `https://picsum.photos/id/1217/200/300`,
    urlLarge: `https://picsum.photos/id/1217/400/500`,
  },
  {
    url: `https://picsum.photos/id/1227/200/300`,
    urlLarge: `https://picsum.photos/id/1227/400/500`,
  },
  {
    url: `https://picsum.photos/id/227/200/300`,
    urlLarge: `https://picsum.photos/id/227/400/500`,
  },
  {
    url: `https://picsum.photos/id/337/200/300`,
    urlLarge: `https://picsum.photos/id/337/400/500`,
  },
  {
    url: `https://picsum.photos/id/327/200/300`,
    urlLarge: `https://picsum.photos/id/327/400/500`,
  },
  {
    url: `https://picsum.photos/id/317/200/300`,
    urlLarge: `https://picsum.photos/id/317/400/500`,
  },
  {
    url: `https://picsum.photos/id/1237/200/300`,
    urlLarge: `https://picsum.photos/id/1237/400/500`,
  },
  {
    url: `https://picsum.photos/id/137/200/300`,
    urlLarge: `https://picsum.photos/id/137/400/500`,
  },
  {
    url: `https://picsum.photos/id/447/200/300`,
    urlLarge: `https://picsum.photos/id/447/400/500`,
  },
  {
    url: `https://picsum.photos/id/557/200/300`,
    urlLarge: `https://picsum.photos/id/557/400/500`,
  },
  {
    url: `https://picsum.photos/id/5157/200/300`,
    urlLarge: `https://picsum.photos/id/5157/400/500`,
  },
  {
    url: `https://picsum.photos/id/2237/200/300`,
    urlLarge: `https://picsum.photos/id/2237/400/500`,
  },
];
