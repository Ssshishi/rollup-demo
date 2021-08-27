# rollup-demo
rollup打包工具

特性:<br/>
   ### rollup 所有资源放同一个地方，一次性加载,利用 tree-shake特性来  剔除未使用的代码，减少冗余<br/>
   ### webpack 拆分代码、按需加载  webpack2已经逐渐支持tree-shake <br/>
   ## rollup: <br/>
     1.打包你的 js 文件的时候如果发现你的无用变量，会将其删掉。
     2.可以将你的 js 中的代码，编译成你想要的格式 <br/>
   ## webpack: <br/>
    1.代码拆分
    2.静态资源导入（如 js、css、图片、字体等）<br/>
    拥有如此强大的功能，所以 webpack 在进行资源打包的时候，就会产生很多冗余的代码。
    
 -----
    
## Rollup 的好处
> Tree Shaking: 自动移除未使用的代码, 输出更小的文件<br/>
Scope Hoisting: 所有模块构建在一个函数内, 执行效率更高<br/>
Config 文件支持通过 ESM 模块格式书写<br/>
可以一次输出多种格式:IIFE, AMD, CJS, UMD, ESM<br/>
Development 与 production 版本: .js, .min.js<br/>


