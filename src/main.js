import _ from 'loadsh'
import sayHello from './modules/MyModules'
import Greeter from './modules/Greeter'

const arr = _.concat([1, 2, [3, 4], { name: 'fi' }])
const a = new Greeter()
a.greet()
sayHello('hi,ci' + arr)
