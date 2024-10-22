import fs from "fs"

console.log("cwd:",process.cwd())
console.log("pid:",process.pid)
console.log("version", process.version)
console.log("platform", process.platform)

console.log("var. de entorno:", process.env)
console.log(process.env.PRUEBA_PORT)
console.log(process.env.PRUEBA_SECRET)

console.log("argumentos CLI:", process.argv)