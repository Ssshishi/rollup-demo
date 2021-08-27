import _ from 'loadsh'
import sayHello from './modules/MyModules'

const arr = _.concat([1, 2, [3, 4], { name: 'fi' }])
sayHello('hi,ci' + arr)
