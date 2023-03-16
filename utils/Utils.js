import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./../tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 12,
 
  notation: 'standard',
}).format(value);

export const formatPercentage = (value) => Intl.NumberFormat('es-ES', {
  style: 'percent',
  maximumSignificantDigits: 3,
 
}).format(value);




export const formatThousands = (value) => Intl.NumberFormat('es-ES', {
  maximumSignificantDigits: 12,
  minimumFractionDigits:2,
  
  notation: 'standard',
}).format(value);


export const convertDate = (date) => {
  const monthNames = ["01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12", "Error"
];

  date = new Date(date)
  let dd = date.getDate(); 
  let mm = date.getMonth();
  let yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  return date = dd+'/'+monthNames[mm]+'/'+yyyy
}

export const convertDateHTML5 = (date) => {
  const monthNames = ["01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12", "Error"
];

  date = new Date(date)
  let dd = date.getDate(); 
  let mm = date.getMonth();
  let yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  return date = yyyy +'-'+monthNames[mm]+'-' + dd
}


// simple linear regression
export function slopeAndIntercept(points){
  var rV = {},
      N = points.length,
      sumX = 0, 
      sumY = 0,
      sumXx = 0,
      sumYy = 0,
      sumXy = 0;

  // can't fit with 0 or 1 point
  if (N < 2){
    return rV;
  }    

  for (var i = 0; i < N; i++){
    var x = i,
        y = Number.parseInt(points[i]);
        
    
    sumX += x;
    sumY += y;
    sumXx += (x*x);
    sumYy += (y*y);
    sumXy += (x*y);
    
  }
  // calc slope and intercept
  rV['slope'] = ((N * sumXy) - (sumX * sumY)) / (N * sumXx - (sumX*sumX));
  rV['intercept'] = (sumY - rV['slope'] * sumX) / N;
  rV['rSquared'] = Math.abs((rV['slope'] * (sumXy - (sumX * sumY) / N)) / (sumYy - ((sumY * sumY) / N)));
  
  return rV;
}

export function lineFit(points){
  var sI = slopeAndIntercept(points);
  
  let newpoints = points.map((el)=>el.toString());
  if (sI){
    // we have slope/intercept, get points on fit line
    var N = points.length;
    var rV = [];
    rV.push([0, sI.slope * 0 + sI.intercept]);
    rV.push([N-1, sI.slope * N-1 + sI.intercept]);
    console.log(points, rV)
    return rV;
    
  }
  return [];
}




export const calculateTrendline = (series) => {
  // calc slope and intercept
  // then use resulting y = mx + b to create trendline
  var resultArray = lineFit(series);
  
  let finalArray = [];
  var m = (resultArray[1][1] - resultArray[0][1]) / (resultArray[1][0] - resultArray[0][0])
  var b = resultArray[1][1] - m * resultArray[1][0]

  for(let i = 0; i < series.length; i++) {
    let y = ((m*i)+b)
    finalArray.push(y.toFixed(1))
  }
  return finalArray;
}