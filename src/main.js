import _ from 'loadsh'
import sayHello from '@/modules/MyModules'
import Greeter from '@/modules/Greeter'
import './style.css'

const arr = _.concat([1, 2, 3, 4])
const a = new Greeter()
a.greet()
sayHello('hi,ci' + arr)

const container = '<div class="container" style="color: green">内容</div>'
document.getElementsById('container').innerHtml = container
