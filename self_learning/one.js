// console.log('Argument', process.argv);
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// understanding v8 memory management system

// Get information about V8's heap memory usage
const v8 = require('v8');
const heapStats = v8.getHeapStatistics();

console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');